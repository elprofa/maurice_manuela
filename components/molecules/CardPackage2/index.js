import React from 'react'
import CardPackageStc from './CardPackage2.stc'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Bouton from '../../shared/Bouton';
import Link from 'next/link'

function CardPackage(props) {
    return (
        <CardPackageStc>
            <Card className="my-2 my-md-0">
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardText>{props.texte}</CardText>
                    <Bouton className="btn"><Link href="/contact/">Embauchez nous</Link></Bouton>
                </CardBody>
            </Card>
        </CardPackageStc>
    )
}

export default CardPackage
