import React from 'react'
import PageWebSectionPackageStc from './PageWebSectionPackage.stc'
import {
    Container,
    Row,
    Col
}
from 'reactstrap'
import Title from '../../shared/Title'
import Texte from '../../shared/Texte'
import MyCaroussel from '../caroussel'

function PageWebSectionPackage() {
    return (
        <PageWebSectionPackageStc>
            <Container>
            <Row className="py-0 py-md-5">
                <Col lg={6} className="right">
                </Col>
               <Col lg={6}>
                    <Title className="py-2 py-md-3">
                        Package
                    </Title>
                    <Title niveau={1}>
                        Donnez vie à vos rêves avec votre site sur mesure, Simple Rapide & Fiable.
                    </Title>
                    <Texte className="h5 py-2 py-md-3">
                        Nos concepteur et developpeur Web professionnels internes ont perfectionné leurs competence et utilisé les technologies les 
                        plus récentes et les performantes pour aider nos clients à atteindre leurs objectifs de vente en ligne, année après année.

                    </Texte>
               </Col>
            </Row>
           
            </Container>
            <Row className="my-2 my-md-5 row-caroussel">
                <Col lg={12} className="px-md-4 py-2 py-md-0 " >
                    <MyCaroussel/>
                </Col>
            </Row>
        </PageWebSectionPackageStc>
    )
}

export default PageWebSectionPackage
