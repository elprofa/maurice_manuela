import Styled from 'styled-components';

const SectionAccueil1Stc=Styled.div`

    h1
    {
        font-size: 5rem;
        font-family: 'Dancing Script';
        text-align:center;
        color: #ddc893 !important;
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
        @media (min-width: 476px) {
            background:url(/img/img41.jpg);
            background-size:100%;
            background-repeat:no-repeat;
        }
       

        input,select
        {
            background: transparent;
            color:#fff;
        }
    }
`;

export default SectionAccueil1Stc;