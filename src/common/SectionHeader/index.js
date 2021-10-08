import { StyledHeader } from './styled';

const SectionHeader = ({ title, portfolio }) => (
    <StyledHeader portfolio={portfolio}>{title}</StyledHeader>
);

export default SectionHeader;