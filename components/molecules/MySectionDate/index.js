import React from 'react'
import MySectionDateStc from './SectionDate.stc'

function MySectionDate() {
    return (
        <MySectionDateStc className=" py-2 py-md-5">
            <h1 className="py-3">Les dates à rétenir</h1>
            <div className="div_date">
                <div className="container">
                    <div className="row py-2 py-md-5">
                        <div className="col-md-6">
                            <div className="container_date text-center py-4">
                                <div className="ville">Libreville</div>
                                <div className="jours py-3">Samedi</div>
                                <div className="date py-3">30 Juillet</div>
                            </div>
                            <div className="annee py-3">2022</div>
                            <a href="" className="btn form-control">View detail</a>
                        </div>
                        <div className="col-md-6">
                            <div className="container_date text-center py-4">
                                <div className="ville">Abidjan</div>
                                <div className="jours py-3">Samedi</div>
                                <div className="date py-3">13 Août </div>
                            </div>
                            <div className="annee py-3">2022</div>
                            <a href="" className="btn form-control">View detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </MySectionDateStc>
    )
}

export default MySectionDate
