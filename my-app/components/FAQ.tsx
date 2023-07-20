import { FQAContent as Questions } from '@/constants'

export default function FAQ() {
    return(
        <div className="sectionPadding flex flex-col flex-wrap justify-center items-center gap-16 w-full bg-slate-100">
            <div className="flex flex-col w-full lg:w-[600px] text-center">
                <h1 className="sectionHeader">Frequently Asked Questions</h1>
                <p className="font-medium text-gray-500">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className='flex flex-col gap-8 p-6 bg-white shadow-xl'>
                {Questions.map((question) => (
                    <div key={question.id} className='flex flex-col gap-2 w-full lg:w-[800px]'>
                        <h1 className='font-bold text-lg'>{question.question}</h1>
                        <p className='font-medium text-md text-slate-600'>{question.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}