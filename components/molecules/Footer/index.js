import React from 'react'
import FooterStc from './Footer.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap';
import {AiFillPhone,AiOutlineMail} from 'react-icons/ai';
import {BsMap} from 'react-icons/bs';

function Footer() {
    return (
        <FooterStc>
            <Container className="py-2 py-md-5">
                <div className='row'>
                    <div className='col-lg-6'>
                        <p className='text-center' style={{"fontSize":"20px","fontWeight":"600","letterSpacing":"0.1em"}}>
                            Site web developpé par <a href='https://www.dubaniagency.com/' target='_blank'>Dubani agency</a>
                        </p>
                    </div>
                    <div className='col-lg-6'>
                        <p className='text-center' style={{"fontSize":"20px","fontWeight":"600","letterSpacing":"0.1em"}}>
                            <a href='#' target='_blank'> <span style={{"fontFamily":"arial !important"}}>#</span>deuxm2022</a>
                        </p>
                    </div>
                </div>
            </Container>
        </FooterStc>
    )
}

export default Footer
