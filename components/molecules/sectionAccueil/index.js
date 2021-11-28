import React from 'react'
import SectionAccueilSrc from './sectionAccueil.stc'
function SectionAccueil() {
    return (
        <SectionAccueilSrc className="clean-block clean-hero" >
            <div className="row">
                <div className="col-lg-12 ">
                    <img src="/img/photo.jpeg" className="img_accueil"  /> 
                </div>
                <div className="col-lg-12 div_title">
                    <div className="text py-3">
                        <p>Le magnifique mariage de </p>
                        <h2>Manuela & Maurice</h2>
                    </div>
                </div>
            </div>
            
        </SectionAccueilSrc>
    )
}

export default SectionAccueil
