"use client";
import React from 'react'
import styles from "./BlockStyles.module.css";
// interface userData {
//     Principal_amount: number;
//     Annual_rate: number;
//     Years: number;
// }

function calsimpleinterest(Principal_amount, Annual_rate, Years){
    let si;
    si = Principal_amount * (1 + Annual_rate * Years);
    return si.toFixed(2);
}

function SI({userData}) {
        const {Principal_amount, Annual_rate, Years} = userData;
        const si = calsimpleinterest(Principal_amount, Annual_rate, Years);
    return (
        <div 
            className={` w-[360px] m-3 p-4 rounded-lg font-extrabold  bg-slate-700  ${styles.blockHeightAdjustable} `}   
        >
                Simple Interest : <span className='px-2'>Rs {si}  </span> 
                <br/>
                <div className='text-xs italic w-full pt-1 truncate'>Simple interest is a quick way to calculate the interest charge on a loan or investment. It is primarily used for short-term loans or investments where the interest is calculated only on the principal amount, not on accumulated interest.</div>
        </div>
    )
}

export default SI;