import Footer from './Footer';
import Nav from './Nav';
import MediaBtn from './MediaBtn'
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    gsap.from('.mediaBtns', {
      x: '250%',
      duration: 2,
      delay:3,
      ease: 'elastic',
      stagger: 0.5,
    });
  }, [])
  return (
    <>
      <Nav />
      <MediaBtn link="https://api.whatsapp.com/send?phone=+524772853885&text=Hola%21%20buenas%20tardes%20quisiera%20ordenar." social='Whats' />
      <MediaBtn link='https://www.instagram.com/chilaquileon/?hl=en' social='Insta' />
      <MediaBtn link='https://www.facebook.com/chilaquileon/' social='Face' />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
