import { ListItem, ListItemText, SectionHeader, UnorderedList, Wrapper } from "./styled";
import skillSetContent from "./skillSetContent";


const SkillSet = () => (
  <Wrapper>
    <SectionHeader>My skillset includes 🛠️</SectionHeader>
    <UnorderedList>
      {skillSetContent.map(skill => (
        <ListItem key={skill.id}><ListItemText>{skill.content}</ListItemText></ListItem>
      ))}
    </UnorderedList>
  </Wrapper>
);

export default SkillSet;