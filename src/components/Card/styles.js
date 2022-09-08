import styled from "styled-components";

export const CardItem = styled.li`
    width: 180px;
    min-width: 180px;
    height: 150px;
    border-radius: 20px;
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.2);
    transition: .2s ease-out;
    
    img{
        border-radius: 20px;
        height: 100%;
    }

    &:hover{
        transform: scale(1.15, 1.15);
    }
`