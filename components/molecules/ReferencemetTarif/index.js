import React from 'react'
import ReferencementTarifStc from './ReferencementTarif.stc'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

  import {AiOutlineCheckCircle} from 'react-icons/ai'
import Title from '../../shared/Title';

function ReferencementTarif(props) {

    const plans=props.plan;
    return (
        <ReferencementTarifStc>
            <Card className="my-2 my-md-0">
                <CardBody>
                    <CardTitle tag="h5" className="text-center my-md-3 my-2">{props.title}</CardTitle>
                    <CardText className=" h3 text-center m1 ">{props.subtitle}</CardText>
                    <CardText className=" h3 text-center m2 fw-bold my-2 my-md-3">{props.texte}</CardText>
                    <ul className="package-ul px-0 mt-2 mt-md-3">
                        {
                            plans.map((plan,index)=>(
                                <li key={index+"item_tarifs"} className="py-2 py-md-2 text-center">
                                    <span className="icon">
                                        <AiOutlineCheckCircle />
                                    </span>
                                    <span className="texte px-2 px-md-5 text-center">{plan.item}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <Title className="my-2 my-md-2 text-center" niveau={1}>
                        {props.tarif}
                    </Title>
                    <Title className="my-2 my-md-2 text-center" niveau={2}>
                        Par mois
                    </Title>
                </CardBody>
            </Card>
        </ReferencementTarifStc>
    )
}

export default ReferencementTarif
