"use client"
import { useState } from "react";
import { Button, Card, Col, Rate, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";

const UserDashboardPage = ({ posts, session }: { posts: any, session: any }) => {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const post2 = posts?.data?.filter((p: any) => p?.userInfo?.userEmail === session?.email);
  const sum = post2.reduce((accumulator: number, currentValue: any) => accumulator + parseFloat(currentValue?.price || 0), 0);

  const catData = post2 || [];

  const colors = getRandomLightColors(catData?.length);

  return (
    <>
      Total Donation Amount: {sum} Tk
      <div style={{ margin: "20px" }}>
        <Row gutter={6} style={{ margin: 0 }}>
          {catData
            ?.filter((categorydata: any) => {
              if (searchTerm === "") {
                return categorydata;
              } else if (categorydata.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                return categorydata;
              }
            })
            .slice(0, showAll ? catData.length : 4)
            .map((categorydata: any, i: any) => (
              <Col xs={24} sm={24} md={12} lg={6} span={8} key={categorydata?._id} style={{ marginBottom: "20px" }}>
                <Card
                  title={''}
                  hoverable
                  cover={<Image alt="example" src={categorydata?.image} width={420} height={300} />}
                  style={{ backgroundColor: colors[i] }}
                >
                  <Meta title={categorydata?.name} />
                  <p>Name: {categorydata?.name}</p>
                  <p>Price: {categorydata?.price}</p>
                  <p>Location: {categorydata?.location}</p>
                  <p>Details: {categorydata?.details}</p>
                  <p>Start Time: {categorydata?.startTime}</p>
                  <p>End Time: {categorydata?.endTime}</p>
                  <p>Appointment days In Week: {categorydata?.apointmentdaysInWeek}</p>
                  <p>Categories: {categorydata?.categoryIds?.map((c: any, i: any) => (<div key={i}><p>{c?.name}</p></div>))}</p>
                  <Rate allowHalf defaultValue={4.5} />
                  <Link href={`/donationshome/${categorydata?._id}`}>
                    <Button type="primary" danger>viewDetails</Button>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
        {catData?.length > 4 && !showAll && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: '20px' }}>
            <Button type="primary" onClick={() => setShowAll(true)}>See More</Button>
          </div>
        )}
      </div>
    </>
  );

  function getRandomLightColors(count: any) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const red = Math.floor(Math.random() * 50) + 200;
      const green = Math.floor(Math.random() * 50) + 200;
      const blue = Math.floor(Math.random() * 50) + 200;
      const randomColor = `rgb(${red},${green},${blue})`;
      colors.push(randomColor);
    }
    return colors;
  }
};

export default UserDashboardPage;
