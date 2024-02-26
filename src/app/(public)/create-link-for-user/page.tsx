
"use client"
import { Button, Col, Form, Input, Row, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import signinimg from "../../../assets/Sign up-bro.svg"
import conte from '../../../styles/singleproduct.module.css'
type FieldType = {
  name?:string;
  image?:string;
  email?: string;
  password?: string;
};
const CreateLinkRegisterForm = () => {
 const router = useRouter();
  const onFinish = async (values: FormData) => {
    console.log(values)
    try {
     
      const response = await fetch(`https://donation-server-opal.vercel.app/api/v1/users/create-link-for-user`, {
      //const response = await fetch(`https://donation-server-opal.vercel.app/api/v1/users/create-user`, {
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
       router.push("/");
      message.success("Please Check Mail & Go to User Registration Link ")
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
    <div style={{display:"flex",justifyContent:"center"}}>
       <Row
    className={conte.container}
      justify="space-between"
      align="middle"
      style={{
        marginTop:"70px",
        minHeight: "0vh",
      }}
    >
      <Col>
      
    <div style={{display:"block",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
      <h1 style={{marginBottom:"30px"}}>Verify Your Email before Registration & Check Your mail </h1>
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
    <div style={{display:"flex",marginBottom:"40px"}}>
    <p>If you are already Registered!,Please...</p><Link href="/login">Login </Link>
    </div>
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default CreateLinkRegisterForm