"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "./PatientsForm";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js';

interface CustomeProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  lable?: string;
  placeholder?: string;
  // iconSrc?: string,
  // iconAlt?: string,
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomeProps }) => {
  // const {fieldType,iconsrc,iconAlt,placeholder}= props;
  const { fieldType, placeholder } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border bg-color-dark-300">
          {/* {iconSrc && (
        <Image
        src={iconsrc}
        height={24}
        width={24}
        alt ={iconAlt || 'icon'}
        className='ml-2'
      )} */}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return(
        <FormControl>
          <PhoneInput
          defaultCountry="US"
          placeholder={placeholder}
          international
          withCountryCallingCode
          value={field.value as E164Number | undefined}
          onChange={field.onChange}
          // className="w-full"
          />
        </FormControl>
      )
    default:
      return null;
  }
};

const CoustomeFormField = (props: CustomeProps) => {
  const { control, fieldType, name, lable } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {/*  may be sometime we use this  form for many other input rather then normal input */}
          {fieldType !== FormFieldType.CHECKBOX && lable && (
            <FormLabel>{lable}</FormLabel>
          )}
          <RenderField field={field} props={props} />

          <FormMessage className="inset-shadow-sidebar-primary-foreground" />
        </FormItem>
      )}
    />
  );
};

export default CoustomeFormField;
