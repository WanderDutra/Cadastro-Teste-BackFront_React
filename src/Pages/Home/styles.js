import styled from "styled-components";
import Background from '../../assets/bg image1.svg'



export const Box = styled.div`
background: url("${Background}");
background-size: cover ;
display:flex;
flex-direction:column ;
align-items:center;
height:100vh;

gap:40px; 



`;
export const Image = styled.img`
margin: 30px 42px;
width: 328.92px;
height: 176.26px;

`;



export const Inputlabel = styled.p`
font-style: normal;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
font-weight:bold;
color: #EEEEEE;
margin-left:25px;
`;
export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius:14px;
font-size: 24px;
font-weight: 400;
line-height: 28px;
color: #FFFFFF;
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border:none;
outline:none;
margin-bottom:34px;

`;
