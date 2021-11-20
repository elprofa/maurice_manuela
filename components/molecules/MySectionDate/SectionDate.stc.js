import Styled from 'styled-components'

const MySectionDateStc=Styled.div`
    
    min-height:100vh;
    width:100%;
    background-size:100% auto;

    h1
    {
        font-size: 5rem;
        font-family: 'Dancing Script';
        text-align:center;
    }

    .div_date
    {
        background:url(/img/img41.jpg);
        background-size:100%;
    }

    .ville
    {
        font-family: 'Lato';
        font-weight: 900;
        font-size: 2rem;
        color: #fff;
    }

    .jours
    {
        text-transform: uppercase;
        letter-spacing: 0.8em;
        font-size: 0.8em;
        color:#fff;
    }

    .date, .annee
    {
        font-family: 'Lato';
        font-weight: 600;
        font-size: 2.5rem;
        color: #fff;
        text-transform: uppercase;
        text-align:center;
    }

    .container_date,.annee {
        border: 1px solid #fff;
    }
    .annee
    {
        border-top:0px;
    }

    .btn
    {
        background: rgb(0,0,0,.7);
        color: #fff;
        border-radius: 0px;
    }
`;
export default MySectionDateStc;