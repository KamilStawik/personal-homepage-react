import { Description, KeyWord, Link, StyledTile, TileHeader, } from "./styled";

const Tile = ({ title, repositoryAdress, demoAdress, description }) => (

    <StyledTile>
        <TileHeader>{title}</TileHeader>
        <Description>{description}</Description>
        <div>
            <KeyWord>Demo: </KeyWord><Link href={demoAdress}>{demoAdress}</Link>
        </div>
        <div>
            <KeyWord>Code: </KeyWord><Link href={repositoryAdress}>{repositoryAdress}</Link>
        </div>
    </StyledTile>
);

export default Tile;