export default function NewsletterBanner() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <div className="w-full max-w-center py-24 md:px-40">
        <div className="relative h-[600px] w-full max-w-center overflow-hidden rounded-[3rem] bg-mountain-sunset bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-black from-30% to-transparent to-70% opacity-40" />

          <div className="z-10 flex h-full w-full flex-col items-start justify-center gap-12 text-center lg:mx-8 lg:ml-20 lg:w-1/2 lg:text-left">
            <div className="z-10 flex flex-col gap-4 backdrop-brightness-50 lg:backdrop-brightness-100">
              <h1 className="z-10 text-4xl font-bold text-white">
                Join Our Newsletter
              </h1>
              <p className="z-10 w-full text-base font-bold text-white lg:w-[420px]">
                Sign-up for our newsletter. Be the first one to receive the
                latest news from Road Way Delivery.
              </p>
            </div>
            <form
              action=""
              className="z-10 flex w-full flex-col items-center gap-2 lg:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="inputField w-full max-w-[480px] focus:placeholder:italic"
              />
              <button
                type="button"
                className="h-full w-full max-w-[200px] rounded-lg bg-accent-1 px-12 text-base font-bold text-white"
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
