import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import carouselStyle from '../styles/Carrousel.module.sass';
import sectionStyle from '../styles/section.module.sass'

const Carousel = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    gsap.from(
      '.carousel',
      {
        y: '200%',
        delay: 1,
        opacity: 0,
        duration: 3,
        ease: Power4.easeOut,
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

          <div
            className={`${carouselStyle.carouselImg} ${carouselStyle.carouselImg1}`}
          />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">

          <div
            className={`${carouselStyle.carouselImg} ${carouselStyle.carouselImg2}`}
          />
          <div className="carousel-caption d-md-block">
          </div>
        </div>
        <div className="carousel-item">

          <div
            className={`${carouselStyle.carouselImg} ${carouselStyle.carouselImg3}`}
          />
          <div className="carousel-caption d-md-block">
          <div className={`${sectionStyle.verMenu} m-5`}>
                <Link href="/menu">
                  <a
                    className={`${
                      theme.color === 'dark'
                        ? sectionStyle.menuBtnDark
                        : sectionStyle.menuBtnLight
                    } btn fw-bold`}
                  >
                    Ver Menú Completo
                  </a>
                </Link>
              </div>
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
