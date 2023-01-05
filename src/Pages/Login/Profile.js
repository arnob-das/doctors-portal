import React from 'react';
import { useAuthState, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';


const Profile = () => {
    const [updateProfile, updatingProfile, updateProfileError] = useUpdateProfile(auth);
    const [updateEmail, updatingEmail, updateEmailError] = useUpdateEmail(auth);
    const [user, loadingAuthState, authStateError] = useAuthState(auth);

    let errorMessage1, errorMessage2;

    const {
        register: register1,
        formState: { errors: errors1 },
        handleSubmit: handleSubmit1
    } = useForm();

    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2
    } = useForm();


    const updateNewEmail = async (data) => {
        await updateEmail(data.email);
    }

    const updateNewName = async (data) => {
        await updateProfile({ displayName: data.name });
    }

    if (updateEmailError || authStateError) {
        errorMessage1 = <p className="py-1 text-sm text-red-500">{updateProfileError?.message || updateEmailError?.message || authStateError?.message}</p>
    }
    if (updateProfileError || authStateError) {
        errorMessage2 = <p className="py-1 text-sm text-red-500">{updateProfileError?.message || updateEmailError?.message || authStateError?.message}</p>
    }

    if (updatingProfile || updatingEmail || loadingAuthState) {
        return <LoadingSpinner text="Processing..." />
    }



    return (
        <div className="px-4 lg:px-12 h-screen">
            {user?.displayName && <h2 className="text-center text-3xl pt-10 lg:pt-20">Hello, {user.displayName} !</h2>}
            <div className="flex justify-center items-center mt-10 mb-5">
                {/* update email */}
                <div className="card w-96  shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-accent text-2xl">Update Email</h2>
                        {/* Update Email Form Starts */}
                        <form onSubmit={handleSubmit1(updateNewEmail)}>
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

                                    {...register1("email", {
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
                                    {errors1.email?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors1.email.message}</span>
                                    }
                                    {errors1.email?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors1.email.message}</span>
                                    }
                                </label>
                            </div>

                            {/* dynamic google or email sign in error message */}
                            {errorMessage1}
                            <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Change Email" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5 mb-10">
                {/* update name */}
                <div className="card w-96  shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-accent text-2xl">Update Name</h2>
                        {/* Update Name Form Starts */}
                        <form onSubmit={handleSubmit2(updateNewName)}>
                            {user?.displayName &&
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Current Name</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full max-w-xs"
                                        readOnly
                                        value={user?.displayName}
                                    />
                                </div>
                            }
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">New Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="example@example.com"
                                    className="input input-bordered w-full max-w-xs"

                                    {...register2("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        },
                                    }
                                    )}
                                />
                                <label className="label">
                                    {errors2.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors2.name.message}</span>
                                    }
                                </label>
                            </div>

                            {/* dynamic google or email sign in error message */}
                            {errorMessage2}
                            <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value="Change Name" />
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Profile;