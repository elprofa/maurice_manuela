import Styled from 'styled-components'

const CardClientStc=Styled.div`
    text-align:left;

    .card
    {
        /* box-shadow: 0px 0px 16px #ccc; */
        border: 0px;
        min-height: 300px;
        background: #ccc;
        border-radius:0px;
        h4 
        {
            font-size: 30px;
            font-weight: 600;
            vertical-align: middle;
        }
    }
   
   .description
   {
       font-weight:600;
   }
   &.one .card
   {
       background:#ede6e2;
       color: #64c5ea;
    span{
        color:#2d519d !important;
    }
   }
   &.two .card
   {
       background:#2d519d;
       color: #fff;
       span{
            color:#61bfe6 !important;
        }
   }
   
`;
export default CardClientStc;