import React from 'react'
import CardProjetStc from './CardProjet.stc'
import {BsFillSquareFill} from 'react-icons/bs'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
  } from 'reactstrap';
function CardProjet(props) {

    if(props.niveau==1)
    {
        return (
            <CardProjetStc>
                <Card className={props.className}>
                   
                    
                    <CardBody>
                        <CardTitle className="" tag="h5">
                            <Row className="content" style={{width:"125px;"}}>
                                <Col sm={5}>
                                <span className="icon">
                                        <BsFillSquareFill />
                                </span>
                                {props.title}
                                </Col>
                                <Col sm={7} className="indice">
                                    <span className="" style={{display:"block",color:"#ff0000"}}>+</span>   
                                    <span style={{color:"#333"}}>ans</span>   
                                </Col>
                            </Row>
                             
                        </CardTitle>
                        <CardText className="">{props.texte}</CardText>
                    </CardBody>
                </Card>
            </CardProjetStc>
        )
    }
    else if(props.niveau==2)
    {
        return (
            <CardProjetStc>
                <Card className={props.className}>
                    <CardBody>
                        <CardTitle className="" tag="h5">
                            <Row className="content" style={{width:"200px !important;"}}>
                                <Col sm={8}>
                                <span className="icon">
                                        <BsFillSquareFill />
                                </span>
                                {props.title}
                                </Col>
                                <Col sm={4} className="indice">
                                    <span className="" style={{display:"block",color:"#ff0000"}}>+</span>   
                                    <span style={{color:"#333"}}>ans</span>   
                                </Col>
                            </Row>
                             
                        </CardTitle>
                        <CardText className="">{props.texte}</CardText>
                    </CardBody>
                </Card>
            </CardProjetStc>
        )
    }
    else
    {
        return (
            <CardProjetStc>
                <Card className={props.className}>
                    <CardBody>
                        <CardTitle className="" tag="h5">
                            <Row className="content" style={{width:"250px !important;"}}>
                                <Col sm={9} >
                                <span className="icon">
                                        <BsFillSquareFill />
                                </span>
                                {props.title}
                                </Col>
                                <Col sm={3} className="indice">
                                    <span className="" style={{display:"block",color:"#ff0000"}}>+</span>   
                                    <span style={{color:"#333"}}>ans</span>   
                                </Col>
                            </Row>
                             
                        </CardTitle>
                        <CardText className="">{props.texte}</CardText>
                    </CardBody>
                </Card>
            </CardProjetStc>
        )
    }
    
}

export default CardProjet
