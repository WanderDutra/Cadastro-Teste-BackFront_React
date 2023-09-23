import styled from "styled-components";
import Background from '../../assets/bg image.svg'



export const Box = styled.div`
background: url("${Background}");
background-size: cover ;
display:flex;
flex-direction:column ;
align-items:center;
height:100%;
min-height:100vh;

gap:40px; 



`;
export const Image = styled.img`
margin: 30px 42px;
width: 328.92px;
height: 176.26px;

`;


export const User = styled.li`
display:flex;
justify-content:space-around;
font-size: 24px;
font-weight: 400;
line-height: 28px;
color: #FFFFFF;
align-items:center;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius:14px;
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border:none;
outline:none;
margin-top:10px;
button{
background:none;
border:none;
cursor: pointer;

}
`

