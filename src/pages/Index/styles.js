import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: hidden;
    background-size: cover;
    padding: 25px 20px;
    background: #2193b0;
    background: -webkit-linear-gradient(to top,#c0e0d2,#73b198);
    background: linear-gradient(to top,#c0e0d2,#73b198);
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
`;

export const Description = styled.h2`
    font-size: 1rem;
    color: #fffeee;
    text-align: center;
    margin-bottom: 20px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 30px;

    a {
        width: 300px;
        height: 45px;
        margin-bottom: 10px;
        border-radius: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background: #73b198;
        color: #fff;
        font-weight: 600;
        font-size: .9rem;
    }
`;