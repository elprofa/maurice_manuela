import Styled from "styled-components";
import { theme } from "../../../theme";
const HeaderStc=Styled.div`
    .block-menu.collapse.navbar-collapse {
        justify-content: end;
    }

    .block-menu ul li
    {
        @media (min-width: 991px) {
            margin:auto 10px;
        }

        font-weight:bold;
    }

    nav.navbar
    {
        border:0px;
    }

    .navbar-expand-md .navbar-nav .nav-link {
        @media (min-width: 991px) {
            color: #fff;
        }
        
        color:#333;
    }

    .toggle
    {
        font-size:30px;
    }
`;

export default HeaderStc;