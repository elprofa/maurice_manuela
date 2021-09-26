import React from 'react'
import ReferencementSeoStc from './ReferencementSeo.stc'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';


function ReferencementSeo(props) {
    return (
        <ReferencementSeoStc>
            <Card className="my-2 my-md-0">
                <CardBody>
                    <CardTitle tag="h5" className="text-center">{props.title}</CardTitle>
                    <CardText className="text-center">{props.texte}</CardText>
                </CardBody>
            </Card>
        </ReferencementSeoStc>
    )
}

export default ReferencementSeo
