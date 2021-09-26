import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import Bouton from '../../shared/Bouton'
import Texte from '../../shared/Texte'
import Title from '../../shared/Title'
import SectionContactStc from './SectionContact.stc'

function SectionContact() {
    return (
        <SectionContactStc>
            <Container>
                <Row className="py-md-5 py-2 ">
                    <Col lg={7} className="right d-none d-lg-block align-self-center">
                            
                    </Col>
                    <Col lg={5} className="align-self-center ">
                        <div className="" style={{position:"relative",zIndex:1}}>
                            <Title niveau={1} className="mx-0 mx-md-5 ">
                                Nous contacter
                            </Title>
                            <Texte className="h5 py-2 py-md-3">
                                Utilisez le formulaire ci-dessous pour nous contacter. Nous sommes
                                impatients d'en savoir plus sur vous,votre organisation et sur la facon 
                                dont nous pouvons vous aider à atteindre un succès encore plus grand.
                            </Texte>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Nom *</label>
                            <input type="text" className="form-control" />
                        </div>    
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Adresse E-mail *</label>
                            <input type="text" className="form-control" />
                        </div>    
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Phone *</label>
                            <input type="text" className="form-control" />
                        </div>    
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Quel service soliciter *</label>
                            <select className="form-control">
                                <option className="">- Choisir -</option>
                            </select>
                        </div>    
                    </Col>
                    
                </Row>
                <Row>
                   
                    <Col lg={12} className="py-2 py-md-4">
                        <div className="form-group">
                            <label>Description du projet *</label>
                            <textarea rows="8" className="form-control">
                            </textarea>
                        </div>    
                    </Col>
                    <Col lg={12} className="py-2 py-md-4 text-center">
                        <div className="form-group">
                          <Bouton className="btn">
                              DEMANDEZ UNE CONSULTATION AUJOURD'HUI
                          </Bouton>
                        </div>    
                    </Col>
                    
                </Row>
            </Container>
        </SectionContactStc>
    )
}

export default SectionContact
