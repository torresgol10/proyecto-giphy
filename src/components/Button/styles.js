import { Link as LinkWouter } from "wouter"
import styled from '@emotion/styled'

const SIZES = {
    small: "1.2rem",
    medium: "1.5rem",
    large: "2rem",
}

const getFormSize = (props) => {
    const size = SIZES[props.size];
    if(!size){
        console.warn(`This size is not correct. Please use one of the following: ${SIZES.join(", ")}`);
        return SIZES.small;
    }

    return size;
}

export const Link = styled(LinkWouter)`
    border: 1px solid transparent;
    padding: .5rem 1rem;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.textColor};
    cursor: pointer;
    font-size: ${getFormSize};
    &[disabled] {
        opacity: .3;
        pointer-events: none;
    }
    &:hover {
        background-color: var(--brand-color_6);
    }
`
export const Button = Link.withComponent('button')