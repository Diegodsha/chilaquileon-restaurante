import usStyles from '../styles/us.module.sass';
import sectionStyle from '../styles/section.module.sass';
import { useSelector } from 'react-redux';

const Nosotros = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`${usStyles.section} row`}>
      <h1 className={`${usStyles.satisfy} text-center`}>
        Hola! Solo queremos decirte
      </h1>
      <h2 className={`${usStyles.satisfy} text-center my-4`}>GRACIAS!!</h2>
      <h3 className={`${usStyles.satisfy} text-center mb-5`}>
        Por formar parte de nosotros y darnos la oportunidad de formar parte de
        ti con unos ricos chilaquiles
      </h3>
      <div className={` col-12 col-lg-3 order-1 mt-5 mt-lg-0 justify-content-center d-flex align-items-center`}>
        {' '}
        <video
          className={`${usStyles.shadow} w-lg-100`}
          autoPlay
          loop
          style={{
            maxWidth: '500px',
            maxHeight: '450px',
            borderRadius: '10px',
          }}
        >
          <source src="/videos/video1.mp4" />
        </video>
      </div>
      <div className="col-12 col-lg-6 order-2">
        <div className="row d-flex flex-column align-items-center">
          <div
            className={`${sectionStyle.ìnstalations}  ${
              theme.color === 'dark'
                ? sectionStyle.instalationsDark
                : sectionStyle.instalationsLight
            } col-12   text-center my-5 my-lg-0 p-4`}
          >
            En Chilaquileón todo está hecho con amor para ti, no somos solo
            chilaquiles, somos esfuerzo, trabajo en equipo y un amor enorme por
            cada uno de nuestros platillos…Y nos encanta que seas parte de
            nosotros.
          </div>
          <div
            className={`${sectionStyle.ìnstalations}  ${
              theme.color === 'dark'
                ? sectionStyle.instalationsDark
                : sectionStyle.instalationsLight
            } col-9  text-center my-5 p-4`}
          >
            Somos el lugar perfecto para comer delicioso en compañía de tus
            personas favoritas, un lugar para relajarse, tomar un cafecito (el
            café de olla es delicioso) y compartir momentos y experiencias
            llenas de alegría y buena onda.
          </div>
          <div
            className={`${sectionStyle.ìnstalations}  ${
              theme.color === 'dark'
                ? sectionStyle.instalationsDark
                : sectionStyle.instalationsLight
            } col-12   text-center my-5 my-lg-0 p-4`}
          >
            Nuestros platillos van desde los riquísimos y tradicionales
            chilaquiles, hasta sopes de chilaquiles, torta de chilaquiles,
            quesadilla de chilaquiles, etc, etc… ¡Sí! quesadillaaa y soopeess de
            chilaquiles, y son una delicia.
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-3 order-3 justify-content-center d-flex align-items-center">
        {' '}
        <video
          className={`${usStyles.shadow} w-lg-100`}
          autoPlay
          loop
          style={{
            maxWidth: '500px',
            maxHeight: '450px',
            borderRadius: '10px',
          }}
        >
          <source src="/videos/video3.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Nosotros;
