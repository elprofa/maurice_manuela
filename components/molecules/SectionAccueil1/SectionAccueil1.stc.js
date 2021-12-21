import Styled from 'styled-components';

const SectionAccueil1Stc=Styled.div`

    background:url(/img/motif2.jpg);

    .container.container1 {
        background: #0c1524!important;
        border: 4px solid #ddc893;
    }

    h1
    {
        font-size: 4rem;
        font-family: 'gatsby';
        text-align:center;
        max-width: 520px;
        font-weight:600;
        margin: auto;
        color:#ddc893 !important;
    }
    p
    {
        line-height: 30px !important;
        font-family:'gatsby';
        font-size: 2rem;
        font-weight:600;
        color:#ddc893 !important;
        line-height: 1.4em !important;
    }
    .image
    {
        width: 300px;
        height:300px;
        overflow: hidden;
        border-radius: 100%;
        margin:auto;
        @media (max-width: 476px) {
            width: 200px;
            height:200px;

            img
            {
                width: 200px !important; 
            }
        }
    }

    p
    {
        font-family: 'Lato';
        text-align:center;
    }

    .form
    {
        @media (min-width:996px){
            background-image: url(/img/bg3.jpg);
            background-size: 100% auto;
            min-height: 625px;
            background-repeat:no-repeat;
        }
        @media (min-width:767px) and (max-width:995px){
            background-image: url(/img/capture1.png);
            background-size: 100% auto;
            min-height: 625px;
            background-repeat:no-repeat;
        }

        @media (min-width:478px) and (max-width: 766px)
        {
            background-image: url(/img/capture2.png);
            background-size: 100% auto;
            min-height: 625px;
            background-repeat:no-repeat;
        }
        @media (max-width: 477px)
        {
            background-image: url(/img/capture.png);
            background-size: 100% auto;
            min-height: 625px;
            background-repeat:no-repeat;
        }

        input,select
        {
            background: transparent;
            color:#ddc893;
            font-size:1.5rem;
            font-weight:600 !important;
        }

        button
        {
            font-size:1.5rem;
            font-weight:600 !important;
        }
    }

    .container1
    {
        background: #0c1524!important;
        border: 4px solid #ddc893;
    }

    .btn_send_contact
    {
        background: #d7c28e;
        border-radius: 0px;
        border-color: #192a48;
        color: #192a48;
    }

    form   
    {
        color: #d7c28e;
        font-weight: 600;
        font-size: 1.5rem;

        input,select,button {
            font-weight: 600;
            font-size: 1.5rem;
        }
        select#idMessage option {
            color: #000;
            font-weight: 600;
        }
    }

    
`;

export default SectionAccueil1Stc;