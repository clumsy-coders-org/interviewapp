


import * as yup from "yup";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   

export const validationSchema=yup.object({


      name:yup.string().min(3,"* enter more 3 chr").required("* this fild is required"),
      email:yup.string().matches(emailRegex, "* Enter a valid email address").required("* This field is required"),
      password:yup.string().min(4, " *enter minimum 4 char  ").required(" *this filed is required")

})