import React from 'react'
import {Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageAccueilSectionAccueilStc from './PageAccueilSectionAccueil.stc'

function PageAccueilSectionAccueil() {
    return (
        <PageAccueilSectionAccueilStc>
            <Row>
                <Col lg={6} className="align-self-center  px-2 px-md-5 py-2 py-md-5">
                    <h1 className="background-overlay">Dubani agency</h1>
                   <div className="px-2 px-md-5" style={{position:"relative",zIndex:1}}>
                        <Title className="py-2 py-md-3">
                            Dubani Agency 
                        </Title>
                        <Title niveau={1}>
                            Faites grandir votre visibilité et votre notoriété 
                        </Title>
                        <Texte className="h5 py-2 py-md-3">
                            Chez Dubani, nous réalisons ce que vous rêvez
                        </Texte>
                        <Bouton className="btn px-2 px-md-5">
                            Embauchez nous
                        </Bouton>
                   </div>
                </Col>
                <Col lg={6} className="right d-none d-lg-block">
                    <img src="/img/PageAccueilSectionAccueil/image-1.jpg" width="100%"/>
                </Col>
            </Row>
            
        </PageAccueilSectionAccueilStc>
    )
}

export default PageAccueilSectionAccueil
