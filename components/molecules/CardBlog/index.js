import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import CardBlogStc from './CardBlog.stc'

function CardBlog(props) {
    if(props.theme==1){
        return (
            <CardBlogStc className="one my-2 my-md-2">
                <div className="card" style={{minHeight: "300px"}}>
                    <div className="card-body d-flex">
                        <h4 className="text-start d-inline-flex align-items-center align-self-center flex-wrap card-title">{props.title}</h4>
                    </div>
                </div>
                <p className="mt-2 mt-md-3 mb-0 description">{props.texte}</p>
                <p className="my-2 my-md-0 date">{props.date}</p>
            </CardBlogStc>
        )
    }
    else
    {
        return (
            <CardBlogStc className="two my-2 my-md-3">
                <div className="card" style={{minHeight: "300px"}}>
                    <div className="card-body d-flex">
                        <h4 className="text-start d-inline-flex align-items-center align-self-center flex-wrap card-title">{props.title}</h4>
                    </div>
                </div>
                <p className="my-2 my-md-3 description">{props.texte}</p>
                <p className="my-2 my-md-0 date">{props.date}</p>
            </CardBlogStc>
        )
    }
}

export default CardBlog
