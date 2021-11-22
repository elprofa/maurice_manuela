import React from 'react'
import SectionLibrevilleStc from './SectionLibreville.stc';


function SectionLibreville() {
    return (
        <SectionLibrevilleStc className="">
                <div className="row">
                    <div className="col-md-6 p-5 text-center div_container d-none d-md-block">
                       
                    </div>
                    <div className="col-md-6 p-md-5 py-2">
                        <h1 className="py-md-5 py-2">Libreville</h1>
                        <p>
                            Les festivités débuteront par le mariage traditionnel, à Libreville.
                        </p>
                        <p>
                            Ainsi, le prince Akan accompagné de sa famille, se rendra en terre Bantoue,
                                le samedi 30 juillet 2022 afin d’honorer sa future épouse dans le respect 
                                des rites et coutumes de leurs ancêtres.
                        </p>
                    </div>
                </div>
        </SectionLibrevilleStc>
    )
}

export default SectionLibreville
