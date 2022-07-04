import { COLORS } from "./constants";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 20px;
        color: ${COLORS.dark};
   }
   #root{
       margin:0 auto;
   }
   ul {
    list-style-type: none;
   }
`;
