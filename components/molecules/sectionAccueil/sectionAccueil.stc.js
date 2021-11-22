import Styled from 'styled-components';

const SectionAccueilSrc=Styled.section`
    background-image:url(/img/img5.jpg);
    @media (max-width: 767px) {
        background-image:url(/img/img51.jpg);
    }
    @media (max-width: 476px) {
        background-image:url(/img/img52.jpg);
    }

    .text
    {
        @media (min-width: 476px) {
            border-top: 2px solid #fff;
            border-bottom: 2px solid #fff;
        }
        
    }
    color:rgba(9, 162, 255, 0.85);

    min-height: 680px;
    position: relative;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;

    h2
    {
        font-size: 5rem;
        font-family: 'Dancing Script';
        color:#ddc893;
    }
    p
    {
        color:#fff !important;
        font-family:'Lato';
    }
      
`;
export default SectionAccueilSrc