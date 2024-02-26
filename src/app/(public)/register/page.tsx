import RegisterForm from '@/components/view/RegisterForm/RegisterForm'
import React from 'react'

const Register =({searchParams}:any) => {
   const { email,image,name,password } = searchParams;
  return (
    <div className="h-[70vh] flex justify-center items-center">
        <RegisterForm email={email} image={image} name={name} password={password}/>
    </div>
  )
}

export default Register