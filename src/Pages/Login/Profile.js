import React from 'react';
import { useAuthState, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';


const Profile = () => {
    const [updateProfile, updatingProfile, updateProfileError] = useUpdateProfile(auth);
    const [updateEmail, updatingEmail, updateEmailError] = useUpdateEmail(auth);
    const [user, loadingAuthState, authStateError] = useAuthState(auth);

    let errorMessage;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const updateNewEmail = (data) => {
        updateEmail(data.email);
    }

    if (updateProfileError || updateEmailError || authStateError) {
        errorMessage = <p className="py-1 text-sm text-red-500">{updateProfileError?.message || updateEmailError?.message || authStateError?.message}</p>
    }

    if (updatingProfile || updatingEmail) {
        return <LoadingSpinner text="Processing..." />
    }


    return (
        <div className="px-4 lg:px-12 flex justify-center items-center h-screen">
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent text-2xl">Update Email</h2>
                    {/* Login Form Starts */}
                    <form onSubmit={handleSubmit(updateNewEmail)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Current Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                readOnly
                                value={user?.email}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">New Email</span>
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

                        {/* dynamic google or email sign in error message */}
                        {errorMessage}
                        <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Update Email" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;