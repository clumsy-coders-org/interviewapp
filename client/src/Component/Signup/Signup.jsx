

import React from 'react'
import img from "../../Asset/image2sig.png"
import google from "../../Asset/googleicon.png"
import github from "../../Asset/gitlogo.png"
import { useFormik } from 'formik';
import { validationSchema } from "./validation"
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'



function Signup() {

    const [isDisabled, setIsDisabled] = useState(false);
    // const [spinner, setspinner] = useState(true);


    const initalValues = {

        name: "",
        email: "",
        password: ""

    }






    const { errors, values, handleChange, handleSubmit, handleBlur, touched } = useFormik({

        initialValues: initalValues,
        validationSchema: validationSchema,

        onSubmit: (value) => {




            console.log(value)

            setIsDisabled(true)

        }


    });







    return (
        <div>

            {/* main div */}
            <div className=' h-screen w-full bg-[#141E46] flex justify-center items-center  '>

                {/* inner main div */}
                <div className=' h-[500px] w-[400px] sm:w-[900px] bg-white flex rounded-xl' >

                    {/* image main div */}
                    <div className=' hidden sm:block  h-full w-[50%] p-[80px]' >

                        <img src={img} alt="" className=' w-[300px] h-[300px]' />

                    </div>

                    {/* form main div */}

                    <div className='h-full w-[100%] sm:w-[50%] bg-gray-300  rounded-xl pt-10 ' >

                        <h1 className=' text-center text-[20px]  ' > Create your Account </h1>

                        <div className='flex justify-center items-center pt-5' >

                            <form action=""  >

                                <label htmlFor=""> Full Name </label> <br />
                                <input type="text" placeholder='test name k' className='w-[300px] h-[40px] rounded-md pl-5 border border-black  '

                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}


                                /> <br />



                                {

                                    errors.name && touched.name
                                        ?

                                        <>  <span className='text-red-600'>{errors.name}  </span> <br />  </>
                                        : <br />



                                }




                                <label htmlFor=""> Email Id </label> <br />
                                <input type="email" placeholder='test@gmail.com' className='w-[300px] h-[40px] rounded-md pl-5 border border-black  '
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                /> <br />

                                {

                                    errors.email && touched.email
                                        ?

                                        <>  <span className='text-red-600'>{errors.email}  </span> <br />  </>
                                        : <br />



                                }

                                <label htmlFor=""> Password </label> <br />
                                <input type="password" placeholder='******' className='w-[300px] h-[40px] rounded-md pl-5 border border-black '

                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                /> <br />

                                {

                                    errors.password && touched.password
                                        ?

                                        <>  <span className='text-red-600'>{errors.password}  </span> <br />  </>
                                        : <br />



                                }



                            </form>


                        </div>


                        <h1 className='text-center  text-[15px]  ' > or </h1>

                        {/* social icons */}

                        <div className='w-full flex justify-center gap-5 ' >

                            <img src={google} className='w-[30px] h-[30px] cursor-pointer' />

                            <img src={github} className='w-[30px] h-[30px] cursor-pointer' />

                        </div>

                        <div className='w-full flex justify-center mt-5' >

                            <button disabled={isDisabled} style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }} onClick={handleSubmit} className='  w-[150px] h-[35px] bg-blue-700 rounded-md text-white ' >


                                {
                                    isDisabled ?

                                        <div className='ml-[55px]' >

                                            <ThreeDots
                                                visible={true}
                                                height="40"
                                                width="40"
                                                color="#141E46"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />

                                        </div>



                                        :
                                        <span> Sign Up </span>

                                }




                            </button>


                        </div>

                        <h1 className='text-center' > already have an account ? <span className='text-blue-700 cursor-pointer font-medium' > sign in </span>  </h1>





                    </div>



                </div>


            </div>


        </div>
    )
}

export default Signup
