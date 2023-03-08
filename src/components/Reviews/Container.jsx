import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Container() {
  const [swiper, setSwiper] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        'https://randomuser.me/api/?inc=picture,name&results=3',
      );
      const { results } = await data.json();

      setData(results);
    };

    getData();
  }, []);

  if (!data) {
    return 'Loading';
  }

  return (
    <div>
      <Swiper
        loop
        grabCursor
        centeredSlides
        centeredSlidesBounds
        slidesPerView={2}
        spaceBetween={50}
        onSwiper={(newSwiper) => !swiper && setSwiper(newSwiper)}
      >
        <button type="button" onClick={() => swiper?.slidePrev()}>
          {'<'}
        </button>
        <button type="button" onClick={() => swiper?.slideNext()}>
          {'>'}
        </button>

        {data.map(({ name: { first } }) => (
          <SwiperSlide key={first} style={{ fontSize: 20, color: 'red' }}>
            {first}
          </SwiperSlide>
        ))}
      </Swiper>
      <img src="https://randomuser.me/api/portraits/men/89.jpg" />
    </div>
  );
}
