"use client";
import React from 'react'
import styles from "./BlockStyles.module.css";
// interface userData {
//     Principal_amount: number;
//     Annual_rate: number;
//     Loan_term_years: number;
// }

function calMonthlyMorgage(Principal_amount, Annual_rate, Loan_term_years){
    let mm;
    let r;
    let n;
    r = Annual_rate / 12 / 100
    n = Loan_term_years * 12
    mm = Principal_amount * r * (1 + r)**n / ((1 + r)**n - 1)
    return mm.toFixed(2);
}

function MM({userData}) {
        const {Principal_amount, Annual_rate, Loan_term_years} = userData;
        const mm = calMonthlyMorgage(Principal_amount, Annual_rate, Loan_term_years);
    return (
        <div 
            className={` w-[360px] m-3 p-4 rounded-lg font-extrabold  bg-slate-700  ${styles.blockHeightAdjustable} `}   
        >
                Monthly Morgage Payment : <span className='px-2'>Rs {mm}  </span> 
                <br/>
                <div className='text-xs italic w-full pt-1 truncate'>This formula calculates the monthly payment required to repay a mortgage loan. It factors in the loan principal, the interest rate, and the loan term.</div>
        </div>
    )
}

export default MM;