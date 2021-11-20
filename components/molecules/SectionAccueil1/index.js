import React from 'react'
import SectionAccueil1Stc from './sectionAccueil1.stc'

function SectionAccueil1() {
    return (
        <SectionAccueil1Stc>
            <h1 className="py-2 py-md-5">Un couple heureux</h1>
            <div className="container py-2 py-md-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image">
                            <img src="/img/photo2.png" />
                        </div>
                            <h1 style={{"fontSize":"3rem"}}>Manuela</h1>
                            <p>
                            Manuela : Originaire de
                            Libreville, et véritable
                            épicurienne, Manuela est
                            toujours disponible pour de
                            nouvelles expériences
                            </p>
                    </div>
                    <div className="col-md-6">
                        <div className="image">
                            <img src="/img/photo1.png" />
                        </div>

                        <div className="title">
                            <h1 style={{"fontSize":"3rem"}}>Maurice</h1>
                            <p>
                                Maurice (Maumau pour les intimes) est né et a grandi à Abidjan. il est passionné de
                                sport et de nouvelles
                                technologies.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="row py-2 py-md-5 p-2 my-2 my-md-5 p-md-5 form">
                    <div className="col-lg-12 py-2 py-md-4">
                        <h1 style={{"color":"#fff"}}>Serez-vous de la partie ??</h1>
                    </div>
                    <form action="" method="POST" style={{"width":"100%"}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div  className="form-group">
                                    <label>Nom & prenom</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                       <div className="row ">
                            <div className="col-md-6">
                                <div  className="form-group">
                                    <label>Adresse email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div  className="form-group">
                                    <label>Participation</label>
                                    <select className="form-control">
                                        <option>Uniquement civil</option>
                                        <option>Uniquement au coutumier</option>
                                        <option>Les deux</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-primary" type="submit">Envoyez</button>
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </SectionAccueil1Stc>
    )
}

export default SectionAccueil1
