import Link from 'next/link';
import Image from 'next/image';
import styledNav from '../styles/Nav.module.sass';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../redux/actions';

// const switchTheme = document.querySelector('#changeThemeSwitch');
const Nav = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  // const switchTheme = useRef();


  const changeTheme = () => {
    setChecked(!checked)
    localStorage.setItem('checked', JSON.stringify(!checked))
    
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('checked') ? JSON.parse(localStorage.getItem('checked'))
    : false
    
    if (localTheme) {
      dispatch(setDarkTheme('dark'));
      setChecked(true)
    } else {
      dispatch(setLightTheme('ligth'));
      setChecked(false)
    }
  }, [checked, dispatch]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = gsap.timeline();
    // nav progress
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { scrub: 0.3 },
    });

    t1.from(
      'nav',
      {
        y: '-100%',
        delay: 1,
        opacity: 0,
        duration: 3,
        ease: Power4.easeOut, //'elastic'
      },
      '-=.7'
    );
  }, []);

  return (
    <nav
      className={`${styledNav.nav} ${
        theme.color === 'dark' ? styledNav.shadowDark : styledNav.shadowLight
      } navbar navbar-expand-lg ${
        theme.color === 'dark' ? 'navbar-dark' : 'navbar-light'
      } fixed-top mx-2} ${
        theme.color === 'dark' ? styledNav.dark : styledNav.light
      } fixed-top mx-2`}
    >
      <progress className={styledNav.progress} max="100" value="0"></progress>
      <div className="container-fluid">
        <Link href="/#">
          <a className="ms-3">
            <Image
              className={`${styledNav.logo}`}
              src="/images/logo-chilaquileon.png"
              alt="chilaquileon-logo"
              width={80}
              height={30}
            />
          </a>
        </Link>
        {/* <button onClick={(e) => changeTheme(e)}>
          {theme.color === 'dark' ? 'dark' : 'light'}
        </button> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarNav"
        >
          <ul className={`${styledNav.navbar} navbar-nav`}>
            {/* <li className="nav-item mx-md-2">
              <Link className="nav-link active" aria-current="page" href="/">
                Inicio
              </Link>
            </li> */}
            <li className="nav-item dropdown me-2">
              <a
                className={`${styledNav.navIn} nav-link dropdown-toggle p-0`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inicio
              </a>
              <ul className={`${styledNav.dropmenu} dropdown-menu`} aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/">
                    <a className="dropdown-item">Ir a Inicio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#instalations">
                    <a className="dropdown-item">Instalaciones</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a className="dropdown-item">¿Chilaquiles?</a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/#location">
                    <a className="dropdown-item">Ubicación</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/menu">
                Menú
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" href="/galeria">
                Galería
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/musica">
                Música
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link className="nav-link" href="/nosotros">
                Nosotros
              </Link>
            </li>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="changeThemeSwitch"
                // onClick={(e) => changeT(e)}
                checked={checked}
                onChange={() => changeTheme()}
                // ref={switchTheme}
              />
              
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
