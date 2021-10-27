import { Description, Link, StyledTile, TileHeader, } from './styled';

const Tile = ({ title, repositoryAdress, demoAdress, description }) => (
    <StyledTile>
        <TileHeader>{title}</TileHeader>
        <Description>{description}</Description>
        <Link href={demoAdress} title={demoAdress} target="_blank" rel="noreferrer">Check out demo!</Link>
        <Link href={repositoryAdress} title={repositoryAdress} target="_blank" rel="noreferrer">Have a look at code!</Link>
    </StyledTile>
);

export default Tile;