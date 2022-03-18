import {
    StyledSwiper, 
    StyledSlide,
    SwiperPreview,
    PreviewSlide,
    NavigationButtonLeft,
    NavigationButtonRight,
    PreviewWrapper
} from "./styles";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useRef } from "react";
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

SwiperCore.use([Navigation, Thumbs]);

export default function Gallery ({ slides }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
        <StyledSwiper 
                spaceBetween={20} 
                thumbs={{ swiper: thumbsSwiper }}
                loop
                onSlideChange={slider => setActiveSlide(slider.realIndex)}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <StyledSlide
                            src={slide.src}
                            alt={slide.alt}
                            width={728}
                            height={408}
                        />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
            <PreviewWrapper>
                <SwiperPreview 
                    spaceBetween={20}
                    slidesPerView={4}
                    onSwiper={e => setThumbsSwiper(e)}
                    freeMode
                    watchSlidesProgress
                    loop
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <PreviewSlide
                                src={slide.src}
                                alt={slide.alt}
                                width={167}
                                height={128}
                                $active={activeSlide === index}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperPreview>
            
                <NavigationButtonLeft minWidth={64} ref={navigationPrevRef} />
                <NavigationButtonRight minWidth={64} ref={navigationNextRef} />
            </PreviewWrapper>
        </>
    )
}