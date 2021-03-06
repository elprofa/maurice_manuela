import React, { useState } from "react";
import SectionAccueil1Stc from './SectionAccueil1.stc'

function SectionAccueil1() {


       // States for contact form fields
        const [fullname, setFullname] = useState("");
        const [email, setEmail] = useState("");
        const [subject, setSubject] = useState("Coucou Manuela & Maurice !");
        const [message, setMessage] = useState("Uniquement civil");

        //   Form validation state
        const [errors, setErrors] = useState({});

        //   Setting button text on form submission
        const [buttonText, setButtonText] = useState("Send");

        // Setting success or failure messages states
        const [showSuccessMessage, setShowSuccessMessage] = useState(false);
        const [showFailureMessage, setShowFailureMessage] = useState(false);

      const handleValidation = () => {
            let tempErrors = {};
            let isValid = true;
        
            if (fullname.length <= 0) {
            tempErrors["fullname"] = "";
            isValid = false;
            }
            if (email.length <= 0) {
            tempErrors["email"] = "";
            isValid = false;
            }
            if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
            }
            if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
            }
        
            setErrors({ ...tempErrors });
            console.log(errors);
            return isValid;
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            document.getElementById('boxLoadingContainer').innerHTML = "";
        
            let isValidForm = handleValidation();
        
            if (document.getElementById('idEmail').value!="" && document.getElementById('idFullname').value!="") {
              setButtonText("Sending");
            
              let loader = `<div class="boxDanger">Traitement encours......</div>`;
              document.getElementById('boxLoadingContainer').innerHTML = loader;
            
            // -------------------------------------------------------------------------

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                  })
              }).then((res) => {
                console.log(res)
                if (res.status == 200) {
                  console.log('Response succeeded!')
                  setShowSuccessMessage(true);
                  setShowFailureMessage(false);
                  setButtonText("Send");
                  
                }
              });

              setFullname("");
              setEmail("");
              document.getElementById('idEmail').value="";
              document.getElementById('idFullname').value="";
              document.getElementById('boxLoadingContainer').innerHTML = `<div class="bg-success boxSuccess">Message envoy?? ?? Manuela & Maurice avec succ??s.</div>`;

                fetch('/api/contact1', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        fullname: fullname,
                        subject: subject,
                        message: message,
                    })
                }).then((res) => {
                    console.log('Response received')
                    if (res.status === 200) {
                    
                    }
                })

                
            }
            else
            {
                alert("Veuillez saisir Votre Nom et votre Email svp.");
            }


            // ----------------------------------------------------------------------------------------------------
            


          };



        const saisirFullName=(event)=>{

            let fullname1=document.getElementById("idFullname").value;
            setFullname(fullname1);
        }
        const saisirEmail=(event)=>{

            let fullname1=document.getElementById("idEmail").value;
            setEmail(fullname1);
        }

        const saisirMessage=(event)=>{

            let fullname1=document.getElementById("idMessage").value;
            setMessage(fullname1);
        }

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
                <div className="container container1 p-md-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Maurice & Manuela</h1>
                            <p>La rencontre de l???Ogoou?? et du Bandama ???</p>
                            <p>
                                Lors de leurs ??tudes en terre Gauloise, un prince Akan (Maurice Appia) a fait la rencontre d???une princesse bantou (Manuela).
                            </p>
                            <p>
                                Ils tomb??rent amoureux et au fil du temps, ils devinrent ins??parables.
                            </p>
                            <p>
                                Leur amour grandissant de jour en jour, ils d??cid??rent alors de sceller leur union, en pr??sence de leurs familles et leurs amis.
                            </p>
                            <p>
                                Ils seront heureux de partager ce moment intime avec vous.
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="row py-2 py-md-5 p-2 my-2 my-md-5 p-md-5 form">
                    <div className="col-lg-12 py-2 py-md-4">
                        <h1 style={{"color":"#fff"}}>Serez-vous de la partie ???</h1>
                    </div>
                    <div id="boxLoadingContainer"></div>
                    <form action="" method="POST" style={{"width":"100%"}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div  className="form-group">
                                    <label>Nom & prenom</label>
                                    <input type="text" required id="idFullname" onChange={(event)=>saisirFullName()} value={fullname}  name="fullname" placeholder="Nom & Prenoms" className="form-control" />
                                </div>
                            </div>
                        </div>
                       <div className="row ">
                            <div className="col-md-6">
                                <div  className="form-group">
                                    <label>Adresse email</label>
                                    <input type="email" id="idEmail" required name="email" onChange={(event)=>saisirEmail()} placeholder="votre Email" className="form-control" />
                                    <input type="hidden" name="subject" value="je serais de la partie" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div  className="form-group">
                                    <label>Participation</label>
                                    <select className="form-control" id="idMessage" onChange={(event)=>saisirMessage()} name="message">
                                        <option>Uniquement civil</option>
                                        <option>Uniquement au coutumier</option>
                                        <option>Les deux</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-primary btn_send_contact" onClick={handleSubmit} type="submit">Envoyez</button>
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </SectionAccueil1Stc>
    )
}

export default SectionAccueil1
