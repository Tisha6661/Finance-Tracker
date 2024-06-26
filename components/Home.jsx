"use client";
import React, {useState} from 'react'
import { UserDataBlock } from './Blocks/UserData.jsx';
import { MdEmojiPeople } from "react-icons/md";
import { ShepherdJourneyProvider, useShepherd } from "react-shepherd";
import { Steps } from '@/app/steps.js';
import  ImageGallery  from './Blocks/ImageGallery.jsx';
// Home.jsx

import { SimpleInterest, CompoundInterest, MonthlyMortgagePayment, LoanAmortization, EffectiveAnnualRate } from './Blocks';

function Home({userData}) {
    const shepherd = useShepherd();
    const [tourState, setTourState] = useState(false);
    const tour = new shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          cancelIcon: true,
          scrollTo: false,
          classes:
            "bg-base-100 shadow-xl p-5 w-96 rounded-lg border-2 border-indigo-500 mt-3",
        },
        steps: Steps,
      });
      
      function startTour(){
        if(tourState) {
            alert('Tour already started');
            return;
        }
        tour.start();
        setTourState(true);
      }

  return (
    <ShepherdJourneyProvider>
    <div className='flex w-full px-6'>
        <button 
            onClick={startTour}
            className='absolute bottom-6 right-6 text-5xl bg-yellow-600 text-black hover:bg-sky-700 rounded-full p-2'
        >
            <MdEmojiPeople />
        </button>
        <div className="float w-1/4">
            <UserDataBlock userData= {userData} />
        </div>
        <div className='float-left w-1/4' id='analyticsBlocks'>
                <CompoundInterest userData = {userData} />
                <SimpleInterest userData = {userData} />
                <MonthlyMortgagePayment userData = {userData} />
                <LoanAmortization userData = {userData} />
                <EffectiveAnnualRate userData = {userData} />
        </div>
        <div className='float-left w-1/2'>
            <ImageGallery />
        </div>
    </div>
    </ShepherdJourneyProvider>
  )
}

export default Home;