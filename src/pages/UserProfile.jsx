import React, { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import Navbar from '../components/Navbar';


export default function UserProfile({ style }) {

    const user = localStorage.getItem("user")

    const [selectedEditIndex, setSelectedEditIndex] = useState(-1);
    const [showAddAddressForm, setShowAddAddressForm] = useState(false);
    const [Address, setAddress] = useState([]);


    const handleRemove = (e, index) => {
    };


    const getAddress = useCallback(async () => {
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/checkout/address`, { email: user.email }
        ).then((response) => {
            setAddress(response.data.allAddress)

        })

    }, [user.email]);

    useEffect((() => {
        getAddress();

    }), [getAddress])

    const handleEditForm = (index) => {
        setSelectedEditIndex(index);
    };



    return (
        <div>
            <Navbar  />
            <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <img className='h-[15rem] w-[20rem] rounded-full mx-auto'
                        src='data:image/jpeg;base64,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' alt=''></img>
                    <h1 className="md:text-4xl text-2xl mt-5 font-bold tracking-tight text-gray-900">
                        {user.name}
                    </h1>
                    <h3 className="text-lg my-2 font-semibold italic tracking-tight text-gray-500">
                        {user.email}
                    </h3>
                    <h3 className="text-md font-bold tracking-tight text-red-900">
                        {user.role === 0 ? (" Customer") : ("Admin")}
                    </h3>
                </div>
                <div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <button
                            onClick={() => {
                                setShowAddAddressForm(true);
                            }}
                            type="submit"
                            className="rounded-md my-5 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add New Address
                        </button>
                        {showAddAddressForm &&
                            <button className='ml-[90%]' onClick={() => {
                                setShowAddAddressForm(false);
                            }}>
                                <MdClose size={27} />
                            </button>}
                        {showAddAddressForm ? (
                            <form
                                className="bg-white px-5 py-12 mt-1"
                                noValidate
                                onSubmit={() => { }}
                            >
                                <div className="space-y-12">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                                            Personal Information
                                        </h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            Use a permanent address where you can receive mail.
                                        </p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-4">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Full name
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"

                                                        id="name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Email address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"

                                                        type="email"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Phone
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="phone"

                                                        type="tel"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>

                                            <div className="col-span-full">
                                                <label
                                                    htmlFor="street-address"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Street address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"

                                                        id="street"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label
                                                    htmlFor="city"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    City
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"

                                                        id="city"
                                                        autoComplete="address-level2"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="state"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    State / Province
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"

                                                        id="state"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="pinCode"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    ZIP / Postal code
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"

                                                        id="pinCode"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Add Address
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : null}

                        <p className="mt-0.5 text-sm text-gray-500">Your Addresses :</p>
                        {Address?.map((address, index) => (
                            <div key={index}>
                                {selectedEditIndex === index ? (
                                    <form
                                        className="bg-white px-5 py-12 mt-12"
                                        noValidate
                                        onSubmit={() => { }}
                                    >
                                        <div className="space-y-12">
                                            <div className="border-b border-gray-900/10 pb-12">
                                                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                                                    Personal Information
                                                </h2>
                                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                                    Use a permanent address where you can receive mail.
                                                </p>

                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="name"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Full name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"

                                                                id="name"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="email"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Email address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"

                                                                type="email"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label
                                                            htmlFor="phone"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Phone
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="phone"

                                                                type="tel"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className="col-span-full">
                                                        <label
                                                            htmlFor="street-address"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Street address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                id="street"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                        <label
                                                            htmlFor="city"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            City
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"

                                                                id="city"
                                                                autoComplete="address-level2"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label
                                                            htmlFor="state"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            State / Province
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                id="state"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label
                                                            htmlFor="pinCode"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            ZIP / Postal code
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"

                                                                id="pinCode"
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button
                                                    onClick={(e) => setSelectedEditIndex(-1)}
                                                    type="submit"
                                                    className="rounded-md px-3 py-2 text-sm font-semibold text-grey shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Edit Address
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                ) : null}
                                <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                                    <div className="flex gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                                {address.name}
                                            </p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                {address.address}
                                            </p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                {address.zip}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                                        <p className="text-sm leading-6 text-gray-900">
                                            Phone: {address.phone}
                                        </p>
                                        <p className="text-sm leading-6 text-gray-500">
                                            {address.city}
                                        </p>
                                    </div>
                                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                                        <button
                                            onClick={(e) => handleEditForm(index)}
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={(e) => handleRemove(e, index)}
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}