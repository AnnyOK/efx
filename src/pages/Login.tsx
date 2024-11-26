import React, { useState } from 'react';
import loginimg from '../assets/images/login.svg';
import coronation from '../assets/images/logo-black.png'
import {
	Formik,
	Field,
	ErrorMessage,
	FormikValues,
	FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import { Modal } from '../components/modal';
import { IoMdLogIn } from '../utils/reacticon';
import { login } from '../services/login';
interface LoginFormValues {
	username: string;
	password: string;
}
const Login = () => {
    const initialValue:LoginFormValues ={username:'',password:''}
	const validationSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
		password: Yup.string().required('Password is required'),
	});
	
const [error,setError] = useState('')
const [modalOpen,toggleClose] = useState(false)
	const handleLogin = (
		values: FormikValues,
		{ setSubmitting }: FormikHelpers<LoginFormValues>
	) => {
		try {
			login(values);
			setSubmitting(false);
		} catch (err:any) {
            setError(err.message);
            toggleClose(true)
			//SHOW ERRE
		}
	};
	return (
		<Formik
			initialValues={initialValue}
			validationSchema={validationSchema}
			onSubmit={handleLogin}
		>
			{({
				values,
				handleSubmit,
				isSubmitting,
			}) => (
				<form
					onSubmit={handleSubmit}
					className='w-[100vw] flex '
				>
                    <Modal isOpen={modalOpen} onClose={()=>toggleClose(false) } >
                        <h2>{error}</h2>
                    </Modal>
					<div className='flex flex-col flex-1 md:flex-row md:gap-[10px] 2xl:gap-[100px]  w-[100vw]  mb-[100px] p-0 '>
						
						<div className='text-left flex-1 min-w-[320px] px-[50px] py-10 h-fit flex flex-col gap-4  items-stretch justify-between bg-white rounded-md m-10 relative left-[0] animate-animatePosition'>
							<h1
								className='font-family-[Lato-Bold] '
								style={{
									fontFamily: 'Lato',
								}}
							>
								CMB eFX Naira Conversion Portal
							</h1>
							<h2 className='font-semibold'>
								Login
							</h2>
							<span className='t text-[13px]'>
                            Kindly sign in with your Coronation Merchant Bank credential to continue.
							</span>
							<label
								htmlFor='username'
								className='flex flex-col text-left w-full'
							>
								Username
								<Field
									type='text'
									placeholder='Username'
									name='username'
									className='w-full px-4 py-4 rounded-lg shadow-md text-[15px] text-black bg-[#fbfbfb] focus:border-b-2  focus:animate-animateBorderColor focus:border-b-orange-500 outline-none focus:animate-fade-in duration-800 '
								/>
								<ErrorMessage
									name='username'
									component='div'
									className='error text-red-500'
								/>
							</label>
							<label
								htmlFor='password'
								className='flex flex-col text-left  gap-4 '
							>
								Password
								<Field
									type='password'
									placeholder='Password'
									name='password'
									className='w-full px-4 py-4 rounded-lg shadow-md text-[15px] text-black bg-[#fbfbfb] focus:border-b-2  focus:animate-animateBorderColor focus:border-b-orange-500 outline-none focus:animate-fade-in duration-800 '
								/>
								<ErrorMessage
									name='password'
									component='div'
									className='text-red-500'
								/>
							</label>
							<button
								disabled={values.password==''|| values.username==''||isSubmitting}
                                type='submit'
								className='bg-gradient-to-r from-orange-500 to-red-500  disabled:bg-gray-300 text-white font-bold text-[15px] flex justify-center gap-4 items-center w-full rounded-md uppercase'
							>
								<IoMdLogIn className='text-[2rem]' />
								Login
							</button>
						</div>
                        <img
							src={loginimg}
							className=' w-full md:w-[50%] 2xl:block xl:max-w-[50%] m-0 hidden lg:block'
							alt=''
							width=''
							height={''}
						/>
                       <img src={coronation} alt="" className='absolute right-[30%] top-10  hidden lg:block' />
					</div>
				</form>
			)}
		</Formik>
	);
};

export default Login;
