import Styled  from 'styled-components';
const PageReferencementSectionTarifStc=Styled.section`
    .best-seller .card
    {
        position:relative;
        background:#f55947;

        h5,p,h1,h2{
            color:#fff !important;
        }

        ul.package-ul li
        {
            color:#000 !important;
        }
        
    }

    .best-seller-div
    {
        box-shadow: 0px 0px 6px #000;
        background: #f55947;
        width: 90px;
        transform: rotate(
    45deg);
        z-index: 999;
        position: absolute;
        right: 0;
        text-align: center;
        color: #fff;
        font-weight: 600;
        top: 20px;
    }
`;
export default PageReferencementSectionTarifStc;