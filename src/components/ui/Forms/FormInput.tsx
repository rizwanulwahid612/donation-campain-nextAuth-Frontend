"use client"

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { useFormContext,Controller } from "react-hook-form";

interface IInput{
    name:string;
    type?:string;
    size?:"large"|"small";
    value?:string|string[]|undefined;
    id?:string;
    placeholder?:string;
    validation?:object;
    label?:string;
    required?:boolean,
    disabled?:boolean,
    onChange?:any
}

const FormInput = ({name,type,size,value,id,placeholder,validation,label,required,disabled}:IInput) => {
 const {control,formState:{errors}}=useFormContext()

 const errorMessage=getErrorMessageByPropertyName(errors,name)

  return (
   <>
   {required?<span style={{color:"red"}}>*</span>:null}{label? label:null}
    <Controller
        control={control}
        name={name}
        //render={({ field: { onChange, onBlur, value, ref } }) => (
        render={({field}) => (
          type==="password"?(
        <Input.Password 
          type={type} 
          size={size} 
          placeholder={placeholder}
          {...field}
          value={value?value:field.value} />
          ):(
        <Input
          type={type} 
          size={size} 
          placeholder={placeholder}
          {...field}
          value={value?value:field.value} />    
          )
        )}
      />
      <small style={{color:"red"}}>{errorMessage}</small>
   </>
  )
}

export default FormInput