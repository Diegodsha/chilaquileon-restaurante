import Image from 'next/image';
import Head from 'next/head';
import galeryStyles from '../styles/galery.module.sass';
import { useEffect } from 'react';

const Galeria = () => {

  useEffect(() => {
    gsap.from('.gridItem', {
      x: '-50%',
      opacity: 0,
      duration: 2,
      stagger:0.3,
      delay:2,
      ease: Power4.easeOut,
    });
  }, [])

  return (
    <>
      <Head>
        <title>Galeria</title>
      </Head>
      <div
        className={`${galeryStyles.gridContainer} row justify-content-center`}
      >
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem1} col-4 col-md-4 position-relative gridItem image1`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem2} col-4 col-md-4 position-relative gridItem image2`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem3} col-4 col-md-4 position-relative gridItem image3`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem4} col-4 col-md-4 position-relative gridItem image4`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem5} col-4 col-md-4 position-relative gridItem image5`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem6} col-4 col-md-4 position-relative gridItem image6`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem7} col-4 col-md-4 position-relative gridItem image 7`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem8} col-4 col-md-4 position-relative gridItem image8`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem9} col-4 col-md-4 position-relative gridItem image9`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem10} col-4 col-md-4 position-relative gridItem image10`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem11} col-4 col-md-4 position-relative gridItem image11`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem12} col-4 col-md-4 position-relative gridItem image12`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem13} col-4 col-md-4 position-relative gridItem image13`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem14} col-4 col-md-4 position-relative gridItem image14`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem15} col-4 col-md-4 position-relative gridItem image15`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem16} col-4 col-md-4 position-relative gridItem image16`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem17} col-4 col-md-4 position-relative gridItem image17`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem18} col-4 col-md-4 position-relative gridItem image18`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem19} col-4 col-md-4 position-relative gridItem image19`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem20} col-4 col-md-4 position-relative gridItem image20`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem21} col-4 col-md-4 position-relative gridItem image21`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem22} col-4 col-md-4 position-relative gridItem image22`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem23} col-4 col-md-4 position-relative gridItem image23`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem24} col-4 col-md-4 position-relative gridItem image24`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem25} col-4 col-md-4 position-relative gridItem image25`}
        ></div>
        <div
          className={`${galeryStyles.gridItem} ${galeryStyles.gridItem26} col-4 col-md-4 position-relative gridItem image26`}
        ></div>
      </div>
    </>
  );
};

export default Galeria;
