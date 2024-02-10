"use client";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import { useCreateUserDataMutation } from "@/redux/api/usersApi";
import { userSchema } from "@/schemas/user";
import { yupResolver } from "@hookform/resolvers/yup";
//import Form from "@/components/Forms/Form";
//import FormDatePicker from "@/components/Forms/FormDatePicker";
//import FormInput from "@/components/Forms/FormInput";
//import FormSelectField from "@/components/Forms/FormSelectField";
//import FormTextArea from "@/components/Forms/FormTextArea";
//import EMBreadCrumb from "@/components/ui/EMBreadCrumb/EMBreadCumb";
//import { USER_ROLE } from "@/constants/role";
//import UploadImage from "@/components/ui/UploadImage.tsx/UploadImage";
//import { selectBloodGroupOptions, selectorGenderOptions } from "@/constants/selectConstantOptions";
//import { useAddCustomerDataMutation } from "@/redux/api/customerApi";

//import { customerSchema } from "@/schemas/customer";
//import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col,  Row, message } from "antd";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const RegistrationForm = () => {
  const [createUserData] = useCreateUserDataMutation();
  //@ts-ignore

  const onSubmit = async (values: any) => {
    console.log(values)
    const obj = {...values };
    
     message.loading("Creating...");
    try {
        await createUserData(obj);
        console.log(await createUserData(obj))
      console.log(values)
      message.success("Customer created successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      
      <div style={{display:"flex",justifyContent:"center",margin:"20px"}}>
<h1>Registration Here</h1>
      </div>
      

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)} >
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
              User Information
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
                  type="email"
                  name="email"
                  size="large"
                  label="Email address"
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
              </Col>
             
            </Row>
          </div>

          {/* basic info */}
        
          <Button htmlType="submit" type="primary">
            Registration
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;