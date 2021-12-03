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
                            
                            <p>
                                Après avoir scellé leur union dans la pure tradition africaine, place aux cérémonies civile et religieuse à Abidjan.

                                Le prince Akan et sa princesse Bantoue se diront Oui devant Dieu et devant les hommes. Cette union aura lieu le samedi 13 août 2022.  
                                La magnifique journée commencera par une cérémonie civile à la mairie de …
                                Ensuite, la bénédiction nuptiale aura lieu à la paroisse …
                            </p>
                            <p>
                                Enfin, un cocktail et un diner sur le thème art deco (Gatsby le magnifique) seront offerts aux invités.
                            </p>
                        </div>
                    </div>
               </div>
        </SectionAbidjanStc>
    )
}

export default SectionAbidjan
