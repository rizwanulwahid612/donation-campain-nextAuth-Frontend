"use client"
import { Button, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useRouter } from 'next/navigation';
import React from 'react'
type FieldType = {
  name: string;
  email: string;
  description: string;
};
const DonationCreate = () => {
 const router = useRouter();
  const onFinish = async (values: FormData) => {
    console.log(values)
    try {
       const response = await fetch(`https://donation-server-opal.vercel.app/api/v1/users/create-contact`, {
      //const response = await fetch(`https://donation-server-opal.vercel.app/api/v1/donations/create-donate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        message.error("message was not send")
      }else{
        router.refresh();
      message.success("SuccessFully send Your message")
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
    <>
    <h1 style={{textAlign:"center",margin:"40px"}}>Contact Form</h1>
    <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
      
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
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item<FieldType>
       
        label="Description"
        name="description"
        rules={[{required: true,  message: "Please input Description!" }]}
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
    </>
  )
  
}

export default DonationCreate