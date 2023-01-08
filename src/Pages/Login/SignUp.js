import React, { useEffect } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user] = useAuthState(auth);

    const [
        signInWithGoogle,
        //gUser,
        gLoading,
        gError
    ] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        //signUpUser,
        signUpLoading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sendingVerificationEmail, verificationEmailSendingerror] = useSendEmailVerification(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();


    let signInError;

    if (gError || signUpError || updateError || verificationEmailSendingerror) {
        signInError = <p className='text-red-500 text-sm'>{gError?.message || signUpError?.message || updateError?.message || verificationEmailSendingerror?.message} </p>;
    }

    if (gLoading || signUpLoading || updating || sendingVerificationEmail) {
        return <div className="lg:my-20 flex"><button className="btn btn-primary loading mx-auto bg-gradient-to-r from-secondary bg-gradient-to-primary">Processing</button></div>
    }

    const onSubmit = async (data) => {
        const success = await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        if (success) {
            await sendEmailVerification();
        }
        navigate("/");
    };



    return (
        <div className=" px-4 lg:px-12 flex justify-center items-center h-screen">
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent text-2xl">Sign Up</h2>
                    {/* Login Form Starts */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"

                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },
                                }
                                )}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must Provide 6 Characters or Longer'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                        </div>
                        {/* dynamic google or email sign in error message */}
                        {signInError}
                        <input
                            className='btn btn-accent w-full max-w-xs text-white'
                            disabled={user}
                            type="submit"
                            value="Sign Up" />
                    </form>
                    {/* Login Form Ends */}
                    <p className='text-sm mt-2 text-center'>Already Have An Account? <Link className="text-secondary" to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        disabled={user}
                        className="btn btn-outline btn-accent"
                    >
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;