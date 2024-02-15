"use client";
// import ActionBar from "@/components/ui/ActionBar";
// import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Input, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  ReloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useEffect, useReducer, useState } from "react";
//import { useDebounced } from "@/redux/hooks";
//import UMTable from "@/components/ui/UMTable";
//import { useAdminsQuery, useDeleteAdminMutation} from "@/redux/api/adminApi";
//import { IAdmin, IDepartment } from "@/types";
import dayjs from "dayjs";
//import UMModal from "@/components/ui/UMModal";
import ActionBar from "@/components/ui/ActionBar/ActionBar";
import EMTable from "@/components/ui/EMTable/EMTable";
//import EMBreadCrumb from "@/components/ui/EMBreadCrumb/EMBreadCumb";
import EMModal from "@/components/ui/EMModel/EMModel";
//import { getUserInfo, isLoggedIn } from "@/services/auth.service";
//import { USER_ROLE } from "@/constants/role";
import { redirect, useRouter } from "next/navigation";
import { useDeleteDonationMutation, useDonationsQuery } from "@/redux/api/donationApi";
import { useDebounced } from "@/components/view/Debounced/Debounced";
import { IDonation } from "@/types";

const DonationPage = () => {

  const query: Record<string, any> = {};
  const [deleteDonation] = useDeleteDonationMutation();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [donationId, setDonationId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useDonationsQuery({ ...query },{refetchOnMountOrArgChange:true,pollingInterval:1000});
 console.log(data)

  const donations:IDonation[] | undefined = data?.data;
  const donation=donations?.map((donation:any)=>donation?._id)
  const meta = data?.meta;

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      sorter: true,
    },
    {
      title: "Title",
      dataIndex: "title",
      // render: function (data: Record<string, string>) {
      //   const fullName = `${data?.title}`;
      //   return <>{fullName}</>;
      // },
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
     
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    //  {
    //   title: "Updated At",
    //   dataIndex: "updatedAt",
    // },
    // {
    //   title: "Created at",
    //   dataIndex: "createdAt",
    //   render: function (data: any) {
    //     return data && dayjs(data).format("MMM D, YYYY hh:mm A");
    //   },
    //   sorter: true,
    // },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    // {
    //   title: "Contact no.",
    //   dataIndex: "contactNo",
    // },
    {
      title: "Action",
      dataIndex: "_id",
      render: function (data: any) {
        // console.log(data);
        return (
          <>
            <Link href={`/admins/donationlist/details/${data}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admins/donationlist/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setDonationId(data);
              }}
              danger
              style={{ marginLeft: "3px" }}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const deleteDonationHandler = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteDonation(id);
      if (res) {
        message.success(" Successfully Deleted!");

        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div>
      {/* <EMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      /> */}
      <ActionBar title="Donation List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/admins/donationlist/create">
            <Button type="primary">Create Donation</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <EMTable
        loading={isLoading}
        columns={columns}
        dataSource={donations}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

      <EMModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteDonationHandler(donationId)}
      >
        <p className="my-5">Do you want to remove this donation?</p>
      </EMModal>
    </div>
  );
};

export default DonationPage;