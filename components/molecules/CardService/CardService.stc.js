import Styled from 'styled-components'

const CardServiceStc=Styled.div`
    text-align:center;
    .card
    {
        border-radius: 30px;
        box-shadow: 0px 0px 16px #ccc;
        border:0px;
        @media (min-width: 991px) {
            min-height: 390px;
        }

        .card-body {
            
            padding: 10px;
        }
    }
    span.icon
    {
        font-size: 40px;
        display: block;
        margin: auto;
        color: #1530aa;
    }

    button
    {
        @media (min-width: 991px) {
            background: #1530aa;
            color: #fff;
            position: absolute;
            bottom: 15px;
            left: 0;
            right: 0;
            display: block;
            margin: auto;
            width: 20%;
        }
    }


`;
export default CardServiceStc;