import 'swiper/css';
import { useGlobalContext } from '../../store/context';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './SliderItem';

const Slider = () => {
  const { state, term } = useGlobalContext();
  const trending = state.filter((trend) => trend.isTrending === true);

  return (
    <>
      {term.length === 0 && (
        <Swiper
          style={{ marginLeft: '18rem' }}
          spaceBetween={40}
          slidesPerView={'auto'}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {trending.map((trend) => {
            return (
              <SwiperSlide key={trend.id}>
                <SliderItem {...trend} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};
export default Slider;
