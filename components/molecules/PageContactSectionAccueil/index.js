import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import PageContactSectionAccueilStc from './PageContactSectionAccueil.stc'
import {FaFacebookSquare,FaInstagram,FaLinkedin} from 'react-icons/fa'
function PageContactSectionAccueil() {
    return (
        <PageContactSectionAccueilStc>
           <Row className="pl-0 pl-md-5 ml-0 ml-md-5">
                <Col lg={7} className="align-self-center ">
                    <h1 className="background-overlay">Dubani agency</h1>
                    <div className="px-2 px-md-5 mx-0 mx-md-5 px-0 px-md-5" style={{position:"relative",zIndex:1}}>
                        <img src="/img/logo.svg" height="100" />
                        <Title niveau={1} className="">
                            +212 7 00 15 42 56
                        </Title>
                        <Texte className="h5 py-2 py-md-3 ">
                            31 allee des pruniers, Casablanca
                        </Texte>
                        <Texte className="h5 py-2 py-md-3 ">
                           info@dubaniagency.com
                        </Texte>
                        <Texte className="h5 py-2 py-md-3 ">
                           RESEAUX SOCIAUX
                        </Texte>
                        <Texte className="h5 py-2 py-md-3 ">
                           <span className="icon"><FaFacebookSquare/></span>
                           <span className="icon"><FaInstagram/></span>
                           <span className="icon"><FaLinkedin/></span>
                        </Texte>
                    </div>
                </Col>
                <Col lg={5} className="right align-self-center py-md-5 py-2">

                   <form className="pt-2 pt-md-5 mt-0 mt-md-5 px-0 px-md-4">
                    <div className="form-group">
                            <label>Nom *</label>
                            <input type="text" style={{background:"transparent",border:"0px",borderRadius:"0px",borderBottom:"1px solid #fff"}} className="form-control" />
                        </div>
                    
                        <div className="form-group">
                            <label>Adresse E-mail *</label>
                            <input type="text" style={{background:"transparent",border:"0px",borderRadius:"0px",borderBottom:"1px solid #fff"}} className="form-control input" />
                        </div> 
                        <div className="form-group">
                            <label>Phone *</label>
                            <input type="text" style={{background:"transparent",border:"0px",borderRadius:"0px",borderBottom:"1px solid #fff"}} className="form-control" />
                        </div> 
                        <div className="form-group">
                            <label>Quel service soliciter *</label>
                            <select className="form-control" style={{background:"transparent",border:"0px",borderRadius:"0px",borderBottom:"1px solid #fff"}}>
                                <option className="">- Choisir -</option>
                            </select>
                        </div> 
                        <div className="form-group">
                            <label>Quel service soliciter *</label>
                            <select className="form-control" style={{background:"transparent",border:"0px",borderRadius:"0px",borderBottom:"1px solid #fff"}}>
                                <option className="">- Choisir -</option>
                            </select>
                        </div>  
                        <div className="form-group">
                            <label>Description du projet *</label>
                            <textarea rows="2" className="form-control" style={{background:"transparent",border:"0px",borderRadius:"0px",borderBottom:"1px solid #fff"}}>
                            </textarea>
                        </div>  
                        <div className="form-group">
                            <Bouton className="btn">
                                DEMANDEZ UNE CONSULTATION AUJOURD'HUI
                            </Bouton>
                        </div> 
                   </form>
                </Col>
            </Row>
        </PageContactSectionAccueilStc>
    )
}

export default PageContactSectionAccueil
