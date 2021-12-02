import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import MySectionDateStc from './SectionDate.stc'

function MySectionDate() {

    
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".section_date",
            markers:false,
            start:"top bottom",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from ('.col_date1',{duration:.8,opacity:0,ease: "slow(0.7, 0.7, false)", x: -100 })
            .from ('.col_date2',{duration:.8,opacity:0,ease: "slow(0.7, 0.7, false)", x: 100 })
            
    }, []);

    return (
        <MySectionDateStc className=" section_date py-2 py-md-5">
            <img src="/img/icon.svg" style={{"maxWidth":"100%"}} className="icon icon_date" />
            <h1 className="py-2 my-5 titre_date" style={{"color": "#ddc893 !important"}}>
                <span>Les dates à rétenir</span>
            </h1>
            <div className="div_date">
                <div className="container">
                    <div className="row py-2 py-md-5">
                        <div className="col_date1 col-md-6 my-2 my-md-0">
                            <div className="p_container">
                                <div className="container_date text-center">
                                    <div className="ville">Libreville</div>
                                    <div className="jours ">Samedi</div>
                                    <div className="date ">30 Juillet</div>
                                </div>
                                <div className="annee">2022</div>
                                <a href="/libreville" className="btn form-control">View detail</a>
                            </div>
                        </div>
                        <div className="col_date2 col-md-6 my-2 my-md-0">
                            <div className="p_container">
                                <div className="container_date text-center">
                                    <div className="ville">Abidjan</div>
                                    <div className="jours ">Samedi</div>
                                    <div className="date ">13 Août </div>
                                </div>
                                <div className="annee ">2022</div>
                                <a href="/abidjan" className="btn form-control">View detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MySectionDateStc>
    )
}

export default MySectionDate
