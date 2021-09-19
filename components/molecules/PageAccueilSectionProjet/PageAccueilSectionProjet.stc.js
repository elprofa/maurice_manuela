import Styled from 'styled-components'

const PageAccueilSectionProjetStc=Styled.section`
    .row
    {
        margin:0px !important;
    }
    .divChiffreStat
    {
        @media (min-width: 991px) {
            height:450px;
            overflow:hidden;
        }
    }

    .containerChiffre
    {
        @media (min-width: 991px) {
            margin-top:-180px;
        }
        
    }
`;
export default PageAccueilSectionProjetStc;