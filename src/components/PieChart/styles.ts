import styled from "styled-components";

interface ILegendProps {
    color: string
};

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};

    border-radius: 7px;

    display: flex;

    overflow: auto;
`;
export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 170px;
    padding-right: 12px;
    overflow-y: scroll;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    
    > div {
        background-color: ${props => props.color};
        
        width: 45px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
`;