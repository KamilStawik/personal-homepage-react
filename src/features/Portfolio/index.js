import { useEffect, useState } from 'react';
import { GitHubIcon } from "./GitHubIcon/index.js";
import SectionHeader from "../../common/SectionHeader/index.js";
import { Subtitle } from "./styled.js";

const Portfolio = () => {

    const initialData = [
        {
            id: 1,
            name: "test1",
            html_url: "test1",
        },
        {
            id: 2,
            name: "test2",
            html_url: "test2",
        },
    ];

    const [response, setResponse] = useState(initialData);
    const [appStatus, setAppStatus] = useState("loading");
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
                .then(setAppStatus("succes"))
                .catch(error =>
                    console.log(error));
        }, demoDelay);
    }, []);

    return (
        <>
            <GitHubIcon />
            <SectionHeader title={"Portfolio"} portfolio />
            <Subtitle>My recent projects</Subtitle>

            {appStatus === "succes" &&
                response.map(repository => (
                    <li key={repository.id}>{repository.name},  {repository.html_url}</li>
                ))
            }
        </>
    );
}

export default Portfolio;