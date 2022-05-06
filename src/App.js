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
  color: #212831;
`

const MenuList = styled.ul`
  list-style-type: none;
  overflow: hidden;
`

const MenuText = styled.li`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  display: inline;
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${props => props.active ? 600 : 400};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${props => props.active ? '#212831' : '#535E70'};
`

function App() {
  return (
    <NavigationBar>
      <BrandText>M Group</BrandText>
      <MenuList>
        <MenuText active>Home</MenuText>
        <MenuText>Properties</MenuText>
        <MenuText>Agents</MenuText>
        <MenuText>Blog</MenuText>
        <MenuText>Contacts</MenuText>
      </MenuList>
      <SearchIcon width={23} height={23}></SearchIcon>
    </NavigationBar>
  )
}

export default App;