import Section from './atoms/Section';
import Nav from './atoms/Nav';
import ToggleBtn from './atoms/ToggleBtn';


const HomeNav = () => {
  return (
    <Section homeNav={true}>
      { false ? <Nav/> : <ToggleBtn>+</ToggleBtn>}
    </Section>
  );
};


export default HomeNav;
