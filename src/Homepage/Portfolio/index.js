import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GitHubIcon from './../../common/GitHubIcon';
import SectionHeader from '../../common/SectionHeader/';
import Tile from './Tile';
import Button from './../../common/Button';
import LoadingCircle from './LoadingCircle'
import DangerIcon from './DangerIcon';
import { Wrapper, Subtitle, TilesWrapper, ErrorText } from './styled.js';
import { selectRepositories, fetchRepositoriesFromApi, selectApplicationStatus } from './../homepageSlice.js';

const Portfolio = () => {

    const dispatch = useDispatch();
    const repositories = useSelector(selectRepositories);
    const applicationStatus = useSelector(selectApplicationStatus);
    const porfolioRepositories =["minesweeper", "personal-homepage-react", "movie-browser", "todo-list-react"];

    // eslint-disable-next-line
    useEffect(() => dispatch(fetchRepositoriesFromApi()), []);

    return (
        <Wrapper>
            <GitHubIcon />
            <SectionHeader title={"Portfolio"} portfolio />
            <Subtitle>My recent projects</Subtitle>
            {applicationStatus === "success" &&
                <TilesWrapper>
                    {repositories.map(repository => (
                        porfolioRepositories.includes(repository.name) &&
                        <Tile
                            key={repository.id}
                            createdDate={repository.created_at}
                            title={repository.name}
                            repositoryAdress={repository.html_url}
                            demoAdress={`https://kamilstawik.github.io/${repository.name}/`}
                            description={repository.description}
                        />
                    ))}
                </TilesWrapper>
            }
            {applicationStatus === "loading" &&
                <>
                    <Subtitle loadingText>Please wait, projects are being loaded...</Subtitle>
                    <LoadingCircle />
                </>
            }
            {applicationStatus === "error" &&
                <>
                    <DangerIcon />
                    <ErrorText>Ooops! Something went wrong...</ErrorText>
                    <Subtitle errorText>Sorry, failed to load Github projects.</Subtitle>
                    <Subtitle errorText>You can check them directly on Github.</Subtitle>
                    <Button buttonText={"Go to Github"} gitButton />
                </>
            }
        </Wrapper>
    );
}

export default Portfolio;