import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import CardServiceStc from './CardService.stc'

function CardService(props) {
    return (
        <CardServiceStc>
            <Card className={props.className}>
                <span className="icon my-2 my-md-0">
                    {props.icon}
                </span>
                <CardBody>
                    <CardTitle className="" tag="h5">{props.title}</CardTitle>
                    <CardText className="my-2 my-md-3">{props.texte}</CardText>
                    {props.bouton}
                </CardBody>
            </Card>
        </CardServiceStc>
    )
}

export default CardService
