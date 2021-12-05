import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import { setDarkTheme, setLightTheme } from '../redux/actions';
import backStyle from '../styles/background.module.css';
import sectionStyle from '../styles/section.module.sass';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Sauce from '../components/Sauce';
import { useEffect } from 'react';

// import { motion } from 'framer-motion';

/* const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}; */

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

/*   const changeTheme = (e) => {
    const color = e.target.textContent;
    // const body = document.querySelector(body)
    // body.style ='padding: 1rem'
    console.log(body);
    color === 'light'
      ? dispatch(setDarkTheme('dark'))
      : dispatch(setLightTheme('ligth'));
  };
  <button onClick={(e) => changeTheme(e)}>
    {theme.color === 'dark' ? 'dark' : 'light'}
  </button>; */

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  var t1 = gsap.timeline();

    gsap.from(".dish", {
      scrollTrigger: {
        trigger: ".dish1",
        start: "top bottom",
        toggleActions: "restart none none none",
      },
      y: '-90%',
      opacity: 0,
      duration: 2,
      ease:'elastic' ,
      stagger: 0.6,
      
    });


    gsap.from("#instalations", {
      scrollTrigger: {
        trigger: "#instalations",
        start: "top 50%",
        toggleActions: "restart none none none",
      },
      x: "-30%",
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    gsap.from(".soloChilaquiles", {
    //   scrollTrigger: {
    //     trigger: ".soloChilaquiles",
    //     start: "bottom bottom",
    //     // toggleActions: "restart none none none",
    //   },
    //   x: "100%",
    //   opacity: 0,
    //   duration: 2,
    //   ease: Power4.easeOut,
    // });

    // gsap.from(".soloChilaquilesImg", {
    //   scrollTrigger: {
    //     trigger: ".soloChilaquilesImg",
    //     start: "top 50%",
    //     // toggleActions: "none none none none",
    //   },
    //   x: "100%",
    //   opacity: 0,
    //   duration: 2,
    //   ease: Power4.easeOut,
    //   stagger: 0.9,
    // });

    
  }, [])

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
              className={``}
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
                  priority
                  src="/images/img8.jpg"
                  width={550}
                  height={450}
                  // layout='fill'
                  className={`${sectionStyle.notOnly}`}
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
                  priority
                  src="/images/img10.jpg"
                  width={550}
                  height={450}
                  // layout='fill'
                  className={`${sectionStyle.notOnly}`}
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
                  priority
                  src="/images/sartenazo.jpg"
                  width={550}
                  height={450}
                  // layout='fill'
                  className={`${sectionStyle.notOnly}`}
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
              } col-12 col-md-6 text-center position-relative soloChilaquilesImg`}
              // style={{ height:'450px'}}
            >
              <Image
                priority
                src="/images/omelette.jpg"
                width={550}
                height={450}
                // layout='fill'
                className={`${sectionStyle.notOnly}`}
                alt="platillo"
              />
            </div>
            <div className="col-12 col-md-6 text-start d-flex align-items-center p-0 p-md-2">
              <p
                className={`${sectionStyle.ìnstalations} ${
                  theme.color === 'dark'
                    ? sectionStyle.instalationsDark
                    : sectionStyle.instalationsLight
                } p-4 mt-4 mt-0-md  soloChilaquilesImg ${sectionStyle.nunito}`}
              >
                {' '}
                Chilaquileón, como su nombre lo dice, es un restaurante
                mexicano, lleno de delicias y experiencias en cada bocado,
                nuestra especialidad son los chilaquiles, suena un platillo
                sencillo, ¿no? Pero que eso no te engañe, porque no, no son
                “solo chilaquiles”, nuestra variedad de salsas caseras, totopos,
                nuestras varias presentaciones de platillos y nuestra
                preparación, te encantarán.
              </p>
            </div>
          </div>
        </section>
        <h2
          className={`${sectionStyle.titleShadow} ${sectionStyle.satisfy} my-5 display-2 text-center`}
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
                    }`}
                  >
                    <Image
                      priority
                      src="/images/img4.jpg"
                      className="img-fluid"
                      // layout="fill"
                      width={400}
                      height={400}
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 d-flex justify-content-center video video1 mb-4 ">
                  <div
                    className={`${sectionStyle.circle} ${
                      theme.color === 'dark'
                        ? sectionStyle.shadowDark
                        : sectionStyle.shadowLight
                    }`}
                  >
                    <Image
                      priority
                      src="/images/img2.jpg"
                      className="img-fluid"
                      // layout="fill"
                      width={400}
                      height={400}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                  <p>
                    Chilaquileón, como su nombre lo dice, es un restaurante
                    mexicano, lleno de delicias y experiencias en cada bocado,
                    nuestra especialidad son los chilaquiles, suena un platillo
                    sencillo, ¿no? Pero que eso no te engañe, porque no, no son
                  </p>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">Salsa recomendada:</span>
                    <Sauce hotLevel={3} type="Chipotle" />
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
                  }  video video3 col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center my-4`}
                >
                  <Image
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
                    Chilaquileón, como su nombre lo dice, es un restaurante
                    mexicano, lleno de delicias y experiencias en cada bocado,
                    nuestra especialidad son los chilaquiles, suena un platillo
                    sencillo, ¿no? Pero que eso no te engañe, porque no, no son
                  </p>
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">Salsa recomendada:</span>
                    <Sauce hotLevel={2} type="Verde" />
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
                  } video video2 col-12 col-md-6 order-1 d-flex justify-content-center my-4`}
                >
                  <Image
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
                    Chilaquileón, como su nombre lo dice, es un restaurante
                    mexicano, lleno de delicias y experiencias en cada bocado,
                    nuestra especialidad son los chilaquiles, suena un platillo
                    sencillo, ¿no? Pero que eso no te engañe, porque no, no son{' '}
                  </p>
                  {/* <br /> <br /> */}
                  <div className="d-flex align-items-center">
                    <span className="text-secondary">Salsa recomendada:</span>
                    <Sauce hotLevel={5} type="Habanero" />
                  </div>
                </div>
              </div>
            </div>
            <div className="navegacion-menu col-12 col-md-6 d-flex justify-content-around mt-5">
              <div className="verMenu">
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
              <p className="display-6"> Siguenos :)</p>{' '}
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
        <section id="location" className={`${sectionStyle.location} container-fluid `}>
          <div className="row">
            <div className="findUs d-flex flex-column col-12 col-lg-6 d-flex align-items-center justify-content-center mb-5">
              <h3 className={`${sectionStyle.titleShadow} display-3 mb-4`}>
                Encuentranos!!
              </h3>
              <video
                autoPlay
                loop
                style={{ maxWidth: '500px', maxHeight: '450px', borderRadius: '10px'}}
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
