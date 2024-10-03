import { useEffect, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ar7Id from "../../utils/unique-id/ar7Id";
const LandingPage = () => {
  const headerRef = useRef(null);
  const headerDivRef = useRef(null);

  useEffect(() => {
    const responsivenessFunction = () => {
      if (headerRef.current) {
        const header = headerRef.current as HTMLDivElement;
        const heightOfHeaderDiv = header.scrollHeight;

        if (headerDivRef.current) {
          const headerDiv = headerDivRef.current as HTMLDivElement;
          headerDiv.style.height = heightOfHeaderDiv - 2 + "px"; // -2 for real mobile issue
          console.log("function activated");
        }
      }
    };
    responsivenessFunction();
    setTimeout(() => {
      responsivenessFunction();
    }, 3000);
    window.addEventListener("load", responsivenessFunction);
    window.addEventListener("DOMContentLoaded", responsivenessFunction);
    window.addEventListener("resize", responsivenessFunction);
    return () => {
      window.removeEventListener("load", responsivenessFunction);
      window.removeEventListener("resize", responsivenessFunction);
      window.removeEventListener("DOMContentLoaded", responsivenessFunction);
    };
  }, []);
  return (
    <>
      <header>
        <div ref={headerDivRef} className=" overflow-hidden relative">
          <img
            src="/images/landing-page/header-image.jpg"
            className="h-full w-full object-cover object-center md:object-fit  xl:object-[center_-35rem]  -scale-x-100"
            alt=""
          />
          <div
            ref={headerRef}
            className="bg-black bg-opacity-80 lg:bg-opacity-70 w-full h-fit absolute top-0 "
          >
            <div className=" md:hidden">
              <div className=" py-5 bg-gradient-to-b from-black to-transparent transition-all duration-500">
                <div className="text-[white] text-center font-medium text-lg">
                  milkbar
                </div>
                <hr className="mt-5 opacity-50" />
                <div className="mt-5">
                  <ul className="px-5 flex justify-between ">
                    <li className="text-[white] text-xs">SERVICES</li>
                    <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-xs">
                      WORK
                    </li>
                    <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-xs">
                      CONTACT
                    </li>
                    <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-xs">
                      ABOUT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="py-10  px-5 bg-gradient-to-b from-black to-transparent transition-all duration-500">
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-screen-xl ">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[white] text-center font-medium text-2xl">
                          milkbar
                        </div>
                      </div>
                      <div>
                        <ul className=" flex justify-between items-center gap-10">
                          <li className="text-[white] text-sm">SERVICES</li>
                          <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-sm">
                            WORK
                          </li>
                          <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-sm">
                            CONTACT
                          </li>
                          <li className="text-[white] opacity-60 hover:opacity-100 cursor-pointer text-sm">
                            ABOUT
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>
                          <i className="fa-solid fa-envelope text-[white] text-2xl opacity-70 hover:opacity-100  active:scale-[0.95] cursor-pointer"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 lg:mt-36 xl:mt-[15rem]">
              <div className="px-5 flex justify-center items-center">
                <div className="lg:flex max-w-screen-xl w-full lg:justify-between">
                  <div className="lg:w-[30%]">
                    <div className="text-[white]  text-xl lg:text-3xl">
                      Work
                    </div>
                    <div className="mt-16 lg:mt-20 text-xs text-[white] opacity-70 lg:text-base">
                      FEATURED
                    </div>
                    <div className="text-[white] mt-5 lg:mt-7 opacity-80 lg:text-2xl">
                      Swift: Members Only Dating App
                    </div>
                    <div className="text-[white] mt-5 lg:mt-7  opacity-80 lg:text-2xl">
                      branding, app design, social media
                    </div>
                    <div className="text-[white] mt-2  opacity-80 text-xs italic lg:text-lg">
                      launching late 2024
                    </div>
                  </div>
                  <div className="lg:w-[60%]">
                    <div className="mt-16 lg:mt-0">
                      <div className="flex justify-between items-end">
                        <div className="w-[30%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                          <img
                            src="/images/landing-page/mobile-image-1.jpg"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div className="w-[30%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                          <img
                            src="/images/landing-page/mobile-image-2.jpg"
                            alt=""
                            className="w-full"
                          />
                        </div>
                        <div className="w-[30%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                          <img
                            src="/images/landing-page/mobile-image-3.jpg"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[5rem] bg-gradient-to-b from-transparent to-[#131313] transition-all duration-500"></div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="pt-10 md:pt-32 lg:pt-[13rem] flex justify-center items-center bg-[#131313] px-5">
            <div className="max-w-screen-xl w-full  py-10 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10 lg:gap-x-16 md:gap-y-0">
                <div>
                  <div className="h-[25rem] sm:h-[30rem] lg:h-[35rem]  relative overflow-hidden rounded">
                    <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                      <img
                        src="/images/landing-page/house-2.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                        <div className=" h-full flex justify-center items-center">
                          <div className="w-[80%]">
                            <div className="flex justify-center items-center">
                              <img
                                src="/images/landing-page/house-1.jpg"
                                alt=""
                                className="w-[100%] "
                              />
                            </div>
                            <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                              London-based luxury travel concierge
                            </div>
                            <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                              HOSPITALITY-BRAND DIRECTION
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" md:mt-36 h-[25rem] sm:h-[30rem] lg:h-[35rem]  relative overflow-hidden rounded">
                    <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                      <img
                        src="/images/landing-page/inside-house.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                        <div className=" h-full flex justify-center items-center">
                          <div className="w-[80%]">
                            <div className="flex justify-center items-center">
                              <video
                                className="w-[30%] rounded-xl sm:rounded-2xl md:rounded-3xl"
                                autoPlay
                                loop
                                muted
                              >
                                <source
                                  src="/videos/mobile.mp4"
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                              London-based luxury travel concierge
                            </div>
                            <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                              HOSPITALITY-BRAND DIRECTION
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:mt-[-5rem] h-[25rem] sm:h-[30rem] lg:h-[30rem]   relative overflow-hidden rounded ">
                    <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                      <img
                        src="/images/landing-page/ocean.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-50">
                        <div className=" h-full flex justify-center items-center">
                          <div className="w-[80%]">
                            <div>
                              <video className="w-full" autoPlay loop muted>
                                <source
                                  src="/videos/boat.mp4"
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                              London-based luxury travel concierge
                            </div>
                            <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                              HOSPITALITY-BRAND DIRECTION
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="md:mt-[4rem] h-[25rem] sm:h-[30rem] lg:h-[35rem]  relative overflow-hidden rounded">
                    <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                      <img
                        src="/images/landing-page/house-2.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                        <div className=" h-full flex justify-center items-center">
                          <div className="w-[80%]">
                            <div className="flex justify-center items-center">
                              <img
                                src="/images/landing-page/house-1.jpg"
                                alt=""
                                className="w-[100%] "
                              />
                            </div>
                            <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                              London-based luxury travel concierge
                            </div>
                            <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                              HOSPITALITY-BRAND DIRECTION
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" md:mt-[-10rem] h-[25rem] sm:h-[30rem] lg:h-[35rem]  relative overflow-hidden rounded">
                    <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                      <img
                        src="/images/landing-page/inside-house.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                        <div className=" h-full flex justify-center items-center">
                          <div className="w-[80%]">
                            <div className="flex justify-center items-center">
                              <video
                                className="w-[30%] rounded-xl sm:rounded-2xl md:rounded-3xl"
                                autoPlay
                                loop
                                muted
                              >
                                <source
                                  src="/videos/mobile.mp4"
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                              London-based luxury travel concierge
                            </div>
                            <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                              HOSPITALITY-BRAND DIRECTION
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="md:mt-[4rem] h-[25rem] sm:h-[30rem] lg:h-[30rem]   relative overflow-hidden rounded ">
                    <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                      <img
                        src="/images/landing-page/ocean.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-50">
                        <div className=" h-full flex justify-center items-center">
                          <div className="w-[80%]">
                            <div>
                              <video className="w-full" autoPlay loop muted>
                                <source
                                  src="/videos/boat.mp4"
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                              London-based luxury travel concierge
                            </div>
                            <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                              HOSPITALITY-BRAND DIRECTION
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-10 md:pt-36 lg:pt-[13rem] flex justify-center items-center bg-[#131313] px-5">
            <div className="max-w-screen-xl w-full  py-10 ">
              <div>
                <div className="text-[white] md:text-xl lg:text-2xl opacity-[0.7]">
                  FROM CLIENTS
                </div>

                <div className="mt-10 lg:mt-16">
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1} // Default for small screens
                    spaceBetween={20} // Default gap for small screens
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    className="h-full w-full"
                    breakpoints={{
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                      },
                      // when window width is >= 1024px
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 75,
                      },
                    }}
                  >
                    <SwiperSlide key={ar7Id()} className="">
                      <div>
                        <div className="text-[white] opacity-[0.9] lg:text-lg">
                          Working with you has been truly wonderful, and I'm
                          delighted to have found your business. You've
                          transformed my brand into something I'm proud to
                          showcase, and you've truly nailed it.
                        </div>
                        <div className="mt-7 text-sm lg:text-base text-[white] opacity-[0.7]">
                          TORONTO-BASED DEVELOPER
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={ar7Id()} className="">
                      <div className="">
                        <div className="text-[white] opacity-[0.9] lg:text-lg">
                          The Milkbar team are amazing to work and understood my
                          vision right from the beginning. Will definitely
                          recommend Milkbar to others in the luxury home space.
                        </div>
                        <div className="mt-7 text-sm lg:text-base text-[white] opacity-[0.7]">
                          HOUSE OF ONE MIAMI - LA
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={ar7Id()} className="">
                      <div className="">
                        <div className="flex justify-between gap-2 py-2 px-5 rounded-lg bg-gradient-to-b from-[#69665f] to-[#3b3b3b] transition-all duration-500">
                          <div className="flex items-center gap-2">
                            <div className="w-[2.5rem] rounded-full overflow-hidden">
                              <img
                                src="/images/landing-page/messi-family.jpg"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <div>
                              <div className="text-[white] text-sm font-medium opacity-[0.7]">
                                Messi
                              </div>
                              <div className="text-[white] text-xs opacity-[0.9] mt-1">
                                You are literally THE BEST
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-[white] opacity-[0.7] text-xs">
                              7m ago
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 flex justify-between gap-2 py-2 px-5 rounded-lg bg-gradient-to-b from-[#69665f] to-[#3b3b3b] transition-all duration-500">
                          <div className="flex items-center gap-2">
                            <div className="w-[2.5rem] rounded-full overflow-hidden">
                              <img
                                src="/images/landing-page/messi-family.jpg"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <div>
                              <div className="text-[white] text-sm font-medium opacity-[0.7]">
                                Messi
                              </div>
                              <div className="text-[white] text-xs opacity-[0.9] mt-1">
                                OMG I am In love
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-[white] opacity-[0.7] text-xs">
                              7m ago
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <div className="flex items-center gap-5">
                            <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                              <img
                                src="/images/landing-page/girl.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div>
                              <div className="text-[white] text-sm">
                                ROSALINA WEINBERG
                              </div>
                              <div className="text-[white] text-sm mt-1 opacity-[0.7]">
                                @withrosalind
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={ar7Id()} className="">
                      <div>
                        <div className="text-[white] opacity-[0.9]">
                          Working with you has been truly wonderful, and I'm
                          delighted to have found your business. You've
                          transformed my brand into something I'm proud to
                          showcase, and you've truly nailed it.
                        </div>
                        <div className="mt-7 text-sm text-[white] opacity-[0.7]">
                          TORONTO-BASED DEVELOPER
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={ar7Id()} className="">
                      <div className="mt-10 md:mt-0">
                        <div className="text-[white] opacity-[0.9]">
                          The Milkbar team are amazing to work and understood my
                          vision right from the beginning. Will definitely
                          recommend Milkbar to others in the luxury home space.
                        </div>
                        <div className="mt-7 text-sm text-[white] opacity-[0.7]">
                          HOUSE OF ONE MIAMI - LA
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={ar7Id()} className="">
                      <div className="">
                        <div className="flex justify-between gap-2 py-2 px-5 rounded-lg bg-gradient-to-b from-[#69665f] to-[#3b3b3b] transition-all duration-500">
                          <div className="flex items-center gap-2">
                            <div className="w-[2.5rem] rounded-full overflow-hidden">
                              <img
                                src="/images/landing-page/messi-family.jpg"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <div>
                              <div className="text-[white] text-sm font-medium opacity-[0.7]">
                                Messi
                              </div>
                              <div className="text-[white] text-xs opacity-[0.9] mt-1">
                                You are literally THE BEST
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-[white] opacity-[0.7] text-xs">
                              7m ago
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 flex justify-between gap-2 py-2 px-5 rounded-lg bg-gradient-to-b from-[#69665f] to-[#3b3b3b] transition-all duration-500">
                          <div className="flex items-center gap-2">
                            <div className="w-[2.5rem] rounded-full overflow-hidden">
                              <img
                                src="/images/landing-page/messi-family.jpg"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <div>
                              <div className="text-[white] text-sm font-medium opacity-[0.7]">
                                Messi
                              </div>
                              <div className="text-[white] text-xs opacity-[0.9] mt-1">
                                OMG I am In love
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-[white] opacity-[0.7] text-xs">
                              7m ago
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <div className="flex items-center gap-5">
                            <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                              <img
                                src="/images/landing-page/girl.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center"
                              />
                            </div>
                            <div>
                              <div className="text-[white] text-sm">
                                ROSALINA WEINBERG
                              </div>
                              <div className="text-[white] text-sm mt-1 opacity-[0.7]">
                                @withrosalind
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
