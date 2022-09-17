import Section from './atoms/Section';
import Nav from './atoms/Nav';
import ToggleBtn from './atoms/ToggleBtn';


const TopNav = () => {
  return (
    <Section topPageSection={true}>
      { false ? <Nav topPageNav={true}/> : <ToggleBtn topPageToggle={true}>+</ToggleBtn>}
    </Section>
  );
};


export default TopNav;
