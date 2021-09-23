import React from 'react'
import CardProjetStc from './CardProjet.stc'
import {BsFillSquareFill} from 'react-icons/bs'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
  } from 'reactstrap';
function CardProjet(props) {

     return (
            <CardProjetStc>
                <Card className={props.className}>
                   
                    
                    <CardBody>
                        <CardTitle className="divTag" tag="h5">
                             {props.chiffre}
                             <div className="div1 div2">
                                 <span style={{color:"#ff0000"}}> + </span>
                                 <span style={{fontWeight:"bold",color:"#5f5f70"}}> {props.indice} </span>
                             </div>
                        </CardTitle>
                        <CardText className="text-center">{props.texte}</CardText>
                    </CardBody>
                </Card>
            </CardProjetStc>
        ) 
    
}

export default CardProjet
