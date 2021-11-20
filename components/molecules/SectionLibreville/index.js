import React from 'react'
import SectionLibrevilleStc from './SectionLibreville.stc';


function SectionLibreville() {
    return (
        <SectionLibrevilleStc className="py-2 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/img/imagelbv.jpeg" style={{width:"100%"}} />
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1 className="py-md-5 py-2">Libreville</h1>
                        <p>
                        La rencontre de l’Ogooue et du Bandama
                        Il y’a quelques années, un prince Akan rencontra une
                        princesse Bantoue lors de ses études chez les Gaulois.
                        Au fil du temps, les deux tourtereaux devinrent
                        inséparables.
                        Ainsi, ils décidèrent de sceller leur union.
                        Pour ce faire, le prince Akan accompagné de sa famille,
                        se rendra en terre Bantoue le samedi 30 juillet 2022 afin
                        d’honorer sa future épouse dans le respect des rites et
                        coutumes de leurs ancêtres. 
                        </p>
                    </div>
                </div>
            </div>
        </SectionLibrevilleStc>
    )
}

export default SectionLibreville
