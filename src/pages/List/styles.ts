import styled from 'styled-components';

export const Container = styled.div`

`

export const Content = styled.main`

`

export const Filters = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 10px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.color.white};

        margin: 0 10px;

        transition: all .5s;
        opacity: .4;
        transform: scale(.9,.9);

        &:hover {
            opacity: 1;
            transform: scale(1.1, 1.1);
        }
    }
    
    .tag-filter::after {
        content: '';
        display: block;
        min-width: 50px;
        max-width: 75%;
        margin: 2.5px auto;
        margin-right: 5px;
        margin-left: 10px;
    }

    .tag-filter:hover:after {
        transition: all .5s;
        
        max-width: 90%;
        margin-right: auto;
        margin-left: 2.5px;
    }

    .tag-filter-recurrent::after {
        border-bottom: 10px solid ${props => props.theme.color.success}
    }

    .tag-filter-eventual::after {
        border-bottom: 10px solid ${props => props.theme.color.warning}
    }

    .tag-active {
        opacity: 1;
        transform: scale(1.05, 1.05);

        &:hover {
            opacity: .7;
            transform: scale(.9, .9);
        }
    }
`;
