import { useEffect, useState } from 'react';
import { GitHubIcon } from "./GitHubIcon/index.js";
import SectionHeader from "../../common/SectionHeader/index.js";
import { Subtitle } from "./styled.js";

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

            {response &&
                response.map(repository => (
                    <li key={repository.id}>{repository.name},  {repository.html_url}, {repository.description}, {`https://kamilstawik.github.io/${repository.name}/`}</li>
                ))
            }
        </>
    );
}

export default Portfolio;