'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from "axios";

export default function Contact() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div><h2 className="">Message failed to send.</h2> <p>Please try again or <a href='mailto:danielmolloy_6@icloud.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div><h2 className="">Message recieved!</h2><p>I will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div><h2 className="">Message sending...</h2></div>)

  return (
    <section id="contact" className=" pt-12 flex flex-col items-center justify-between p-2 py-8 text-sm text-dark w-screen  mx-8 min-h-[80vh] bg-light">
      <div className='text-center'>

      <h1 className='self-center font-bold text-6xl  font-sans tracking-[-5px]'>CONTACT</h1>
      <p className='px-4 my-4 text-lg font-medium tracking-tighter text-md '>{`We're always interested to hear about new projects, please feel free to get in touch.`}</p>
      </div>
            <div className=" w-full md:w-3/4">
    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('name required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('email required'),
      message: Yup.string()
        .max(500, 'Must be 200 characters or less')
        .required('message required')
    })}
    onSubmit={async (values, actions ) => {
      setSendStatus("sending")
      await new Promise(resolve => setTimeout(resolve, 1000))
      axios.post("/api", values)
      .then((res) => {
        console.log('Response received')
        if (res.status === 201) {
          setSendStatus("success")
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          actions.setSubmitting(false)
          setSendStatus("err")
        }
        }).catch(e => {
          console.log(e)
          actions.setSubmitting(false)
          setSendStatus("err")
        })
      }}> 
      {(props) => (
      <Form data-testid="contact-form" className="  flex flex-col  self-center w-full  ">

          <div className="flex flex-col m-2">
          <label htmlFor='name-input' className="form-label  text-md font-medium">Name</label>
          <Field 
            id="name-input" 
            className=" text-dark border rounded-xl    w-full p-1 "
            type="text"
            name="name"/>
            <div className="h-6">
          <ErrorMessage name="name">
            { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2">
          <label htmlFor='email' className="form-label   text-md font-medium">Email</label>
          <Field
            id="email" 
            className="text-dark border border-dark rounded-xl w-full p-1 " 
            type="email"
            name="email"/>
            <div className="h-6">
          <ErrorMessage name="email" >
          { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2 mb-0">
          <label htmlFor='msg-text' className="form-label   text-md font-medium">Message</label>
          <Field 
          multiline="6"
          maxLength="500"
          rows="4"
          component="textarea"
            id="msg-text" 
            className=" text-dark border border-dark  rounded-xl w-full p-1 "
            type="textarea"
            name="message"/>
            <div className="h-6">
            {props.values.message.length > 0 && <p className='self-center text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}

          <ErrorMessage name="message">
            { msg => <div className="text-sm text-red-500">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
        <button disabled={props.isSubmitting || (sendStatus === "sending")} id="submit-button" type='submit' className=" disabled:opacity-30 hover:underline    bg-contrast text-light  m-2 p-1 px-2 rounded-xl self-end cursor-pointer text-md font-semibold">Submit</button>
        <div>
        {sendStatus === "sending" 
        ? sendingMsg
        : sendStatus === "err" 
        ? sendFail
        : sendStatus === "success" 
        ? sendSuccess
        : null}
      </div>
      </Form> )}
    </Formik>
                </div>

    </section>
  )
}