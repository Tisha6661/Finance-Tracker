"use client";
import React , { useEffect, useState } from 'react'
import { keys } from './data.js';

function CompareArray(arr1, arr2) {
    if(arr1.length === arr2.length) {
        arr1.sort();
        arr2.sort();
        // console.log("After Sorting",arr1,arr2``);
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    return false;
}


function InputUserForm({setuserData}) {

    const [userData, setData] = useState({
    });

    function handleSubmit() {
        if( CompareArray(Object.keys(userData) , keys.map(key => key.name) )) {
            setuserData(userData);
            // store in Local Storage
            localStorage.setItem("UserData_Finance_Tracker", JSON.stringify(userData));
        }else {
            alert("Please fill the details");
        }
    }

  return (
    <div className='bg-base-300 p-6 rounded-lg	'>
        <div className='h-max mx-auto flex flex-col'>
            <div className='text-center text-xl font-bold mb-3'>
                Enter Your Finance Details
            </div>
            {
                keys.map((key,inde) => {
                    return (
                        <label key={inde} className="input input-bordered flex items-center justify-between gap-2 my-2">
                                        {key.name} :
                            {
                                key.type === "option" ?
                                    <select className="bg-inherit  w-max text-center"
                                        key={key.name}
                                        defaultValue = {key.enum[0]}
                                        onChange={(e) => setData({...userData, [key.name]: e.target.value})}
                                    >
                                        {
                                            key.enum.map((item, index) => {
                                                return <option key={index}>{item}</option>
                                            })
                                        }
                                    </select>
                                :
                                <input 
                                    onChange={(e) => setData({...userData, [key.name]: e.target.value})}
                                    type={key.type}
                                    placeholder = {`Enter Your ${key.name} in  ${key.scale}`}
                                />
                            }
                        </label>
                    )
                })
            }
            {/* Submit Button */}
            <input type="submit" value="Submit" className="btn btn-primary mx-auto mt-3"
                onClick={() => {
                    handleSubmit();
                }}
            />
        </div>
    </div>
              )
            }

export default InputUserForm;