import Styled from 'styled-components'

const CardPackageStc=Styled.div`
    
    @media (min-width: 991px) {
        height:100%;

    }
    h5
    {
        font-weight: 600;
        font-size: 23px;
    }
    .card
    {
        box-shadow: 0px 0px 10px #ccc;
        @media (min-width: 991px) {
            height:100%;
        
        }

        button
        {
            @media (min-width: 991px) {
                position: absolute;
                /* left: 0; */
                /* right: 0; */
                bottom: 20px;
                width: 80%;
                display: block;
                margin: auto;
            }
            
        }
        
    }
`;
export default CardPackageStc;