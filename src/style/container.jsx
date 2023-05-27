import {styled} from "styled-components"

export const Container = styled.div`
    width: 50%;
    min-height: 500px;
    background-color: lightgray;
    border: 1px solid darkgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    @media (max-width: 900px) {
        width: 70%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`