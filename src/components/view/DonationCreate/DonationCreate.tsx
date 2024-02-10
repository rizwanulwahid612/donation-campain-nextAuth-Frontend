"use client"
import { Button, Form, Input, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
type FieldType = {
  title: string;
  category: string;
  image: string;
  price?: string;
  description: string;
};
const DonationCreate = () => {
 const router = useRouter();
  const onFinish = async (values: FormData) => {
    console.log(values)
    try {
      const response = await fetch('http://localhost:5000/api/v1/donations/create-donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        message.error("Donation was not created")
      }else{
        router.refresh();
        router.push("/admins/donationlist");
      
      message.success("Donation created SuccessFully")
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
 
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1 style={{marginBottom:"30px"}}>Create Donation Form</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input Title!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Image"
        name="image"
        rules={[{ required: true, message: "Please input Image url!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input Price!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please input Category!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input Description!" }]}
      >
        <Input type="text" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    
    </div>
  )
}

export default DonationCreate