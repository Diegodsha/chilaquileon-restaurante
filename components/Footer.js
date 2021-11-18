import footerStyle from '../styles/Footer.module.sass'

const Footer = () => {
    return (
        <footer className={`${footerStyle.footer} container-fluid`}>
            <div className=" row ">
                <div className="col-12 col-md-6 col-lg-4">direccion</div>
                <div className="col-12 col-md-6 col-lg-4">horarios</div>
                <div className="col-12 col-md-6 col-lg-4">redes</div>
                <div className="col-12 text-center">
                    <hr className="light-100" />
                    <h6>&#174; Chilaquileon.com</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer
