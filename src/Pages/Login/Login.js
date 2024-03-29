import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [user, authStateError] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (gUser || eUser) {
            navigate(from, { replace: true });
        }
    }, [gUser, eUser, navigate, from, location])


    if (gError || eError || authStateError) {
        signInError = <p className='text-red-500 text-sm'>{gError?.message || eError?.message || authStateError?.message}</p>;
    }

    if (gLoading || eLoading) {
        return <LoadingSpinner text="Processing..." />
    }

    const onSubmit = async (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="px-4 lg:px-12 flex justify-center items-center h-screen">
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent text-2xl">Login</h2>
                    {/* Login Form Starts */}
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <span className="label-text text-sm">
                                    <Link to="/forgotpassword">Forgot Password ?</Link>
                                </span>
                            </label>
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
                            type="submit"
                            disabled={user}
                            value="Login" />
                    </form>
                    {/* Login Form Ends */}
                    <p className='text-sm mt-2 text-center'>New To Doctors Portal? <Link className="text-secondary" to="/signup">Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent"
                        disabled={user}
                    >
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;