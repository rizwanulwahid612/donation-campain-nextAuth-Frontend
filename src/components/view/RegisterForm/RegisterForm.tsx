
"use client"
import { Button, Col, Form, Input, Row, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import signinimg from "../../../assets/Sign up-bro.svg"
import conte from '../../../styles/singleproduct.module.css'
// type FieldType = {
//   name?:string;
//   image?:string;
//   email?: string;
//   password?: string;
// };
const RegisterForm = ({email,image,name,password}:{email:any,image:any,name:any,password:any}) => {
 const router = useRouter();
   const initialValue: {
    email:string,
    image:string,
    name:string,
    password:string,
  } = {
    email,
    image,
    name,
    password,
  };
  const onFinish = async (values: FormData) => {
    console.log(values)
    try {
      //http://localhost:5000/api/v1
      //const response = await fetch(`http://localhost:5000/api/v1/users/create-user`, {
      const response = await fetch(`https://donation-server-opal.vercel.app/api/v1/users/create-user`, {
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
      <h1>Register</h1>
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
      <Form.Item
        label="Name"
        name="name"
        initialValue={initialValue.name}
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Image"
        name="image"
        initialValue={initialValue.image}
        rules={[{ required: true, message: "Please input your Image url!" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        initialValue={initialValue.email}
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        initialValue={initialValue.password}
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
    
    </div>
    </Col>
    </Row>
  )
}

export default RegisterForm