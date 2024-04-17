import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '@/assets/icons/icon_arrow__left.svg?react';
import RightArrow from '@/assets/icons/icon_arrow_right.svg?react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import SwiperCore from 'swiper';
// import Navigation from 'swiper';
import 'swiper/swiper-bundle.css';

// SwiperCore.use([Navigation]);

type ControlsProps = {
  swiperRef: any;
};

const StyledControls = styled.div`
  display: flex;
  gap: 22px;

  @media (max-width: 767px) {
    gap: 8px;
  }
`;

const Button = styled.button`
  padding: 15px 40px;
  background-color: var(--colors-tertiary);
  border-radius: 20px;

  @media (max-width: 767px) {
    padding: 8px 12px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Controls: FC<ControlsProps> = ({ swiperRef }) => {
  const swiper = swiperRef.current.swiper;

  const [isStart, setIsStart] = useState<boolean>(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState<boolean>(swiper.isEnd);
  useEffect(() => {
    const onSlideChange = () => {
      setIsStart(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', onSlideChange);

    // Unsubscribe on component unmount
    return () => {
      swiper.off('slideChange', onSlideChange);
    };
  }, [swiper]);

  return (
    <StyledControls>
      <Button onClick={() => swiper.slidePrev()} disabled={isStart}>
        <LeftArrow fill="var(--colors-helper-blue-3)" />
      </Button>
      <Button onClick={() => swiper.slideNext()} disabled={isEnd}>
        <RightArrow />
      </Button>
    </StyledControls>
  );
};

export default Controls;
