import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1216px;
  padding: 32px;
  margin: 66px auto;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const UnorderedList = styled.ul`
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => (theme.colors.scienceBlue)};
  margin: 4px 0px;
  flex-basis: 33%;
`;

export const ListItemText = styled.span`
  color: ${({ theme }) => (theme.colors.slateGray)};
`;