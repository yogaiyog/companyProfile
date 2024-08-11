export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/hero2.jpg')] bg-cover bg-center h-screen">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="bg-black p-5 bg-transparent backdrop-blur-lg rounded-lg">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 text-shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Get your Free Trial Couching Program 
                <a href="#" className="font-semibold text-indigo-600 ml-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                   Book Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-shadow">
                Game-Course
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 text-slate-200">
              "Master Every Move, Conquer Every Game"
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact-Us
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
