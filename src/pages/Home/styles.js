import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);
    width: 90vw;
    max-width: 1200px;
    height: 750px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 700px){
        &{
            box-shadow: none;
            background-color: transparent;
        }
    }
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    div{
        background-color: lightgray;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    h2{
        font-weight: bold;
    }

    p{
    }

    nav{
        display: flex;
        gap: 5px;
    }
`

export const Info = styled.div`
    nav{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`

export const Projects = styled.div`
    padding: 10px;

    div{
        display: flex;
        justify-content: space-between;
        font-weight: bold;

        a{
            color: #ddd;
        }
    }

    ul{
        margin-top: 20px;
        padding: 15px 0;
        display: flex;
        gap: 20px;
        max-width: 580px;
        
        @media(max-width: 700px){
            &{
                width: 480px;
                overflow-x: scroll;
            }
        }

        @media(max-width: 500px){
            &{
                width: 370px;
            }
        }

        @media(max-width: 375px){
            &{
                width: 330px;
            }
        }

        @media(max-width: 320px){
            &{
                width: 280px;
            }
        }
    }
`