import { useEffect, useState } from 'react';
import { GitHubIcon } from "./GitHubIcon/index.js";
import SectionHeader from "../../common/SectionHeader/index.js";
import Tile from './Tile/index.js';
import { Subtitle, TilesWrapper } from "./styled.js";

const Portfolio = () => {

    const [response, setResponse] = useState(null);
    const demoDelay = 2000;

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.github.com/users/KamilStawik/repos")
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(response => {
                    setResponse(response)
                    console.log(response)
                })
                .catch(error =>
                    console.log(error));
        }, demoDelay);
    }, []);

    return (
        <>
            <GitHubIcon />
            <SectionHeader title={"Portfolio"} portfolio />
            <Subtitle>My recent projects</Subtitle>
            <TilesWrapper>
                {response &&
                    response.map(repository => (
                        <Tile
                            key={repository.id}
                            title={repository.name}
                            repositoryAdress={repository.html_url}
                            demoAdress={`https://kamilstawik.github.io/${repository.name}/`}
                            description={repository.description}
                        />
                    ))
                }
            </TilesWrapper>
        </>
    );
}

export default Portfolio;