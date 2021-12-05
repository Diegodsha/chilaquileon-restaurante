import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import carouselStyle from '../styles/Carrousel.module.sass';

const Carousel = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // var t1 = gsap.timeline();
    // nav progress

    gsap.from(
      '.carousel',
      {
        y: '200%',
        delay: 1,
        opacity: 0,
        duration: 3,
        ease: Power4.easeOut, //'elastic'
      },
      '-=.7'
    );
  }, []);

  return (
    <div
      id="carouselDark"
      className={`${carouselStyle.car} carousel ${theme.color === 'dark' ? 'carousel-dark' : 'carousel-light'} slide`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div className={`${carouselStyle.inner} carousel-inner`}>
        <div className="carousel-item active" data-bs-interval="10000">
          {/* <Image
          priority
            src="/images/sartenazo.jpg"
            width={1530}
            height={532}
            className="d-block w-100"
            alt="..."
          /> */}
          <div
            className={`${carouselStyle.carouselImg} ${carouselStyle.carouselImg1}`}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className={carouselStyle.textRed}>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          {/* <Image
            priority
            src="/images/table.jpg"
            width={600}
            height={400}
            className="d-block w-100"
            alt="..."
          /> */}
          <div
            className={`${carouselStyle.carouselImg} ${carouselStyle.carouselImg2}`}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <Image
            priority
            src="/images/tradicionales.jpg"
            width={600}
            height={400}
            className="d-block w-100"
            alt="..."
          /> */}
          <div
            className={`${carouselStyle.carouselImg} ${carouselStyle.carouselImg3}`}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
