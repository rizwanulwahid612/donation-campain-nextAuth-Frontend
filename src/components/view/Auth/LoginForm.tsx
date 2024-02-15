"use client";
import { Button, Col, Form, Input, Row } from "antd";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logImage from "../../../assets/Computer login-bro.svg";
import conte from '../../../styles/singleproduct.module.css'
type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log(values)
    const result = await signIn("donation-backend", {
      email: values.email,
      password: values.password,
      redirect: false,
      // callbackUrl: "/",
    });
     console.log(result, "result");
    if (result?.ok && !result.error) {
      router.refresh();
      router.push("/");
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
        minHeight: "10vh",
      }}
    >
      {/* <Col sm={12} md={16} lg={10}>
         <Image src={logImage} alt="" width={200} height={150}/>
      </Col> */}
      <Col>
        <h1
          style={{
            margin: "0px 0px",
            display:"flex",
            textAlign:"center",
          }}
        >
          Login
        </h1>
     <div style={{display:"block",alignItems:"center",textAlign:"center"}}>
     
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
    <p>If you did not Registered!,Please...</p><Link href="/register">Register </Link>
    </div>
    </div>
    </Col>
    </Row>
  );
};

export default LoginForm;