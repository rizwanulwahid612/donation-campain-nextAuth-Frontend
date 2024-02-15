
"use client"
import { useState, useEffect } from "react";
import { Button, Card, Col, Rate, Row, Spin } from "antd"; // Import Spin from antd for loading spinner
import Meta from "antd/es/card/Meta";
import Image from "next/image";


const UserDashboardPage = ({ posts, session }: { posts: any, session: any }) => {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true); // Introduce loading state

  useEffect(() => {
    if (posts) {
      setLoading(false); // Set loading to false once posts are available
    }
  }, [posts]);

  const post2 = posts?.data?.filter((p: any) => p?.userInfo?.userEmail === session?.email);
  const sum = post2.reduce((accumulator: number, currentValue: any) => accumulator + parseFloat(currentValue?.price || 0), 0);

  const catData = post2 || [];

  const colors = getRandomLightColors(catData?.length);

  return (
    <>
      <h2>Total Donation Amount: <span style={{color:"red"}}>{sum}</span>  Tk</h2>
      {loading ? (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <Spin size="large" /> {/* Show loading spinner */}
        </div>
      ) : (
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
                    title={categorydata?.category}
                    hoverable
                    cover={<Image alt="example" src={categorydata?.image} width={420} height={300} />}
                    style={{ backgroundColor: colors[i] }}
                  >
                    <Meta title={categorydata?.name} />
                    <p>Title: {categorydata?.title.length > 20 ? categorydata.title.slice(0, 20) + '...' : categorydata.title}</p>
                    <p>Price: {categorydata?.price}</p>
                    <p>Description: {categorydata?.description.length > 80 ? categorydata.description.slice(0, 185) + '...' : categorydata.description}</p>
                    <p>Donation Time:{categorydata?.createdAt}</p>
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
      )}
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












// "use client"
// import { useState } from "react";
// import { Button, Card, Col, Rate, Row } from "antd";
// import Meta from "antd/es/card/Meta";
// import Image from "next/image";
// import Link from "next/link";

// const UserDashboardPage = ({ posts, session }: { posts: any, session: any }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [searchTerm, setSearchTerm] = useState<string>('');

//   const post2 = posts?.data?.filter((p: any) => p?.userInfo?.userEmail === session?.email);
//   const sum = post2.reduce((accumulator: number, currentValue: any) => accumulator + parseFloat(currentValue?.price || 0), 0);

//   const catData = post2 || [];

//   const colors = getRandomLightColors(catData?.length);

//   return (
//     <>

//       <h2>Total Donation Amount: <span style={{color:"red"}}>{sum}</span>  Tk</h2>
//       <div style={{ margin: "20px" }}>
//         <Row gutter={6} style={{ margin: 0 }}>
//           {catData
//             ?.filter((categorydata: any) => {
//               if (searchTerm === "") {
//                 return categorydata;
//               } else if (categorydata.category.toLowerCase().includes(searchTerm.toLowerCase())) {
//                 return categorydata;
//               }
//             })
//             .slice(0, showAll ? catData.length : 4)
//             .map((categorydata: any, i: any) => (
//               <Col xs={24} sm={24} md={12} lg={6} span={8} key={categorydata?._id} style={{ marginBottom: "20px" }}>
//                 <Card
//                   title={categorydata?.category}
//                   hoverable
//                   cover={<Image alt="example" src={categorydata?.image} width={420} height={300} />}
//                   style={{ backgroundColor: colors[i] }}
//                 >
//                   <Meta title={categorydata?.name} />
//                     <p>Title: {categorydata?.title.length > 20 ? categorydata.title.slice(0, 20) + '...' : categorydata.title}</p>
//                 <p>Price: {categorydata?.price}</p>
  
//                 <p>Description: {categorydata?.description.length > 80 ? categorydata.description.slice(0, 185) + '...' : categorydata.description}</p>
//                  <p>Donation Time:{categorydata?.createdAt}</p>
//                 </Card>
//               </Col>
//             ))}
//         </Row>
//         {catData?.length > 4 && !showAll && (
//           <div style={{ display: "flex", justifyContent: "center", marginTop: '20px' }}>
//             <Button type="primary" onClick={() => setShowAll(true)}>See More</Button>
//           </div>
//         )}
//       </div>
//     </>
//   );

//   function getRandomLightColors(count: any) {
//     const colors = [];
//     for (let i = 0; i < count; i++) {
//       const red = Math.floor(Math.random() * 50) + 200;
//       const green = Math.floor(Math.random() * 50) + 200;
//       const blue = Math.floor(Math.random() * 50) + 200;
//       const randomColor = `rgb(${red},${green},${blue})`;
//       colors.push(randomColor);
//     }
//     return colors;
//   }
// };

// export default UserDashboardPage;
