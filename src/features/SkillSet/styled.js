import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1216px;
  padding: 32px;
  margin: 66px auto;
`;

export const SectionHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  margin: 0px 0px 48px 0px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => (theme.colors.mineShaft)};
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