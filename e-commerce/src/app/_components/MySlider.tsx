"use client"
// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';

interface SlideType {
    image: string
    title: string
    subtitle: string
    content:React.ReactNode
    desc: string
    button1 : string
    button2 : string
}

interface MySliderPropsType {
    slides: SlideType[],
    spaceBetween?: number,
    slidesPerView?: number,
    className?: string;
}

export default function MySlider({ slides, spaceBetween = 100, slidesPerView = 3 }: MySliderPropsType) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop
            navigation
            className="h-full w-full "
            pagination={{ clickable: true, bulletActiveClass: "bg-white! px-3 rounded-2xl! opacity-100!" }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >


            {slides.map((slide) => <SwiperSlide>



                <div className=''>


                    <img src={slide.image} className='w-full h-full object-cover absolute top-0' alt="slider" />

                    <div className='absolute top-1/4 left-20 z-50 '>
                        <h3 className='text-4xl font-bold text-white'>{slide.title}</h3>
                        <h3 className='text-4xl font-bold text-white'>{slide.subtitle}</h3>
                        <p className='my-5 tracking-wide text-white'>{slide.desc}</p>
                        <div className='flex items-center gap-2 '>
                            {slide.content}
                            <Button className='bg-transparent border border-2 cursor-pointer py-6 px-7 text-xl font-semibold border-gray-300'>{slide.button2}</Button>
                        </div>
                    </div>

                    <div className='flex flex-col  justify-center ps-30 text-white absolute w-full h-full top-0 bg-gradient-to-r from-[#00C950E5] to-[#05DF7280] z-10  pointer-events-none'>

                    </div>

                </div>

            </SwiperSlide>)}

        </Swiper>


    );
};