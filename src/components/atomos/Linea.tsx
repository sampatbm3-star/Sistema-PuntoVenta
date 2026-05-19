import styled from "styled-components";

export const Linea = styled.div`
    background-color: ${({ theme }) => theme.text};
    height: 2px;
    border-radius: 15px;
    margin: 20px 0;
    position: relative;
    text-align: center;
    span{
        top: -10px;
        position: absolute;
        background-color: #fff;
        padding: 0 5px;
        font-weight: 700;;
    }
    
`