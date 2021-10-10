import { ListItem, ListItemText, ListBullet, UnorderedList, Wrapper } from './styled';
import SectionHeader from '../../common/SectionHeader';

const SkillSet = ({ title, content }) => (

  <Wrapper>
    <SectionHeader title={title} />
    <UnorderedList>
      {content.map(skill => (
        <ListItem key={skill.id}>
          <ListBullet />
          <ListItemText>{skill.content}</ListItemText>
        </ListItem>
      ))}
    </UnorderedList>
  </Wrapper>

);

export default SkillSet;