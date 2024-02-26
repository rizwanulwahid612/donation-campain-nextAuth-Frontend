"use client"
import { Button, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useRouter } from 'next/navigation';


 
type FieldType = {
    title?: string;
    category?: string;
    image?: string;
    price?: string | undefined;
    description?: string;
};


const UpdatePostForm = ({ id,singleData }:{id:any,singleData:any}) => {
  const initialValues = {
    title: singleData?.title,
    image: singleData?.image,
    price: singleData?.price,
    category: singleData?.category,
    description: singleData?.description,
  };
  const router = useRouter();
 
console.log(singleData)
  
   const onFinish = async (values: FormData) => {
    console.log(values)
    try{
      //http://localhost:5000/api/v1
      const response = await fetch(`https://donation-server-opal.vercel.app/api/v1/donations/${id}`, {
     // const response = await fetch(`http://localhost:5000/api/v1/donations/${id}`, {  
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

     if (!response.ok) {
        message.error("Donation was not Update")
      }else{
        router.refresh();
        router.push("/admins/donationlist");
      
      message.success("Donation updated SuccessFully")
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
   
  };
//  const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };
  return (
  <div>
      <h1 style={{marginBottom:"30px"}}>UPdate Donation Form</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Title"
        name="title"
        initialValue={initialValues?.title}
        rules={[{ message: "Please input Title!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Image"
        name="image"
         initialValue={initialValues?.image}
        rules={[{ message: "Please input Image url!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Price"
        name="price"
         initialValue={initialValues?.price}
        rules={[{ message: "Please input Price!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Category"
        name="category"
         initialValue={initialValues?.category}
        rules={[{ message: "Please input Category!" }]}
      >
        <Input type="text" />
      </Form.Item>

      

      <Form.Item<FieldType>
       
        label="Description"
         initialValue={initialValues?.description}
        name="description"
        rules={[{  message: "Please input Description!" }]}
      >
         <TextArea rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    
    </div>
  );
};

export default UpdatePostForm;
