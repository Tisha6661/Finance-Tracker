"use client";
import React from 'react'
import styles from "./BlockStyles.module.css";
// interface userData {
//     Principal_amount: number;
//     Annual_rate: number;
//     Loan_term_years: number;
//     Payments_made: number;
// }

function calLoanAmortization(Principal_amount, Annual_rate, Loan_term_years, Payments_made){
    let la;
    let r;
    let n;
    r = Annual_rate / 12 / 100
    n = Loan_term_years * 12
    la = Principal_amount * ((1 + r)**n - (1 + r)**Payments_made) / ((1 + r)**n - 1);
    return la.toFixed(2);
}

function LA({userData}) {
        const {Principal_amount, Annual_rate, Loan_term_years, Payments_made} = userData;
        const la = calLoanAmortization(Principal_amount, Annual_rate, Loan_term_years, Payments_made);
    return (
        <div 
            className={` w-[360px] m-3 p-4 rounded-lg font-extrabold  bg-slate-700  ${styles.blockHeightAdjustable} `}   
        >
                Loan Amortization : <span className='px-2'>Rs {la}  </span> 
                <br/>
                <div className='text-xs italic w-full pt-1 truncate'>This formula calculates the remaining balance on a loan after a certain number of payments. It takes into account the principal, interest rate, and the number of payments made.</div>
        </div>
    )
}

export default LA;