import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import musicStyles from '../styles/Music.module.sass';
import sectionStyle from '../styles/section.module.sass';

const Musica = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    gsap.from('.music', {
      y: '-50%',
      opacity: 0,
      duration: 2,
      stagger:0.3,
      delay:1,
      ease: Power4.easeOut,
    });
  }, [])

  return (
    <div
      className={`${musicStyles.section} ${
        theme.color === 'dark'
          ? musicStyles.sectionDark
          : musicStyles.sectionLight
      } container d-flex flex-column align-items-center mb-5 py-4`}
    >
      <div
      >
        <h1
          className={`${musicStyles.titleShadow} ${sectionStyle.satisfy} music display-3 mb-4 text-center`}
        >
          Chilaquiles & chill
        </h1>
      </div>
      <div
        className="w-100 d-flex justify-content-center"
      >
        <iframe
          className={`music ${musicStyles.playlist} ${
            theme.color === 'dark'
              ? musicStyles.playlistDark
              : musicStyles.playlistLight
          }`}
          src={`https://open.spotify.com/embed/playlist/0HRVVqwVunxtl3j2zZCSY7?utm_source=generator${
            theme.color === 'dark' ? '&theme=0' : ''
          }`}
          width="80%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <h3 className={`${musicStyles.titleShadow} ${sectionStyle.satisfy} music display-3 my-4 text-center`}>
        Música para saborear
      </h3>
      <iframe
        className={`music ${musicStyles.playlist} ${
          theme.color === 'dark'
            ? musicStyles.playlistDark
            : musicStyles.playlistLight
        }`}
        src={`https://open.spotify.com/embed/playlist/2482n56cwA5o7hp2apT6Xb?utm_source=generator${
          theme.color === 'dark' ? '&theme=0' : ''
        }`}
        width="80%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Musica;
