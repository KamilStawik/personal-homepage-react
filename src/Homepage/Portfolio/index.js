import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GitHubIcon from './../../common/GitHubIcon';
import SectionHeader from '../../common/SectionHeader/index.js';
import Tile from './Tile/index.js';
import { Subtitle, TilesWrapper } from './styled.js';
import { selectRepositories, fetchRepositoriesFromApi } from '../homepageSlice.js';

const Portfolio = () => {

    const dispatch = useDispatch();
    const [repositories] = useSelector(selectRepositories);
    console.log(repositories);
    useEffect(() => dispatch(fetchRepositoriesFromApi()), []);

    return (
        <>
            <GitHubIcon />
            <SectionHeader title={"Portfolio"} portfolio />
            <Subtitle>My recent projects</Subtitle>
            <TilesWrapper>
                {repositories &&
                    repositories.map(repository => (
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