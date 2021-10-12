import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GitHubIcon from './../../common/GitHubIcon';
import SectionHeader from '../../common/SectionHeader/';
import Tile from './Tile';
import LoadingCircle from './LoadingCircle'
import { Wrapper, Subtitle, TilesWrapper } from './styled.js';
import { selectRepositories, fetchRepositoriesFromApi } from '../homepageSlice.js';

const Portfolio = () => {

    const dispatch = useDispatch();
    const [repositories] = useSelector(selectRepositories);
    console.log(repositories);
    useEffect(() => dispatch(fetchRepositoriesFromApi()), []);

    return (
        <Wrapper>
            <GitHubIcon />
            <SectionHeader title={"Portfolio"} portfolio />
            <Subtitle>My recent projects</Subtitle>
            {repositories ?
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
                :
                <>
                    <Subtitle loadingText>Please wait, projects are being loaded...</Subtitle>
                    <LoadingCircle />
                </>
            }
        </Wrapper>
    );
}

export default Portfolio;