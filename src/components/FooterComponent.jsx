import React from 'react';
import { Container } from 'react-bootstrap';

function FooterComponent() {
    return (
        <>
            <footer className="page-footer font-small blue pt-2 bg-dark text-light ">
                <Container className='d-flex flex-column justify-content-center'>
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-12 mt-md-0 mt-3">
                                <h5 className="text-uppercase">South Park Season's Data </h5>
                                <p>Todas las temporadas para que disfrutes de tu favorita!</p>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">© Comedy Central 2022 Copyright:
                        <a href="https://Southpedia.com/" className='text-light' style={{ textDecoration: 'none' }}> www.Southpedia.com</a>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent
