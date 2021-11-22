import Styled from "styled-components";
import { theme } from "../../../theme";
const HeaderStc=Styled.div`
    background-color:#192a48;
    *{
        color:#fff !important;
    }
    .logo
    {
        font-size: 1.5rem;
        font-family: 'Dancing Script';
        line-height: 50px;
        top: 20px;
        font-weight:600;

        div
        {
            background-image:url('/img1.jpg');
        }
    }

    .block-menu.collapse.navbar-collapse {
        justify-content: end;
    }

    
    .block-menu ul li
    {
        margin:15px;
        height:55px !important;

        @media (max-width: 767px)
        {
            height:5px !important;
        }

        @media (max-width: 991px)
        {
            text-align:right;
            width:100%;
        }
       
        a 
        {
            color:#333;
            @media (min-width: 991px) {
                color:#333;
            }
            
        }
        font-weight:bold;
    }
`;

export default HeaderStc;