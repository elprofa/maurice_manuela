import React from 'react'
import SectionLibrevilleStc from './SectionLibreville.stc';


function SectionLibreville() {
    return (
        <SectionLibrevilleStc className="">
            <br/><br/>
                 <img src="/img/icon.svg" style={{"maxWidth":"100%"}} className="icon" />
                <h1 className="py-2 my-5" style={{"color": "#ddc893 !important"}}>
                    <span>Libreville</span>
                </h1>
                <div className="container">
                    <div className="row" style={{"background":"#0c1524"}}>
                        <div className="col-md-6 p-5 text-center div_container d-none d-md-block">
                        
                        </div>
                        <div className="col-md-6 px-md-5 py-3">
                            <p>
                                Les festivités débutéront par le Mariage Traditionnel, A Libreville.
                            </p>
                           <p>
                               Ainsi, Le Prince Akan Accompagné De sa famille, se rendra en terre Bantou,
                               Le samedi 30 Juillet 2022 Afin d'honorer  sa future Epouse dans le respect 
                               Des Rites Et Coutumes De leurs Ancêtres.
                           </p>
                        </div>
                    </div>
                </div>
                
        </SectionLibrevilleStc>
    )
}

export default SectionLibreville
