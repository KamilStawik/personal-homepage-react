import { GitHubIcon } from "./GitHubIcon/index.js";
import SectionHeader from "../../common/SectionHeader/index.js";
import { Subtitle } from "./styled.js";

const Portfolio = () => (
    <>
        <GitHubIcon />
        <SectionHeader title={"Portfolio"} portfolio />
        <Subtitle>My recent projects</Subtitle>
    </>
);

export default Portfolio;