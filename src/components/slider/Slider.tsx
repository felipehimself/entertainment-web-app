import 'swiper/css';
import { useGlobalContext } from '../../store/context';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './SliderItem';

const Slider = () => {
  const { state } = useGlobalContext();
  const trending = state.filter((trend) => trend.isTrending === true);

  return (
    <Swiper
      style={{marginLeft: '18rem'}}
      spaceBetween={40}
       slidesPerView={'auto'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // 320: {
        //   spaceBetween: 5
        // },
        // // when window width is >= 480px
        // 480: {
        //   spaceBetween: 10
        // },

        // // when window width is >= 640px
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 40,
        // },
        // // when window width is >= 768px
        // 768: {
        //   width: 1400,
        //   slidesPerView: 3,
        //   spaceBetween: 40,
        // },
      }}
    >
      {trending.map((trend) => {
        return (
          <SwiperSlide>
            <SliderItem {...trend} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
