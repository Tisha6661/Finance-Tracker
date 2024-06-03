"use client";
import React from 'react'
import styles from "./BlockStyles.module.css";
// interface userData {
//     Annual_rate: number;
//     Times_compounded: number;
// }

function calsimpleinterest(Annual_rate, Times_compounded){
    let ear;
    ear = (1 + (Annual_rate/100) / Times_compounded)**Times_compounded - 1;
    return ear.toFixed(2);
}

function EAR({userData}) {
        const {Annual_rate, Times_compounded} = userData;
        const ear = calsimpleinterest(Annual_rate, Times_compounded);
    return (
        <div 
            className={` w-[360px] m-3 p-4 rounded-lg font-extrabold  bg-slate-700  ${styles.blockHeightAdjustable} `}   
        >
                Effective Annual Rate : <span className='px-2'> {ear} % </span> 
                <br/>
                <div className='text-xs italic w-full pt-1 truncate'>The Effective Annual Rate (EAR) reflects the actual annual return on an investment or the actual annual interest rate on a loan, accounting for compounding within the year.</div>
        </div>
    )
}

export default EAR;