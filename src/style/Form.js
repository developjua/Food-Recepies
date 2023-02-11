import styled from "styled-components";

const FormStyle = styled.form`
margin: 0rem 12rem;

div{
    position:relative;
    width:100%;
}
input{
    border:none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:100%;
    height:3rem;
    margin-top:1rem;
}
svg{
    position:absolute;
    top:65%;
    left:0%;
    transform: translate(100%,-50%);
    color:white;

}`;

export default FormStyle;