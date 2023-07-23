"use client"

import { FQAContent as Questions } from '@/constants'
import { useEffect, useState } from 'react'

export default function FAQ() {
    useEffect(() => {
        setState({ ...appState, activeObject: appState.objects[1] })
    }, []);

    const [appState, setState] = useState({
        activeObject: { id: 1 },
        objects: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 } ],
    });
    
    function toggleActive(index: number) {
        setState({ ...appState, activeObject: appState.objects[index] })
    }
    
    function toggleActiveQuestion(index: number) {
        if (appState.objects[index] === appState.activeObject) {
            return 'cursor-pointer font-bold text-lg lg:text-left block p-6 shadow-xl rounded-lg bg-accent-1 text-white'; 
        } else {
            return 'cursor-pointer font-bold text-lg lg:text-left block p-6 shadow-xl rounded-lg hover:bg-accent-1 hover:text-white';
        }
    }

    function toggleActiveAnswer(index: number) {
        if (appState.objects[index] === appState.activeObject) {
            return 'rounded-lg font-medium text-md text-slate-600 text-justify block p-6 ease-in-out duration-150'; 
        } else {
            return 'rounded-lg font-medium text-md text-slate-600 text-justify block p-6 ease-in-out duration-150 absolute -top-[100%] -z-10';
        }
    }

    return(
        <div className="sectionPadding flex flex-col flex-wrap justify-center items-center gap-16 w-full bg-slate-100">
            <div className="flex flex-col w-full lg:w-[600px] text-center">
                <h1 className="sectionHeader">Frequently Asked Questions</h1>
                <p className="font-medium text-gray-500">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-16 lg:p-8'>
                <div className='flex flex-col lg:order-2 w-full lg:w-[700px]'>
                    {Questions.map((question) => (
                        <div key={question.id} className='flex flex-col w-full bg-white border-t border-slate-300 relative overflow-hidden'>
                            <h1 onClick={ () => {toggleActive(question.id)} } className={toggleActiveQuestion(question.id)}>{question.question}</h1>
                            <p className={toggleActiveAnswer(question.id)}>{question.answer}</p>
                        </div>
                    ))}
                </div>
                <div className='lg:order-1 flex flex-col gap-8'>
                    <div className='flex flex-col gap-2 text-center lg:text-left'>
                        <h6 className='font-medium text-xs text-slate-400 uppercase'>additional questions</h6>
                        <h1 className='font-bold text-2xl'>Have any questions?</h1>
                    </div>
                    <p className='font-medium text-sm text-slate-400 sentence text-justify w-full lg:w-[300px]'>We are an amicably reliable delivery service, focused on providing excellent customer service and timely deliveries to meet the needs of their clients. If you have any questions ask away and we will answer you worries within two business days.</p>
                    <button type='button' className='capitalize callToAction'>ask away</button>
                </div>
            </div>
        </div>
    )
}