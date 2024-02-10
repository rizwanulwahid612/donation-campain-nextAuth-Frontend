"use client";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import { useCreateAdminDataMutation } from "@/redux/api/usersApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
// import Form from "@/components/Forms/Form";
// import FormDatePicker from "@/components/Forms/FormDatePicker";
// import FormInput from "@/components/Forms/FormInput";
// import FormSelectField from "@/components/Forms/FormSelectField";
// import FormTextArea from "@/components/Forms/FormTextArea";
// import EMBreadCrumb from "@/components/ui/EMBreadCrumb/EMBreadCumb";
// import { USER_ROLE } from "@/constants/role";

// import { selectBloodGroupOptions, selectorGenderOptions } from "@/constants/selectConstantOptions";

// import { useAddAdminDataMutation } from "@/redux/api/adminApi";

// import { useDepartmentsQuery } from "@/redux/api/departmentApi";
// import { useCreateAdminDataMutation } from "@/redux/api/usersApi";
// import { adminSchema } from "@/schemas/admin";
// import { getUserInfo, isLoggedIn } from "@/services/auth.service";
// import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { redirect } from "next/navigation";
import { useEffect } from "react";



const CreateAdminPage = () => {
 
  const [createAdminData] = useCreateAdminDataMutation();
  

  const onSubmit = async (values: any) => {
    console.log(values)
    const obj = { ...values };
   
     message.loading("Creating...");
    try {
     
        await createAdminData(obj);
      console.log(obj)
      message.success("Admin created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {/* <EMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admins",
          },
        ]}
      /> */}
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name"
                  size="large"
                  label="Name"
                />
              </Col>
             
         
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="image"
                  size="large"
                  label="profileImage"
                />
              </Col>
           
              
            
             
            </Row>
          </div>

          {/* basic info */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;