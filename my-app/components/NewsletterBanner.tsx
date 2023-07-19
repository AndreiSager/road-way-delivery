export default function NewsletterBanner() {
    return(
        <div className="w-full sectionPadding bg-mountain-sunset bg-cover lg:bg-contain bg-no-repeat bg-left-bottom lg:bg-right bg-primary-1 ">
            <div className="w-full h-full lg:w-1/2 flex flex-col justify-center lg:mx-8 gap-4 text-center lg:text-left">
                <div className="backdrop-brightness-50 lg:backdrop-brightness-100 flex flex-col gap-2">
                    <h1 className="font-bold text-3xl text-white">Join Our Newsletter</h1>
                    <p className="font-bold text-slate-200 w-full lg:w-[400px] ">Sign-up for our newsletter. Be the first one to receive the latest news from Road Way Deliver.</p>
                </div>
                <form action="" className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-4">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='shanerssager@dummy.com'
                        className='w-full lg:w-2/3 inputField focus:placeholder:italic'
                        />
                    <button type='submit' className='w-full lg:w-1/3 flex-auto callToAction mt-2 lg:mt-0 shadow-xl'>Join Now</button>
                </form>
            </div>
        </div>
    )
}