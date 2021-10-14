import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GitHubIcon from './../../common/GitHubIcon';
import SectionHeader from '../../common/SectionHeader/';
import Tile from './Tile';
import LoadingCircle from './LoadingCircle'
import { Wrapper, Subtitle, TilesWrapper } from './styled.js';
import { selectRepositories, fetchRepositoriesFromApi, selectApplicationStatus } from '../homepageSlice.js';

const Portfolio = () => {

    const dispatch = useDispatch();
    const repositories = useSelector(selectRepositories);
    const applicationStatus = useSelector(selectApplicationStatus);
    
    useEffect(() => dispatch(fetchRepositoriesFromApi()), []);

    return (
        <Wrapper>
            <GitHubIcon />
            <SectionHeader title={"Portfolio"} portfolio />
            <Subtitle>My recent projects</Subtitle>
            {applicationStatus === "success" &&
                <TilesWrapper>
                    {repositories.map(repository => (
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
            }
            {applicationStatus === "loading" &&
                <>
                    <Subtitle loadingText>Please wait, projects are being loaded...</Subtitle>
                    <LoadingCircle />
                </>
            }
            {applicationStatus === "error" &&
                <>
                    <Subtitle loadingText>Uwaga ERROR</Subtitle>
                    <LoadingCircle />
                </>
            }
        </Wrapper>
    );
}

export default Portfolio;