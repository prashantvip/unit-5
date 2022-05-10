

import styled from "styled-components";

const Card = styled.div`
position: absolute;
left: 8.47%;
right: 60.14%;
top: 11.04%;
bottom: 38.77%;
background: ${(props) => (props.type === "light" ? "#FFFFFF" : "#292E33")};
box-shadow: 0px 1px 4px #E5E9F2;
border-radius: 5px;
`;
export { Card };