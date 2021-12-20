import backStyle from '../styles/background.module.css';
import Image from 'next/image';
import musicStyles from '../styles/Music.module.sass';
import { useSelector } from 'react-redux';
import sectionStyle from '../styles/section.module.sass';
import Sauce from '../components/Sauce';
import { useEffect } from 'react';

// const myLoader = ({ src, width, quality }) => {
//   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

const Menu = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    gsap.from('.sauces', {
      x: '-70%',
      duration: 1,
    });

    gsap.from('.indeciso', {
      scrollTrigger: {
        trigger: '.indeciso',
        start: 'top center',
        toggleActions: 'play none none none',
      },
      x: '-60%',
      opacity: 0,
      duration: 2,
      ease: 'elastic',
      stagger: 0.5,
    });
  }, []);

  return (
    <div
      className={` ${musicStyles.section} ${
        theme.color === 'dark'
          ? musicStyles.sectionDark
          : musicStyles.sectionLight
      } container d-flex flex-column align-items-center mb-5 py-4 position-relative g-0 overflow-hidden`}
    >
      <div className="row d-flex flex-column align-items-center w-100">
        <div className="col-12 position-relative d-flex flex-column text-center">
          <h1
            className={`${sectionStyle.satisfy} ${musicStyles.titleShadow} display-5 mb-4`}
          >
            Haz llegado a la parte más dificil, elegir el platillo
          </h1>
          <p
            className={`${sectionStyle.menuText} ${sectionStyle.satisfy} fw-bold`}
          >
            Nosotros sabemos que es muy complicado elegir un solo platillo, no
            te limites... elige 3
          </p>
        </div>
        <div className={`${sectionStyle.separator} col-12 position-relative`}>
          <div
            className={`position-absolute sauces ${sectionStyle.sauceGroup} ${
              theme.color === 'dark'
                ? sectionStyle.sauceGroupDark
                : sectionStyle.sauceGroupLight
            }  ${
              theme.color === 'dark'
                ? sectionStyle.sauceBorderDark
                : sectionStyle.sauceBorderLight
            }`}
          >
            <Sauce hotLevel={1} type="4 Chiles" border="no" />
            <Sauce hotLevel={2} type="Roja" border="no" />
            <Sauce hotLevel={2} type="Verde" border="no" />
            <Sauce hotLevel={2} type="Suiza" border="no" />
            <Sauce hotLevel={3} type="Chipotle" border="no" />
            <Sauce hotLevel={5} type="Habanero" border="no" />
          </div>
        </div>
        {/* <div  /> */}
        {/* <div className="position-relative w-100 "> */}
        <div
          className={` ${sectionStyle.notOnly} ${sectionStyle.shadowDark} ${sectionStyle.menuImg} col-12 col-md-11 col-lg-10 position-relative `}
        >
          <Image
            // loader={myLoader}
            priority
            src="/images/menu_2.jpg"
            // width={350}
            // height={750}
            layout="fill"
            alt="menu2"
          />
        </div>
        {/* </div> */}
        <p
          className={`${sectionStyle.menuText} ${sectionStyle.satisfy} text-center col-12 col-md-11 col-lg-10 mt-5 fw-bold indeciso`}
        >
          ¿Sigues indeciso?
        </p>
        <p
          className={`${sectionStyle.menuText} ${sectionStyle.satisfy} text-center col-12 col-md-11 col-lg-10 fw-bold indeciso`}
        >
          ¿Todo se te antoja?
        </p>
        <p
          className={`${sectionStyle.menuText} ${sectionStyle.satisfy} text-center col-12 col-md-11 col-lg-10 mb-5 fw-bold indeciso`}
        >
          No te preocupes, la respuesta está en tu corazón... (claro, y en
          cuanta hambre tengas ) o pide una recomendación nuestro personal está
          altamente capacitado para detectar el platillo indicado para ti.
        </p>
        {/* <p className={`${sectionStyle.menuText} my-5`}>
          {' '}
          Pide una recomendación...
        </p> */}
        <div
          className={`${sectionStyle.notOnly} ${sectionStyle.shadowDark} ${sectionStyle.menuImg} col-12 col-md-11 col-lg-10 position-relative `}
        >
          <Image
            // loader={myLoader}
            priority
            src="/images/menu_1.jpg"
            // width={350}
            // height={750}
            layout="fill"
            alt="menu1"
          />
        </div>
        <h2 className={`${sectionStyle.satisfy} display-5 text-center my-5`}>
          ¿Estás listo para ordenar?
        </h2>
      </div>
    </div>
  );
};

export default Menu;
