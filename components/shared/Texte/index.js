import React from 'react'
import TexteStc from './Texte.stc'

function Texte(props) {
    return (
        <TexteStc className={props.className}>
            {props.children}
        </TexteStc>
    )
}

export default Texte
