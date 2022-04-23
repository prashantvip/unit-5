import styled from "styled-components";

const Button = styled.button`
   border: 1px
      ${(props) => {
          return props.border;
      }}
      #c91a1a;
   background: ${(props) => {
      return props.bg;
   }};
   font-size: 12px;
   color: ${(props) => {
      if (!props.color) {
         return props.bg === "transparent" ? "black" : "white";
      } else{
         return props.color;
      }
   }};
   padding: 10px;
   margin-top: 2%;
   cursor: pointer;
   margin-left: 1%;
   
`;
export default Button;