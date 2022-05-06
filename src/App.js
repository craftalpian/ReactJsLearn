import './App.css';
import { ReactComponent as SearchIcon } from './assets/images/SearchIcon.svg';
import styled from 'styled-components';

const NavigationBar = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const BrandText = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  display: flex;
  text-align: center;
  align-items: center;
  margin-bottom: 0;
  color: #212831;
`

const MenuList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding-left: 0;
  overflow: hidden;
`

const MenuText = styled.li`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  margin: 0px 21px;
  display: inline;
  font-family: 'Inter';
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`

const MenuTextHref = styled.a`
  font-weight: ${props => props.active ? 600 : 400};
  color: ${props => props.active ? '#212831' : '#535e70'};
  text-decoration: none;
  &:hover{
    color: red;
  }
`

const MenuTextAtom = (props) => <MenuText><MenuTextHref href='#' {...props}>{props.children}</MenuTextHref></MenuText>;
const MenuComponent = () => (
  <MenuList>
    <MenuTextAtom active>Home</MenuTextAtom>
    <MenuTextAtom>Properties</MenuTextAtom>
    <MenuTextAtom>Agents</MenuTextAtom>
    <MenuTextAtom>Blog</MenuTextAtom>
    <MenuTextAtom>Contacts</MenuTextAtom>
  </MenuList>
);

function App() {
  return (
    <NavigationBar className='container'>
      <BrandText>M Group</BrandText>
      <MenuComponent></MenuComponent>
      <SearchIcon width={23} height={23}></SearchIcon>
    </NavigationBar>
  )
}

export default App;