import React, { useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInputs from '../components/TextInputs'
const PetProfileForm = () => {





    const [upload, setUpload] = useState(false);
    const handleUpload = () => {
        setUpload(true);
        toast.error('Functionality Disabled', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    }

    return (
        <div className="mt-24 mb-20 py-10 px-5 flex-[5]">
            <h1 className="text-h1 justify-center items-center flex">Pet <FaPaw className="ml-5" /> file</h1>
            <form className="pt-10 max-w-2xl mx-auto grid md:grid-cols-2 gap-x-14 items-center gap-5">

                <fieldset className="flex flex-col gap-y-2 border-none max-w-[430px] w-full relative md:col-span-2 justify-self-center mb-14">
                    {upload && (
                        <ToastContainer />
                    )}
                    <label htmlFor="petPhoto" className="px-10 relative h-72 w-full rounded-lg bg-white border-dashed border-2 border-slate-600 flex items-center justify-center overflow-hidden cursor-pointer">
                        <p className="w-full text-center text-lg">
                            Click to Upload Your Pet&apos;s Favorite Photo!
                        </p>
                    </label>

                    <input onChange={handleUpload} id="petPhoto" type="file" hidden />
                </fieldset>

                <TextInputs />

                <fieldset className="flex flex-col gap-y-2 border-none w-full">
                    <label htmlFor="status" className="text-lg">Status</label>
                    <select id="status" className="p-1 cursor-pointer bg-transparent border  rounded-lg">
                        <option>None</option>
                        <option>Neutered</option>
                        <option>Spayed</option>
                    </select>
                </fieldset>

                <fieldset className="md:col-span-2 flex flex-col gap-y-2 border-none w-full">
                    <label htmlFor="additionalInfo" >Additional Info</label>
                    <textarea id="additionalInfo" className="border rounded-lg" rows={5} />
                </fieldset>

                <button className="md:col-span-2 flex items-center gap-x-1 text-lg mx-auto border py-1 px-2 rounded-lg" type="submit"><FaPaw /> Create Pawfile<FaPaw /></button>

            </form>
        </div >
    )
}

export default PetProfileForm