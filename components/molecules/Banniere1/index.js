import React from 'react'
import Banniere1Stc from './Banniere1.stc'
import {Container,Row,Col} from 'reactstrap'
import Texte from '../../shared/Texte'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function Banniere1() {
    return (
        <Banniere1Stc>
            <div className="container container-image my-2 my-md-0">
                <Row>
                    <Col lg={7}>
                        <img src="/img/img6.png" className="d-none d-lg-block"  />
                    </Col>
                    <Col lg={5}>
                        <div className="container-but my-2 my-4 mx-2 mx-md-4 py-2 py-md-4 px-2 px-md-4 align-self-center" style={{background:"#fff"}}>
                            <ul>
                                <li>
                                    <Texte>
                                       <span className="icon"><AiOutlineCheckCircle/></span> <span>Developper une presence en ligne</span>
                                    </Texte>
                                </li>
                                <li>
                                    <Texte>
                                    <span className="icon"><AiOutlineCheckCircle/></span><span>Ameliorer votre positionnement sur les moteurs de recherche</span>
                                    </Texte>
                                </li>
                                <li>
                                    <Texte>
                                    <span className="icon"><AiOutlineCheckCircle/></span><span>Atteigner les clients potentieks directement</span>
                                    </Texte>
                                </li>
                                <li>
                                    <Texte>
                                    <span className="icon"><AiOutlineCheckCircle/></span> <span>Mettez en place le payement en ligne depuis votre site web</span>
                                    </Texte>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </Banniere1Stc>
    )
}

export default Banniere1
