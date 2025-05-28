"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CoustomeFormField from "./CoustomeFormField";

export enum FormFieldType {
 INPUT='input',
 TEXTAREA='textarea',
 PHONE_INPUT='phone-input',
 DATE_PICKER='date-picker',
 SELECT='select',
 SKELETON = 'skeleton',
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const PatientsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CoustomeFormField
         control={form.control} 
         fieldType={FormFieldType.INPUT}
         name="username"
         lable='Full-name'
         placeholder='Enter your full name'
        //  iconSrc="/assets/icons/users.svg
        // iconAlt="user"
        
         
         />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default PatientsForm;
