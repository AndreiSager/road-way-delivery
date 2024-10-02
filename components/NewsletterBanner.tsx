export default function NewsletterBanner() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <div className="w-full max-w-center py-24 md:px-40">
        <div className="relative h-[600px] w-full max-w-center overflow-hidden rounded-[3rem] bg-stone-900 bg-mountain-sunset bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-black from-30% to-transparent to-70% opacity-25" />

          <div className="z-10 flex h-full w-full flex-col justify-center gap-4 text-center lg:mx-8 lg:ml-24 lg:w-1/2 lg:text-left">
            <div className="z-10 flex flex-col gap-2 backdrop-brightness-50 lg:backdrop-brightness-100">
              <h1 className="z-10 text-3xl font-bold text-white">
                Join Our Newsletter
              </h1>
              <p className="z-10 w-full font-bold text-slate-200 lg:w-[400px]">
                Sign-up for our newsletter. Be the first one to receive the
                latest news from Road Way Delivery.
              </p>
            </div>
            <form
              action=""
              className="z-10 mt-4 flex flex-col items-center justify-center gap-2 lg:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="inputField w-full focus:placeholder:italic lg:w-2/3"
              />
              <button
                type="button"
                className="callToAction mt-2 w-full flex-auto shadow-xl lg:mt-0 lg:w-1/3"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
