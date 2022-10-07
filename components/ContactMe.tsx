import React from 'react'
import {PhoneIcon, MapIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Props } from 'next/script'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

const ContactMe = (Inputs: Props) => {
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:unlimitedwebworks7@gmail.com
                                ?subject=${formData.subject}&body-Hi, my name is ${formData.name}.
                                ${formData.message} (${formData.email})`
    }
  return (
    <div className='relative z-0 flex flex-col items-center h-screen px-10 mx-auto overflow-hidden text-center max-w-7xl md:text-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white font-extrabold text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                We have the necessary skills for your next projects
                {" "}<span className='underline decoration-[#F1EC40]/50'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center justify-center space-x-5'>
                <PhoneIcon className='text-decoration[#F1EC40] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+91456789389</p>
                </div>

                <div className='flex items-center justify-center space-x-5'>
                <EnvelopeIcon className='text-decoration[#F1EC40] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>unlimitedwebworks7@gmail.com</p>
                </div>

                <div className='flex items-center justify-center space-x-5'>
                <MapIcon className='text-decoration[#F1EC40] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>123 Bridgerton, Atlanta</p>
                </div>
            </div>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mx-auto space-y-2 w-fit'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F1EC40] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe