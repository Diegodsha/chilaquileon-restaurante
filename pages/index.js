import Head from 'next/head';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import backStyle from '../styles/background.module.css';
import sectionStyle from '../styles/section.module.sass';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Sauce from '../components/Sauce';
import { useEffect } from 'react';

// const myLoader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

export default function Home() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.dish', {
      scrollTrigger: {
        trigger: '.dish',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      y: '-90%',
      opacity: 0,
      duration: 2,
      ease: 'elastic',
      stagger: 0.5,
    });

    gsap.from('#instalations', {
      scrollTrigger: {
        trigger: '#instalations',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      x: '-30%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.soloChilaquiles', {
      scrollTrigger: {
        trigger: '.soloChilaquiles',
        start: 'bottom bottom',
        toggleActions: 'restart none none none',
      },
      x: '-30%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.soloChilaquilesImg1', {
      scrollTrigger: {
        trigger: '.soloChilaquilesImg1',
        start: 'top 70%',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.soloChilaquilesImgText', {
      scrollTrigger: {
        trigger: '.soloChilaquilesImgText',
        start: 'top 70%',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.hambre', {
      scrollTrigger: {
        trigger: '.hambre',
        start: 'bottom bottom',
        toggleActions: 'restart none none none',
      },
      x: '-30%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.about', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        toggleActions: 'restart none none none',
      },
      x: '-30%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.aboutChimiquil', {
      scrollTrigger: {
        trigger: '.aboutChimiquil',
        start: 'top center',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      stagger: 0.4,
      ease: Power4.easeOut,
    });

    gsap.from('.aboutTorta', {
      scrollTrigger: {
        trigger: '.aboutTorta',
        start: 'top center',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.aboutSarten', {
      scrollTrigger: {
        trigger: '.aboutSarten',
        start: 'top center',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.sauce', {
      scrollTrigger: {
        trigger: '.sauce',
        start: 'bottom bottom',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      ease: Power4.easeOut,
    });

    gsap.from('.sauce1', {
      scrollTrigger: {
        trigger: '.sauce1',
        start: 'bottom bottom',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      ease: Power4.easeOut,
    });
    gsap.from('.sauce2', {
      scrollTrigger: {
        trigger: '.sauce2',
        start: 'bottom bottom',
        toggleActions: 'restart none none none',
      },
      y: '50%',
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      ease: Power4.easeOut,
    });

    gsap.from('.encuentranos', {
      scrollTrigger: {
        trigger: '.encuentranos',
        start: 'bottom bottom',
        toggleActions: 'restart none none none',
      },
      x: '-30%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.mapVideo', {
      scrollTrigger: {
        trigger: '.mapVideo',
        start: 'top center',
        toggleActions: 'restart none none none',
      },
      y: '-50%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from('.map', {
      scrollTrigger: {
        trigger: '.map',
        start: 'top 60%',
        toggleActions: 'restart none none none',
      },
      y: '-30%',
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <div className={` ${backStyle.index}  container-fluid px-2`}>
      <Head>
        <title>Chilaquileón</title>
      </Head>
      <header>
        <Carousel />
      </header>
      <main>
        <section className="container-fluid intro text-center">
          <div className="my-4">
            <Image
              // loader={myLoader}

              src="/images/logo-chilaquileon.png"
              alt="chilaquileon-logo"
              width={390}
              height={180}
            />
          </div>
          <p
            className={`${sectionStyle.satisfy} ${sectionStyle.titleShadow} display-6 fw-bold mb-5`}
          >
            {' '}
            Chilaquiles hechos con amor
          </p>
          <div className="row justify-content-center my-5">
            <div className="col-6 col-md-4">
              <div
                className={`dish dish1 ${sectionStyle.ts} ${
                  theme.color === 'dark'
                    ? sectionStyle.shadowDark
                    : sectionStyle.shadowLight
                }`}
              >
                <Image
                  // loader={myLoader}
                  priority
                  src="/images/img8.jpg"
                  width={550}
                  height={450}
                  // layout='fill'
                  className={`${sectionStyle.notOnly} dishImg`}
                  alt="platillo"
                />
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div
                className={`dish dish2 ${sectionStyle.ts} ${
                  theme.color === 'dark'
                    ? sectionStyle.shadowDark
                    : sectionStyle.shadowLight
                }`}
              >
                {/* <span className='position-absolute'>Mollequil</span> */}
                <Image
                  // loader={myLoader}
                  priority
                  src="/images/img10.jpg"
                  width={550}
                  height={450}
                  // layout='fill'
                  className={`${sectionStyle.notOnly} dishImg`}
                  alt="platillo"
                />
              </div>
            </div>
            <div className="col-6 col-md-4 mt-3 mt-md-0">
              <div
                className={`dish dish3 ${sectionStyle.ts} ${
                  theme.color === 'dark'
                    ? sectionStyle.shadowDark
                    : sectionStyle.shadowLight
                }`}
              >
                <Image
                  // loader={myLoader}
                  priority
                  src="/images/sartenazo.jpg"
                  width={550}
                  height={450}
                  // layout='fill'
                  className={`${sectionStyle.notOnly} dishImg`}
                  alt="platillo"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="instalations"
          className={`${sectionStyle.ìnstalations} ${
            theme.color === 'dark'
              ? sectionStyle.instalationsDark
              : sectionStyle.instalationsLight
          } container-fluid py-5`}
        >
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Image
                // loader={myLoader}
                width={50}
                height={50}
                className="dog-icon"
                src="https://img.icons8.com/pastel-glyph/50/000000/dog--v4.png"
                alt="dog-icon"
              />
              <h3 className={`${sectionStyle.satisfy}`}>Pet Friendly</h3>
              <p>
                Ven y disfruta de tu desayuno junto a tu compañero peludo, no te
                preocupes, también puedes traer a tu pareja.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 my-4 my-sm-0">
              <Image
                // loader={myLoader}
                width={50}
                height={50}
                className="virus-icon"
                src="https://img.icons8.com/metro/50/000000/virus.png"
                alt="virus-icon"
              />
              <h3 className={`${sectionStyle.satisfy}`}>
                Instalaciones sanitizadas
              </h3>
              <p>
                Nos preocupamos por tu bienestar, nuestro personal está
                capacitado para brindarte las condiciones de salubridad
                necesarias para que disfrutes tus chilaquiles sin ningúna
                preocupación.
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <Image
                // loader={myLoader}
                className="fam-icon"
                width={50}
                height={50}
                src="https://img.icons8.com/ios/64/000000/family--v1.png"
                alt="fam-icon"
              />
              <h3 className={`${sectionStyle.satisfy}`}>
                Ambiente familiar y tranquilo
              </h3>
              <p>
                Los chilaquiles fueron hechos para disfrutarse y Chilaquileón es
                el lugar indicado para saborearlos junto a tu familia y amigos.
              </p>
            </div>
          </div>
        </section>
        <section className="container-fluid article my-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2
                className={`${sectionStyle.titleShadow} ${sectionStyle.satisfy} my-5 display-2 soloChilaquiles`}
              >
                No somos solo chilaquiles
              </h2>
            </div>
            <div
              className={`${sectionStyle.ts} ${
                theme.color === 'dark'
                  ? sectionStyle.shadowDark
                  : sectionStyle.shadowLight
              } col-12 col-md-6 text-center position-relative soloChilaquilesImg1`}
              // style={{ height:'450px'}}
            >
              <Image
                // loader={myLoader}
                priority
                src="/images/omelette.jpg"
                width={550}
                height={450}
                // layout='fill'
                className={`${sectionStyle.notOnly}`}
                alt="platillo"
              />
            </div>
            <div className="col-12 col-md-6 text-start d-flex align-items-center p-0 p-md-2 soloChilaquilesImgText">
              <p
                className={`${sectionStyle.ìnstalations} ${
                  theme.color === 'dark'
                    ? sectionStyle.instalationsDark
                    : sectionStyle.instalationsLight
                } p-4 mt-4 mt-0-md   ${sectionStyle.nunito}`}
              >
                {' '}
                Somos un restaurante mexicano con un enorme gusto (y tal vez
                ligera obsesión) por los chilaquiles, lo que nos hace destacar
                al lograr una combinación unica de platillos sabores y
                experiencias. En Chilaquileón nos esforzamos para llevar a tu
                mesa lo mejor del mundo de los chilaquiles con un toque de amor
                y ligero sason hogareño que hace que cada bocado genere esa
                sensación de satisfacción que solo la comida mexicana preparada
                con tanto cariño puede traer.
              </p>
            </div>
          </div>
        </section>
        <h2
          className={`${sectionStyle.titleShadow} ${sectionStyle.satisfy} my-5 display-2 text-center hambre`}
        >
          Tienes Hambre? Checa ésto
        </h2>
        <section
          id="about"
          className={`${sectionStyle.ìnstalations}  ${
            theme.color === 'dark'
              ? sectionStyle.instalationsDark
              : sectionStyle.instalationsLight
          } about container-fluid py-5 mb-5`}
        >
          <div className="row ">
            {/* column with 3 videos */}
            <div className="col-12 ">
              <div className="row ">
                <div className="col-12 text-center mb-4">
                  <h3
                    className={`${
                      theme.color === 'dark'
                        ? sectionStyle.dishNameDark
                        : sectionStyle.dishNameLight
                    } display-6 d-inline p-2 ${sectionStyle.nunito}`}
                  >
                    CHIMIQUIL
                  </h3>
                </div>
                <div className="col-12 col-sm-6 d-flex justify-content-center video video1 mb-4 ">
                  <div
                    className={`${sectionStyle.circle} ${
                      theme.color === 'dark'
                        ? sectionStyle.shadowDark
                        : sectionStyle.shadowLight
                    } aboutChimiquil`}
                  >
                    <Image
                      // loader={myLoader}
                      priority
                      src="/images/img4.jpg"
                      className="img-fluid"
                      // layout="fill"
                      width={400}
                      height={400}
                      alt="chimiquil rojo"
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex justify-content-center video video1 mb-4 ">
                  <div
                    className={`${sectionStyle.circle} ${
                      theme.color === 'dark'
                        ? sectionStyle.shadowDark
                        : sectionStyle.shadowLight
                    } aboutChimiquil`}
                  >
                    <Image
                      // loader={myLoader}
                      priority
                      src="/images/img2.jpg"
                      className="img-fluid"
                      // layout="fill"
                      width={400}
                      height={400}
                      alt="chimiquil verde"
                    />
                  </div>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                  <p>
                    Uno de nuestros platillos estrella: Delicioso burrito
                    gigante con doble tortilla de harina bañado en salsa casera
                    y relleno de chilaquiles preparados al mommento, acompañado
                    de cebolla, cilantro, rico queso ranchero y crema...
                    (acompañalo con tu carne preferida)
                  </p>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary sauce">
                      Salsa recomendada:
                    </span>
                    <div className="sauce">
                      <Sauce hotLevel={3} type="Chipotle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" w-75 mx-auto my-5" />
            <div className="col-12 mb-5">
              <div className="row ">
                <div className="col-12 text-center mb-4">
                  <h3
                    className={`${
                      theme.color === 'dark'
                        ? sectionStyle.dishNameDark
                        : sectionStyle.dishNameLight
                    } display-6 d-inline p-2`}
                  >
                    TORTA
                  </h3>
                </div>
                <div
                  className={`${sectionStyle.circle} ${
                    theme.color === 'dark'
                      ? sectionStyle.shadowDark
                      : sectionStyle.shadowLight
                  }  video video3 col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center my-4 aboutTorta`}
                >
                  <Image
                    // loader={myLoader}
                    priority
                    src="/images/img21.jpg"
                    className="img-fluid"
                    // layout="fill"
                    width={400}
                    height={400}
                    alt="..."
                  />
                </div>
                <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center align-items-center">
                  <p className="text-center text-md-start">
                    ¿Conoces la clasica torta de chilaquiles? Pues esta delicia
                    va más allá... te preguntaras, ¿Que la hace tan especial?
                    eso es algo que como buen mexicano no puedes dejar para
                    después, pidela, no te arrepentiras.
                  </p>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary sauce1">
                      Salsa recomendada:
                    </span>
                    <div className="sauce1">
                      <Sauce hotLevel={2} type="Verde" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className=" w-75 mx-auto my-5" />
            <div className="col-12 mb-5">
              <div className="row ">
                <div className="col-12 text-center mb-4">
                  <h3
                    className={`${
                      theme.color === 'dark'
                        ? sectionStyle.dishNameDark
                        : sectionStyle.dishNameLight
                    } display-6 d-inline p-2`}
                  >
                    SARTENAZO
                  </h3>
                </div>
                <div
                  className={`${sectionStyle.circle} ${
                    theme.color === 'dark'
                      ? sectionStyle.shadowDark
                      : sectionStyle.shadowLight
                  } video video2 col-12 col-md-6 order-1 d-flex justify-content-center my-4 aboutSarten`}
                >
                  <Image
                    // loader={myLoader}
                    priority
                    src="/images/img12.jpg"
                    className="img-fluid"
                    // layout="fill"
                    width={400}
                    height={400}
                    alt="..."
                  />
                </div>
                <div className="col-12 col-md-6 order-2 d-flex flex-column justify-content-center align-items-center">
                  <p className="text-center text-md-start">
                    ¿Sartenazo? ¿que es eso? ¿me van a pegar si lo pido? El
                    Sartenazo es una creación deliciosa que la familia de
                    chilaquileon pone a disposión de tu exigente paladar, no te
                    preocupes, no duele, solo pica. Sarten con orilla de
                    totopos, lleno de huevo revuelto a la mexicana combinado con
                    frijoles caseros y bañado en salsa, le agregamos queso
                    ranchero, cebolla y cilantro.
                  </p>
                  {/* <br /> <br /> */}
                  <div className="d-flex align-items-center">
                    <span className="text-secondary sauce2">
                      Salsa recomendada:
                    </span>
                    <div className="sauce2">
                      <Sauce hotLevel={5} type="Habanero" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navegacion-menu col-12 col-md-6 d-flex justify-content-around mt-5">
              <div className={`${sectionStyle.verMenu}`}>
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
            <div className="siguenos col-12 col-md-6 d-flex justify-content-center align-items-center mt-5  ">
              <p className="display-6"> Siguenos</p>{' '}
              <span className="mx-4">
                <a href="https://www.facebook.com/chilaquileon/">
                  <FacebookIcon
                    className={`${sectionStyle.mediaIcon} ${sectionStyle.face}`}
                  />
                </a>
              </span>{' '}
              <span>
                <a href="https://www.instagram.com/chilaquileon/?hl=en">
                  <InstagramIcon
                    className={`${sectionStyle.mediaIcon} ${sectionStyle.insta}`}
                  />
                </a>
              </span>
            </div>
          </div>
        </section>
        <section
          id="location"
          className={`${sectionStyle.location} container-fluid `}
        >
          <div className="row">
            <div className="findUs d-flex flex-column col-12 col-lg-6 d-flex align-items-center justify-content-center mb-5">
              <h3
                className={`${sectionStyle.titleShadow} display-3 mb-4 encuentranos`}
              >
                Encuentranos!!
              </h3>
              <video
                className="mapVideo"
                autoPlay
                loop
                style={{
                  maxWidth: '500px',
                  maxHeight: '450px',
                  borderRadius: '10px',
                }}
              >
                <source src="/videos/video2.mp4" />
              </video>
            </div>
            <div className="map col-12 col-lg-6 pe-0 d-flex align-items-center">
              <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.345903866533!2d-101.61712828574282!3d21.09877139076193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbddf952fdfb1%3A0x85d2c1d26bf57203!2sChilaquileon!5e0!3m2!1sen!2smx!4v1636490261140!5m2!1sen!2smx"
                width="600"
                height="450"
                style={{
                  border: 0,
                  borderRadius: '15px',
                  boxShadow: '2px 2px 2px gray',
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
