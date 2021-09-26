import Styled from 'styled-components'

const TitleStc=Styled.div`
    h1
    {
        @media (min-width: 991px) {
            font-size:48px;
        }
        font-size:35px;
        font-weight:900;
        span
        {
            position:relative;
            z-index:3
        }
    }
    h2
    {
        font-size: 30px;
        font-weight: 600;
    }
    h5
    {
        font-weight:900;
    }
    .trait
    {
        border-bottom: 4px solid #1530aa;
        width: 30px;
        display: inline-block;
        margin-right:10px;
        vertical-align: middle;
    }

    .imgComposant
    {
        position: absolute;
        left: -50px;
        top: 10px;
        width: 130px;
        z-index:0;
    }
`;
export default TitleStc;