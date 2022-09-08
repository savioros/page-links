import styled from "styled-components";

export const LinkItem = styled.a`
    text-align: center;
    padding: 20px 250px;
    border-radius: 10px;
    background-color: #C8C6C6;
    font-weight: bold;
    transition: .2s ease-out;

    &:hover{
        background-color: #A6A6A4;
    }

    @media(max-width: 700px){
        &{
            padding: 20px 200px;
        }
    }

    @media(max-width: 500px){
        &{
            padding: 20px 150px;
        }
    }

    @media(max-width: 375px){
        &{
            padding: 20px 130px;
        }
    }

    @media(max-width: 320px){
        &{
            padding: 20px 100px;
        }
    }
`