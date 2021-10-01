import React from 'react'
import PageReferencementSectionSeoStc from './PageReferencementSectionSeo1.stc'
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
                    <Col lg={5} className="right d-none d-lg-block align-self-center">
                        
                    </Col>
                    <Col lg={7} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title className="py-2 py-md-3">
                            SEO
                            </Title>
                            <Title niveau={1} className="">
                                il est primordial qu'un budget SEO reçoive l'investissement dont 
                                il a besoin pour développer votre activité en ligne.
                            </Title>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg={6} className="align-self-center">
                        <Texte className="py-2 py-md-2">
                            .Aucours des 15 dernières années, nous avons vu 
                            l'effet positif qu'une stratégie de référencement appropriée peut avoir sur une entreprise.
                            D'autre part, nous avons également vu l'inefficacité d'une strategie de 
                            referencement qui manque d'eclat, et me moulin de frustation dans lequel on peut se 
                            retrouver sans une bonne compréhension de son investissement.
                        </Texte>
                        <Texte className="py-2 py-md-2">
                           si vous deviez embaucher un expert SEO à temps plein en interne, un salaire de 120 000 $ par ou 
                           nécessiterait autant de réflexion. Alors, pourquoi battez-vous l'idée d'avoir une equipe entière 
                           travaillant avec le succès de votre entreprise comme objectif global pour aussi peu que 6 000 $ par an ?.
                        </Texte>
                        <Bouton className="btn px-2 px-md-5 text-center">
                            <Link href="/contact/">
                            DEMANDEZ UNE CONSULTATION SUR LA STRATEGIE DE SEO 
                            PERSONNALISEE
                            </Link>
                        </Bouton>
                    </Col>
                    <Col lg={6}>
                        <img src="/img/call.png" width="100%" />
                    </Col>
                   
                </Row>
            </Container>
        </PageReferencementSectionSeoStc>
    )
}

export default PageReferencementSectionSeo
