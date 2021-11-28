import Styled from 'styled-components'

const MySectionDateStc=Styled.div`
    
    min-height:100vh;
    width:100%;
    background:url(/img/motif2.jpg);
    

    .icon
    {
        margin: auto;
        display: block;
    }

    h1
    {
        font-size: 4rem;
        font-family: 'Dancing Script';
        text-align:center;
        background: #0c1524;
        max-width: 520px;
        font-weight:600;
        margin: auto;
        margin-top: -20px !important;
    }

    .p_container
    {
        background:#192a48;
        min-height:400px;
       
    }

    .ville
    {
        font-family: 'Lato';
        font-weight: 900;
        font-size: 4rem;
        color: #ddc893;
    }

    .jours
    {
        text-transform: uppercase;
        font-size: 2rem;
        color: #ddc893;
        font-weight: 600;
        letter-spacing: 0.5em;
        padding-top:15px;
        padding-bottom:15px;
    }

    .date, .annee
    {
        font-weight: 600;
        font-size: 3rem;
        color: #ddc893;
        text-transform: uppercase;
        text-align:center;
    }
    .annee
    {
        font-size: 4rem;
    }

    .container_date,.annee {
        border: 2px solid #ddc893;
    }
    .annee
    {
        border-top:0px;
    }

    .btn
    {
        background: #0c1524;
        border-radius: 0px;
        min-height: 68px;
        color:#ddc893;
        font-weight: 600;
        font-size: 2rem;
    }
`;
export default MySectionDateStc;