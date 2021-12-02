import React, { useEffect } from 'react';
import SectionAccueilSrc from './sectionAccueil.stc'
import { gsap } from 'gsap';

function SectionAccueil() {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".section_accueil",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from('.img_accueil',{ x:100,duration:1,opacity:0,})
            .from ('.sub_titre_accueil',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.titre_accueil',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return (
        <SectionAccueilSrc className="section_accueil clean-block clean-hero" >
            <div className="row">
                <div className="col-lg-12 ">
                    <img src="/img/photo.jpeg" className="img_accueil"  /> 
                </div>
                <div className="col-lg-12 div_title">
                    <div className="text py-3">
                        <p className="sub_titre_accueil">Le magnifique mariage de </p>
                        <h2 className="titre_accueil">Manuela & Maurice</h2>
                    </div>
                </div>
            </div>
            
        </SectionAccueilSrc>
    )
}

export default SectionAccueil
