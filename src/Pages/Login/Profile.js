import React, { useState } from 'react';
import { useAuthState, useDeleteUser, useUpdateEmail, useUpdatePassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import userIcon from '../../assets/icons/user.png'


const Profile = () => {
    const [updateProfile, updatingProfile, updateProfileError] = useUpdateProfile(auth);
    const [updateEmail, updatingEmail, updateEmailError] = useUpdateEmail(auth);
    const [user, loadingAuthState, authStateError] = useAuthState(auth);
    const [updatePassword, updatingPassword, updatePasswordError] = useUpdatePassword(auth);
    const [deleteUser, loadingDeleteUser, deleteUserError] = useDeleteUser(auth);

    const [errorMessage4, setErrorMessage4] = useState(false)

    let errorMessage1, errorMessage2, errorMessage3;

    const {
        register: registerUpdateEmail,
        formState: { errors: updateEmailErrors },
        handleSubmit: handleUpdateEmail
    } = useForm();

    const {
        register: registerUpdateName,
        formState: { errors: updateNameErrors },
        handleSubmit: handleUpdateName
    } = useForm();

    const {
        register: registerUpdatePassword,
        formState: { errors: updatePasswordErrors },
        handleSubmit: handleUpdatePassword
    } = useForm();

    const {
        register: registerDeleteUser,
        formState: { errors: deleteUserErrors },
        handleSubmit: handleDeleteUser,
    } = useForm();

    const updateNewEmail = async (data) => {
        await updateEmail(data.email);
    }

    const updateNewName = async (data) => {
        await updateProfile({ displayName: data.name });
    }

    const updateNewPassword = async (data) => {
        if (data.newPassword === data.confirmPassword) {
            await updatePassword(data.newPassword);
        }
        else {
            errorMessage3 = <p className="py-1 text-sm text-red-500">Password Does not match !</p>;
            console.log(errorMessage3);
        }
    }

    const deleteCurrentUser = async (data) => {
        if (await data.deleteUser === "DELETE") {
            setErrorMessage4();
            deleteUser();
        }
        else {
            setErrorMessage4(<p className="py-1 text-sm text-red-500">Write DELETE</p>);
        }


    }

    if (updateEmailError || authStateError) {
        errorMessage1 = <p className="py-1 text-sm text-red-500">{updateEmailError?.message || authStateError?.message}</p>
    }
    if (updateProfileError || authStateError) {
        errorMessage2 = <p className="py-1 text-sm text-red-500">{updateProfileError?.message || authStateError?.message}</p>
    }
    if (updatePasswordError || authStateError) {
        errorMessage3 = <p className="py-1 text-sm text-red-500">{updatePasswordError?.message || authStateError?.message}</p>
    }

    if (deleteUserError || authStateError) {
        errorMessage3 = <p className="py-1 text-sm text-red-500">{deleteUserError?.message || authStateError?.message}</p>
    }

    if (updatingProfile || updatingEmail || updatingPassword || loadingDeleteUser || loadingAuthState) {
        return <LoadingSpinner text="Processing..." />
    }



    return (
        <div className="px-4 lg:px-12 pb-10">
            <div>
                <div className="avatar flex justify-center  pt-10 lg:pt-20">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || userIcon} alt="User" />
                    </div>
                </div>
                {user?.displayName && <h2 className="text-center text-3xl pt-5">Hello, <span className="text-secondary font-bold">{user.displayName} !</span></h2>}
                {user?.email && <h2 className="text-center text-accent text-xl pt-5">{user.email}</h2>}
            </div>
            <div className="flex justify-center items-center mt-5 mb-10">
                {/* update name */}
                <div className="card w-96  shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-accent text-2xl">Update Name</h2>
                        {/* Update Name Form Starts */}
                        <form onSubmit={handleUpdateName(updateNewName)}>
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

                                    {...registerUpdateName("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        },
                                    }
                                    )}
                                />
                                <label className="label">
                                    {updateNameErrors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{updateNameErrors.name.message}</span>
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
            <div className="flex justify-center items-center mt-10 mb-5">
                {/* update email */}
                <div className="card w-96  shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-accent text-2xl">Update Email</h2>
                        {/* Update Email Form Starts */}
                        <form onSubmit={handleUpdateEmail(updateNewEmail)}>
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

                                    {...registerUpdateEmail("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Provide Valid Email Address'
                                        }
                                    }
                                    )}
                                />
                                <label className="label">
                                    {updateEmailErrors.email?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{updateEmailErrors.email.message}</span>
                                    }
                                    {updateEmailErrors.email?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{updateEmailErrors.email.message}</span>
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
                {/* update password */}
                <div className="card w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-accent text-2xl">Update Password</h2>
                        {/* Update password Form Starts */}
                        <form onSubmit={handleUpdatePassword(updateNewPassword)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Enter New Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="input input-bordered w-full max-w-xs"

                                    {...registerUpdatePassword("newPassword", {
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
                                    {updatePasswordErrors.newPassword?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{updatePasswordErrors.newPassword.message}</span>
                                    }
                                    {updatePasswordErrors.newPassword?.type === 'minLength' &&
                                        <span className="label-text-alt text-red-500">{updatePasswordErrors.newPassword.message}</span>
                                    }
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full max-w-xs"
                                    placeholder="Confirm Password"

                                    {...registerUpdatePassword("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: "Confirm Password is required"
                                        },
                                    }
                                    )}
                                />
                                <label className="label">
                                    {updatePasswordErrors.confirmPassword?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{updatePasswordErrors.confirmPassword.message}</span>
                                    }
                                </label>
                            </div>
                            {/* dynamic update password error message */}
                            {errorMessage3}
                            <input
                                className='btn btn-accent w-full max-w-xs text-white'
                                type="submit"
                                value="Change Password"
                            />
                        </form>
                    </div>

                </div>
            </div>
            <div className="flex justify-center items-center mt-5 mb-10">
                {/* delete account */}
                <div className="card w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl text-red-500">Delete Account</h2>
                        {/* Delete Account Form Starts */}
                        <form onSubmit={handleDeleteUser(deleteCurrentUser)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Write DELETE To Delete Your Account</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="DELETE"
                                    className="input input-bordered w-full max-w-xs"

                                    {...registerDeleteUser("deleteUser", {
                                        required: {
                                            value: true,
                                            message: "Write DELETE"
                                        },
                                    }
                                    )}
                                />
                                <label className="label">
                                    {deleteUserErrors.deleteUser?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{deleteUserErrors.deleteUser.message}</span>
                                    }
                                </label>
                            </div>
                            {/* dynamic account delete error message */}
                            {errorMessage4}
                            <input
                                className='btn btn-accent w-full max-w-xs text-white btn-error'
                                onChange={(event) => {
                                    console.log(event);
                                }}
                                type="submit"
                                value="Delete Account"
                            />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;