import styled from "@emotion/styled";
import { Link } from "wouter";
import { bps } from "styles";

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;
  margin-bottom: 0.7rem;
  margin-top: 0.6rem;

  ${bps.greaterThenMobile} {
    text-align: right;
  }
`
export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  ${bps.greaterThenMobile} {
    justify-content: flex-end;
  }
`
const NEDD_WRITE_COLOR = [3, 4]
const generateMultiColorCategory = (props) => {
  const color = props.index % 6 + 1;
  const needWhite = NEDD_WRITE_COLOR.includes(color);
  const colorText = needWhite ? "white" : "var(--theme-body-bg)";

  return `color: ${colorText};
        background-color: var(--brand-color_${color});`;
}

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  ${generateMultiColorCategory}
`

export const CategoryListItemLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
`