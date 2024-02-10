"use client"
import { Button, Form, Input, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
type FieldType = {
  name?:string;
  image?:string;
  email?: string;
  password?: string;
};
const RegisterForm = () => {
 const router = useRouter();
  const onFinish = async (values: FormData) => {
    console.log(values)
    try {
      const response = await fetch('http://localhost:5000/api/v1/users/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }else{
        router.refresh();
      router.push("/login");
      message.success("User Registration SuccessFully")
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
    <div style={{display:"block"}}>
      <h1 style={{marginBottom:"30px"}}>Registration Form</h1>
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
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Image"
        name="image"
        rules={[{ required: true, message: "Please input your Image url!" }]}
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
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <div style={{display:"flex"}}>
    <p>If you are already Registered!,Please...</p><Link href="/login">Login </Link>
    </div>
    </div>
  )
}

export default RegisterForm