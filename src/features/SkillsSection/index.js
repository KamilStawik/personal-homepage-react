import { ListItem, ListItemText, SectionHeader, UnorderedList, Wrapper } from "./styled";

const SkillSet = ({ title, content }) => (
  <Wrapper>
    <SectionHeader>{title}</SectionHeader>
    <UnorderedList>
      {content.map(skill => (
        <ListItem key={skill.id}><ListItemText>{skill.content}</ListItemText></ListItem>
      ))}
    </UnorderedList>
  </Wrapper>
);

export default SkillSet;