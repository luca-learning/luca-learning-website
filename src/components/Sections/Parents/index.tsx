import React from 'react';
import Slider from "react-slick";

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import { Container, SliderContainer } from './styles';

const Parents = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <MdNavigateNext color="#000" size={48} />,
    prevArrow: <MdNavigateBefore color="#000" size={48} />
  };

  return (
    <Container>
      <section id="parent">
        <div className="title">
          <h1>Vea lo que piensan los padres de nuestros alumnos</h1>
        </div>
        <SliderContainer>
          <Slider {...settings}>
            <div className="parent-card">
              <img src="https://images.generated.photos/L1i3ads_voW3Z3dsYO3dLqZWjdBvExoes6n4IA889Hw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3NTQwNDAuanBn.jpg" alt="Parent" />
              <p>Lorem ipsum sit lacinia mollis pretium urna proin, eu purus tempor placerat mauris elit, neque ligula elementum tempus molestie lobortis. </p>
            </div>
            <div className="parent-card">
            <img src="https://images.generated.photos/ph9sAk_rCv8Q9LD73scy69bw8GRG7Upo3T14JqrnqrA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwOTMzMDYuanBn.jpg" alt="Parent" />
              <p>Lorem ipsum accumsan enim aenean sem vehicula ut lectus, scelerisque proin litora sem quisque odio. </p>
            </div>
            <div className="parent-card">
            <img src="https://images.generated.photos/UwsBYfox5GebeDg4exhGBbmHAS45Zv3bhIpLv8NR1Ug/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNTIxMzcuanBn.jpg" alt="Parent" />
              <p>Lorem ipsum sit lacinia mollis pretium urna proin, eu purus tempor placerat mauris elit, neque ligula elementum tempus molestie lobortis. </p>
            </div>
            <div className="parent-card">
            <img src="https://images.generated.photos/AWNcTRffgYvdm5bI2dIyE_kgG_9k95pL-iq-GV-mqlI/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDkxNjIuanBn.jpg" alt="Parent" />
              <p>Lorem ipsum sit lacinia mollis pretium urna proin, eu purus tempor placerat mauris elit, neque ligula elementum tempus molestie lobortis. </p>
            </div>
            <div className="parent-card">
            <img src="https://images.generated.photos/5HMnbBq8VTWqphYHvJvX2pdd97QMontMD7a4w21ZVAQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NzUxNzEuanBn.jpg" alt="Parent" />
              <p>Lorem ipsum sit lacinia mollis pretium urna proin, eu purus tempor placerat mauris elit, neque ligula elementum tempus molestie lobortis. </p>
            </div>
          </Slider>
        </SliderContainer>
      </section>
    </Container>
  )
}

export default Parents