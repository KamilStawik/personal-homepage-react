import { ListItem, ListItemText, ListBullet, UnorderedList, Wrapper } from './styled';
import SectionHeader from '../../common/SectionHeader';

const SkillsSection = ({ title, content }) => (

  <Wrapper>
    <SectionHeader title={title} />
    <UnorderedList>
      {content.map(skill => (
        <ListItem key={skill.id}>
          <ListBullet />
          <ListItemText important={skill.important}>{skill.content}</ListItemText>
        </ListItem>
      ))}
    </UnorderedList>
  </Wrapper>

);

export default SkillsSection;