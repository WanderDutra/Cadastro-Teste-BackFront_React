import styled from "styled-components";


export const Button = styled.button`

font-size: 17px;
font-weight: 700;
line-height: 28px;
color: #FFFFFF;
background: #000000CC;
width: 342px;
height: 74px;
border-radius: 14px;
margin-top: 50px;
cursor: pointer;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
&:hover{
opacity: 80%;
}
&:active{
    color:#a607ff;

}
${ props => props.isTransparent &&`

background:none;
margin-top: 100px;
border: #fff solid 1px;

`}


`;
