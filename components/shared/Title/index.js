import React from 'react'
import TitleStc from './Title.stc'
function Title(props) {

    if(props.niveau==1)
    {
        return (
            <TitleStc>
                <h1>
                    {props.children} 
                </h1>
            </TitleStc>
        )
    }
    else if(props.niveau==2)
    {
        return (
            <TitleStc>
                <h2>
                    {props.children} 
                </h2>
            </TitleStc>
        )
    }
    else if(props.niveau==3)
    {
        return (
            <TitleStc>
                <h3>
                    {props.children} 
                </h3>
            </TitleStc>
        )
    }
    else if(props.niveau==4)
    {
        return (
            <TitleStc>
                <h4>
                    {props.children} 
                </h4>
            </TitleStc>
        )
    }
    else if(props.niveau==5)
    {
        return (
            <TitleStc>
                <h5>
                    {props.children} 
                </h5>
            </TitleStc>
        )
    }
    else
    {
        return (
            <TitleStc className={props.className}>
                <h7>
                    <span className="trait"></span> 
                    <span>{props.children}</span>
                </h7>
            </TitleStc>
            
        )
    }
}

export default Title
