import { useSelector } from 'react-redux';
import Link from 'next/link';
import footerStyle from '../styles/Footer.module.sass';
import sectionStyle from '../styles/section.module.sass';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <footer
      className={`${footerStyle.footer} ${
        theme.color === 'dark'
          ? footerStyle.footerDark
          : footerStyle.footerLight
      } container-fluid p-3`}
    >
      <div className=" row ">
        <div className="col-12 col-lg-4 text-center d-flex flex-lg-column justify-content-center align-items-center">
          <ul className="text-start list-unstyled ">
            <li>
              <Link href="/#">
                <a className="">Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/menu">
                <a className="">Menú</a>
              </Link>
            </li>
            <li>
              <Link href="/galeria">
                <a className="">Galería</a>
              </Link>
            </li>
            <li>
              <Link href="/musica">
                <a className="">Música</a>
              </Link>
            </li>
            <li>
              <Link href="/nosotros">
                <a className="">Nosotros</a>
              </Link>
            </li>
          </ul>
          <span className='px-3'>
            Dirección: Blvd. Delta 735, Fracciones de Santa Julia, 37290 León,
            Gto.
          </span>
        </div>
          <hr className='d-lg-none' />
        <div className="col-12  col-lg-4 justify-content-center align-items-center d-flex flex-column mb-3 mb-lg-0">
          <span>Horario de 8:30 a 14:30</span>
          <span> Martes: CERRADO</span>
        </div>
        <hr className='d-lg-none' />
        <div className="col-12 col-lg-4 d-flex flex-column flex-sm-row flex-lg-column justify-content-center">
          <p className="display-6 text-center"> @chilaquileon</p>{' '}
          <div className='text-center'>
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
          <span className='ps-2' >Tel:477-285-3885</span>
          </div>
        </div>
        <div className="col-12 text-center">
          <hr className="light-100" />
          <small>&#174; chilaquileon.com 2021</small>
          <small className="text-white justify-content-center d-flex flex-wrap">
            Designed and developed by
            <a
              className="text-decoration-none mx-1 text-white text-decoration-underline"
              href="https://dshagui.com"
              target="_blank"
              rel="noreferrer"
            >
              DSHAGUI
            </a>
            &copy; All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
