import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import { setDarkTheme, setLightTheme } from '../redux/actions';
import backStyle from '../styles/background.module.css';
import sectionStyle from '../styles/section.module.sass';

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
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  const changeTheme = (e)=>{
    const color = e.target.textContent
    color === 'light' ? dispatch(setDarkTheme('dark')) :
    dispatch(setLightTheme('ligth'))
  }
<button onClick={(e)=>changeTheme(e)}>{theme.color === 'dark' ?'dark' : 'light'}</button>
  return (
    <div className={` ${backStyle.index}  container-fluid px-2`}>
      <Head>
        <title>Chilaquileón</title>
      </Head>
      <header>
        <Carousel />
      </header>
      <main>
        <section className="container-fluid article my-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className={`my-5 display-2`}>No somos solo chilaquiles</h2>
              
            </div>
            <div className={`${sectionStyle.ts} col-12 col-md-6 text-center position-relative`} 
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
            <div className="col-12 col-md-6 text-start d-flex align-items-center">
              <p className={`${sectionStyle.ìnstalations} p-4`}>
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
        <section
          id="instalations"
          className={`${sectionStyle.ìnstalations} container-fluid`}
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
              <h3>Pet Friendly</h3>
              <p>
                Ven y disfruta de tu desayuno junto a tu compañero peludo, no te
                preocupes, también puedes traer a tu pareja.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <Image
                width={50}
                height={50}
                className="virus-icon"
                src="https://img.icons8.com/metro/50/000000/virus.png"
                alt="virus-icon"
              />
              <h3>Instalaciones sanitizadas</h3>
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
              <h3>Ambiente familiar y tranquilo</h3>
              <p>
                Los chilaquiles fueron hechos para disfrutarse y Chilaquileón es
                el lugar indicado para saborearlos junto a tu familia y amigos.
              </p>
            </div>
          </div>
        </section>
        <section className="container-fluid intro">
          <h2>titulo de seccion</h2>
          <p>logo grande arriba, chilaquiles hechos on amor</p>
        </section>
        <section id="about" className="about container-fluid p-0">
          <div className="video video1">video1</div>
          <div className="video video2">video2</div>
          <div className="video video3">video3</div>
          <div className="video video4">video4</div>
        </section>
        <section id="location" className="location container-fluid ">
          <div className="row">
            <div className="findUs col-12 col-md-6 d-flex align-items-center justify-content-center">
              <h3>Encuentranos!!</h3>
            </div>
            <div className="map col-12 col-md-6 pe-0">
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
