import React from 'react'
import SectionAbidjanStc from './SectionAbidjan.stc';


function SectionAbidjan() {
    return (
        <SectionAbidjanStc className="py-2 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/img/2.png" style={{width:"100%"}} />
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h1 className=" py-2">Abidjan</h1>
                        <p>
                        Après avoir avoir scellé leur union dans la pure tradition africaine, Manuela et Maurice se diront
                        Oui devant Dieu et devant les hommes, le samedi 13 août 2022, à Abidjan, la perle des lagunes.
                        La magnifique journée commencera par une cérémonie civile à la mairie de …
                        Ensuite, la bénédiction nuptiale aura lieu à la paroisse …
                        Enfin, un cocktail et un diner sur le thème art deco (gatsby le magnifique) seront offerts aux
                        invités.
                        </p>
                    </div>
                </div>
            </div>
        </SectionAbidjanStc>
    )
}

export default SectionAbidjan
