import Styled from 'styled-components';

const SectionAccueilSrc=Styled.section`
    background-image:url(/img/img5.jpg);
    @media (max-width: 767px) {
        background-image:url(/img/img51.jpg);
    }
    @media (max-width: 476px) {
        background-image:url(/img/img52.jpg);
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

    .img_accueil
    {
        max-width:50%;
        margin:auto;
        display:block;

        @media (max-width: 996px) {
            max-width: 100%;
        }
        @media (max-width: 476px) {
            display: none;
        }
    }

    .div_title
    {
        left: 0;
        right: 0;
        position: absolute;
        top: 0;
        
        .text
        {
            max-width: 40%;
            @media (max-width: 996px) {
                max-width: 80%;
            }
            margin: auto;
            border: 0px;
            border-top: 3px solid #ddc893;
            border-bottom: 3px solid #ddc893;
            margin-top: 30px;

            p
            {
                font-family: 'gatsby' !important;
                color: #ddc893;
                font-size: 2rem;
                font-weight: 600;
                margin: 0;
            }

            h2
            {
                font-size: 5rem;
                font-family: 'gatsby' !important;
                font-weight: 600;
                color: #ddc893;

                @media (max-width: 996px) {
                    font-size: 4rem;
                }
            }
        }
    }
      
`;
export default SectionAccueilSrc