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
    }

    p
    {
        font-family: 'Lato';
        text-align:center;
    }

    .form
    {
        background:url(/img/img41.jpg);
        background-size:100%;
        background-repeat:no-repeat;

        input,select
        {
            background: transparent;
            color:#fff;
        }
    }
`;

export default SectionAccueil1Stc;