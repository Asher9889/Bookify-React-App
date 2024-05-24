<div className="relative w-full bg-[var(--background-color)] lg:h-[90vh] ">
            {/* home */}
            <div>
                <img className="absolute w-24 sm:w-56 sm:right-96 top-4" src={books2} alt="" />
            </div>
            <ContentWrapper>
               <div className="relative w-full flex flex-col gap-5 sm:flex-row items-center justify-between pt-2 font-paytone">
                    <div className="">
                        <p className="text-5xl sm:text-8xl tracking-tight text-[var(--blue1)] textShadow">WHERE IDEAS <br />COME TO LIFE</p>
                    </div>
                    <div className="hidden sm:block text-3xl  text-white bg-[var(--red1)] py-3 px-8 lg:pt-5 lg:px-16 rounded-xl border-2 border-black">
                        <p>STUDENTS<br />DISCOUNT<br />UP TO 50%</p>
                    </div>
               </div>

               <div className=" w-full pt-8 sm:flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col gap-5">
                        <p className="text-xl  sm:text-2xl font-base font-radio tracking-[1px]">BOOK FESTIVAL</p>
                        <p onClick={()=> navigate("/login")} className="w-fit px-6 py-2 rounded-xl border-[2px] border-black text-xl text-white bg-[var(--blue2)] italic cursor-pointer">Try for Free</p>
                        <p className="text-2xl text-[var(--blue3)] font-bold font-radio tracking-[1px]">A Book is window to World.</p>
                        <h3 className="text-2xl text-[var(--blue3)] font-semibold font-radio tracking-[1px]">GARV LIBRARY <br />SHYAM NAGAR</h3>
                    </div>
                    <div>
                        <img className="w-[550px]" src={books3} alt="" />
                    </div>
               </div>
            </ContentWrapper>
        </div>