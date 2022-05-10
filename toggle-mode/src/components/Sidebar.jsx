


import styled from "styled-components";

const Sidebar = styled.div`
position: absolute;
left: 0%;
right: 94.38%;
top: 0%;
bottom: 0%;
background: ${(props) => (props.type === "light" ? "#FFFFFF" : "#16191C")};
box-shadow: 0px 0px 5px #E5E9F2;
`;
export { Sidebar };