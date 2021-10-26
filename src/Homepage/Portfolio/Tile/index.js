import { Description, Link, StyledTile, TileHeader, } from './styled';

const Tile = ({ title, repositoryAdress, demoAdress, description }) => (
    <StyledTile>
        <TileHeader>{title}</TileHeader>
        <Description>{description}</Description>
        <Link href={demoAdress}>Check out demo!</Link>
        <Link href={repositoryAdress}>Have a look at code!</Link>
    </StyledTile>
);

export default Tile;