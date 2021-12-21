import React from 'react'
import SectionAbidjanStc from './SectionAbidjan.stc';


function SectionAbidjan() {
    return (
        <SectionAbidjanStc className="">

                <br/><br/>
                 <img src="/img/icon.svg" style={{"maxWidth":"100%"}} className="icon" />
                <h1 className="py-2 my-5" style={{"color": "#ddc893 !important"}}>
                    <span>Abidjan</span>
                </h1>
               <div className="container">
                    <div className="row" style={{"background":"#0c1524"}}>
                        <div className="col-md-6 div_container d-none d-md-block">
                        </div>
                        <div className="col-md-6 px-md-5 py-3">
                            
                            <p className='mb-4'>
                                Après avoir scellé leur union dans la pure tradition africaine,
                                place aux cérémonies civiles et religieuses qui se dérouleront 
                                sur deux journées distinctes.
                            </p>
                            <p className='mb-1'>
                                D’abord, le vendredi 12 aout 2022 à 14h, se déroulera le mariage civil 
                                à l’hôtel de ville du Plateau.  
                            </p>

                            <p className='mb-4'>
                                Ensuite, un cocktail sera offert aux invités. Il se tiendra à la résidence du père du marié, sise à la Riviera Ciad.  
                            </p>
                                
                            <p className='mb-4'>Enfin, le samedi 13 aout 2022, Manuela et Maurice s’uniront devant Dieu à l’église Bon Pasteur (Riviera 3) à 15h. </p>
                            <p>
                                Pour clôturer cette célébration, vous êtes conviés au diner de gala qui se déroulera à Ayana Palace (Angré 8e Tranche) dès 20h. 
                                Cette soirée aura pour thème : Art Déco (Gatsby Le Magnifique)
                            </p>
                        </div>
                    </div>
               </div>
        </SectionAbidjanStc>
    )
}

export default SectionAbidjan
