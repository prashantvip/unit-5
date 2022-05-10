



import styled from "styled-components";

const Mid = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background:${(props) => (props.type === "light" ? "#F5F6FA" : "#1F2327")};
`;
export { Mid }