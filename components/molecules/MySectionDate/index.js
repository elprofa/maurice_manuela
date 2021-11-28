import React from 'react'
import MySectionDateStc from './SectionDate.stc'

function MySectionDate() {
    return (
        <MySectionDateStc className=" py-2 py-md-5">
            <img src="/img/icon.svg" style={{"maxWidth":"100%"}} className="icon" />
            <h1 className="py-2 my-5" style={{"color": "#ddc893 !important"}}>
                <span>Les dates à rétenir</span>
            </h1>
            <div className="div_date">
                <div className="container">
                    <div className="row py-2 py-md-5">
                        <div className="col-md-6 my-2 my-md-0">
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
                        <div className="col-md-6 my-2 my-md-0">
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
