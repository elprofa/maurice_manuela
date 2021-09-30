import React from 'react'
import CardPackageWebStc from './CardPackageWeb.stc'
import {
    Card,CardText, CardBody,
    CardTitle,
  } from 'reactstrap';


function CardPackageWeb(props) {
    return (
        <CardPackageWebStc>
            <Card className="my-2 my-md-0 text-center">
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    {props.texte}
                </CardBody>
            </Card>
        </CardPackageWebStc>
    )
}

export default CardPackageWeb
