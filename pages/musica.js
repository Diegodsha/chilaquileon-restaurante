import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import musicStyles from '../styles/Music.module.sass';
import sectionStyle from '../styles/section.module.sass';

//animate: defines animation
//initial: defines initial state of animation or starting potin
// exit: defines animation when exits

const Musica = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="inital"
      animate="animate"
      variants={{
        initial: {
          scale: 0.8,
          opacity: 0,
        },
        animate: {
          scale: 1,
          opacity: 1,
          // transition: {
          //   delay: 0.4,
          // },
        },
      }}
      className={`${musicStyles.section} ${
        theme.color === 'dark'
          ? musicStyles.sectionDark
          : musicStyles.sectionLight
      } container d-flex flex-column align-items-center mb-5 py-4`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <h1
          className={`${musicStyles.titleShadow} ${sectionStyle.satisfy} display-3 mb-4 text-center`}
        >
          Chilaquiles & chill
        </h1>
      </motion.div>
      <motion.div
        className="w-100 d-flex justify-content-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
            translateX: -500,
          },
          visible: {
            scale: 1,
            opacity: 1,

            translateX: 0,
            transition: {
              delay: 2,
            },
          },
        }}
      >
        <iframe
          className={`${musicStyles.playlist} ${
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
      </motion.div>
      <h3 className={`${musicStyles.titleShadow} ${sectionStyle.satisfy}  display-3 my-4 text-center`}>
        Música para saborear
      </h3>
      <iframe
        className={`${musicStyles.playlist} ${
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
    </motion.div>
  );
};

export default Musica;
