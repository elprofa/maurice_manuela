import React from 'react'
import PageReferencementSectionSeoStc from './PageReferencementSectionSeo.stc'
import {Container,Row,Col} from "reactstrap"
import Texte from '../../shared/Texte'
import Title from '../../shared/Title'
import Bouton from '../../shared/Bouton'
import Link from 'next/link'
function PageReferencementSectionSeo() {
    return (
        <PageReferencementSectionSeoStc>
            <Container className="px-2 px-md-0">
                <Row className="py-md-5 py-2 ">
                    <Col lg={7} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="py-2 py-md-3">
                            SEO
                            </Title>
                            <Title niveau={1} className="">
                                SEO: TOUT EST UNE QUESTION DE RETOUR SUR INVESTISSEMENT
                            </Title>
                        </div>
                    </Col>
                    <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <img src="/img/cool.PNG" width="100%" />
                    </Col>
                    <Col lg={6} className="align-self-center">
                        <Texte className="py-2 py-md-2">
                            Votre investissement dans le réferencement est ce qui déterminera votre vitesse 
                            et votre classement. Vous voulez courir plus vite ? Investissez plus! 
                            Plus de budget signifie plus de temps.
                        </Texte>
                        <Texte className="py-2 py-md-2">
                            Si vous deviez investir 2000 $ par mois, vous 
                            pourriez ouvrir de nombreuses voies de revenus et 
                            10000 à 50 000 $ supplémentaires, vous auriez un excellent sur investissement.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 text-center">
                            <Link href="/contact/">
                            DEMANDEZ UNE CONSULTATION SUR LA STRATEGIE DE SEO 
                            PERSONNALISEE
                            </Link>
                        </Bouton>
                    </Col>
                </Row>
            </Container>
        </PageReferencementSectionSeoStc>
    )
}

export default PageReferencementSectionSeo
