import React from 'react'
import SectionAccueil1Stc from './SectionAccueil1.stc'

function SectionAccueil1() {
    return (
        <SectionAccueil1Stc>
            <div className="container py-2 py-md-5">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="image">
                            <img src="/img/imgbg.jpg" width="100%" />
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <br/><br/>
                <div className="container container1">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Maurice & Manuela</h1>
                            <p>La rencontre de l’Ogooué et du Bandama …</p>
                            <p>
                                Lors de leurs études en terre Gauloise, un prince Akan (Maurice Appia) a fait la rencontre d’une princesse bantoue (Manuela).
                            </p>
                            <p>
                                Ils tombèrent amoureux et au fil du temps, ils devinrent inséparables.
                            </p>
                            <p>
                                Leur amour grandissant de jour en jour, ils décidèrent alors de sceller leur union, en présence de leurs familles et leurs amis.
                            </p>
                            <p>
                                Ils seront heureux de partager ce moment intime avec vous.
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
                                <button className="btn btn-primary btn_send_contact" type="submit">Envoyez</button>
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </SectionAccueil1Stc>
    )
}

export default SectionAccueil1
