import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const actionCodeSettings = { url: "http://localhost:3000/login" };

    const onsubmit = async (data) => {
        const success = await sendPasswordResetEmail(
            data.email,
            actionCodeSettings
        );
        if (success) {
            Swal.fire({
                icon: "success",
                title: 'Password Reset Email Sent Successfully !',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Home',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/");
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }

    let passwordResetErrorMessage;

    if (error) {
        passwordResetErrorMessage = <p className='text-red-500 text-sm'>{error.message}</p>
    }

    if (sending) {
        return <div className="lg:my-20 flex"><button className="btn btn-primary loading mx-auto bg-gradient-to-r from-secondary bg-gradient-to-primary">Processing</button></div>
    }



    return (
        <div className=" px-4 lg:px-12 flex justify-center items-center h-screen">
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent text-2xl">Recover Password</h2>
                    {/* Login Form Starts */}
                    <form onSubmit={handleSubmit(onsubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="example@example.com"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        messages: 'Provide Valid Email Address'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        {/* dynamic password reset error message */}
                        {passwordResetErrorMessage}
                        <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Send Password Reset Email" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;