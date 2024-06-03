"use client";
import React from 'react'
import styles from "./BlockStyles.module.css";
// interface userData {
//     Principal_amount: number;
//     Annual_rate: number;
//     Years: number;
//     Times_compounded: number;
// }

function calCompoundInterest(Principal_amount, Annual_rate, Years, Times_compounded){
    let ci;
    ci = Principal_amount * (1 + (Annual_rate/100) / Times_compounded) ** (Times_compounded * Years);
    return ci.toFixed(2);
}

function CI({userData}) {
        const {Principal_amount, Annual_rate, Years, Times_compounded} = userData;
        const ci = calCompoundInterest(Principal_amount, Annual_rate, Years, Times_compounded);
    return (
        <div 
            className={` w-[360px] m-3 p-4 rounded-lg font-extrabold  bg-slate-700  ${styles.blockHeightAdjustable} `}   
        >
                Compound Interest : <span className='px-2'>Rs {ci}  </span> 
                <br/>
                <div className='text-xs italic w-full pt-1 truncate'>Compound interest takes into account the interest on the initial principal as well as the interest that accumulates over previous periods. It is a powerful concept that shows how investments grow over time.</div>
        </div>
    )
}

export default CI;