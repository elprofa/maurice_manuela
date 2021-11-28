import Styled from "styled-components";
import { theme } from "../../../theme";
const HeaderStc=Styled.div`
    background-color:#0c1524;
   
    .toggle
    {
        color:#ddc893;
    }
    .logo
    {
        font-size: 2.5rem;
        font-family: 'gatsby';
        line-height: 50px;
        top: 20px;
        font-weight:600;
        color:#ddc893;

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
            color:#ddc893;
            font-family:"gatsby";
            font-size:1.6rem;
            @media (min-width: 991px) {
                color:#ddc893;
            }
            
        }
        font-weight:bold;
    }
`;

export default HeaderStc;