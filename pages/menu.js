import backStyle from '../styles/background.module.css';
import Image from 'next/image';
import musicStyles from '../styles/Music.module.sass';
import { useSelector } from 'react-redux';
import sectionStyle from '../styles/section.module.sass';
import Sauce from '../components/Sauce';

const Menu = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={` ${musicStyles.section} ${
        theme.color === 'dark'
          ? musicStyles.sectionDark
          : musicStyles.sectionLight
      } container d-flex flex-column align-items-center mb-5 py-4 position-relative`}
    >
      <div className="row d-flex flex-column align-items-center">
        <div className="col-12 position-relative d-flex flex-column text-center">
          <h1 className={`${sectionStyle.satisfy} ${musicStyles.titleShadow} mb-4`}>
            Haz llegado a la parte más dificil, elegir el platillo
          </h1>
          <p className='fw-bold'>
            Nosotros sabemos que es muy complicado elegir un solo platillo, no
            te limites... elige 3
          </p>
        </div>
        <div
          className={`position-absolute ${sectionStyle.sauceGroup} ${
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
        <div className={`${sectionStyle.separator}`}/>
        {/* <div className="position-relative w-100 "> */}
          <div
            className={`${sectionStyle.ts} ${sectionStyle.shadowDark} ${sectionStyle.menuImg} position-relative w-100`}
          >
            <Image
              priority
              src="/images/menu_2.jpg"
              // width={350}
              // height={750}
              layout="fill"
              className={`${sectionStyle.notOnly}`}
              alt="menu2"
            />
          </div>
        {/* </div> */}
        <p className='my-5'>
          {' '}
          ¿Sigues indeciso y/o todo se te antoja? no te preocupes hoy prueba un
          platillo y mañana regresas por otro
        </p>
        <div
            className={`${sectionStyle.ts} ${sectionStyle.shadowDark} ${sectionStyle.menuImg} position-relative w-100`}
          >
            <Image
              priority
              src="/images/menu_1.jpg"
              // width={350}
              // height={750}
              layout="fill"
              className={`${sectionStyle.notOnly}`}
              alt="menu1"
            />
          </div>
        <h2 className={`${sectionStyle.satisfy} text-center my-4`}>¿Estas listo para ordenar?</h2>
      </div>
    </div>
  );
};

export default Menu;
