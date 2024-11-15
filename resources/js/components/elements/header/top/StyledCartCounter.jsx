import styled from "styled-components";

export const StyledCartCounter = styled.div`
    &:after {
        content: '${({count}) => count}';
        display: ${({count}) => count && 'flex'};
        justify-content: center;
        align-items: center;
    }
`;

StyledCartCounter.defaultProps = {
    count: 0,
};