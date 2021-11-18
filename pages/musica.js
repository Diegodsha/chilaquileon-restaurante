import { motion } from 'framer-motion';
import Link from 'next/link';

//animate: defines animation
//initial: defines initial state of animation or starting potin
// exit: defines animation when exits


const musica = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="inital" animate="animate">
      <div className="col-12 col-md-6 col-lg-2">dddddddd</div>
      <div className="col-12 col-md-6 col-lg-2">fffffff</div>
      <div className="col-12 col-md-6 col-lg-2">gggggggg</div>
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
      <h1 className="text-danger display-2 ">musica</h1>
      </motion.div>
     
      <iframe
        className=".spoti"
        src="https://open.spotify.com/embed/playlist/0HRVVqwVunxtl3j2zZCSY7"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <style jsx>
        {`
          .title1 {
            background-color: 'red';
          }
        `}
      </style>
    </motion.div>
  );
};

export default musica;
