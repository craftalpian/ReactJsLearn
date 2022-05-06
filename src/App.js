import './App.css';
import { ReactComponent as SearchIcon } from './assets/images/SearchIcon.svg';
import styled from 'styled-components';

const Body = styled.body`
  background-color: #F5F9FF;
`

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
  text-align: center;
`

const MenuTextHref = styled.a`
  font-weight: ${props => props.active ? 600 : 400};
  color: ${props => props.active ? '#212831' : '#535e70'};
  text-decoration: none;
  margin-right: 0;
`

const MenuText = styled.li`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

  margin: 0px 21px;
  display: inline;
  font-family: 'Inter';
  font-style: normal;
  font-size: 16px;
  text-align: center;

  &:hover ${MenuTextHref}{
    color: #434b58 !important;
  }
`

const ContentBody = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: pink;
`

const LeftContent = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: red;

  h1{
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 86px;
    /* or 123% */

    letter-spacing: 0.01em;

    color: #212831;
  }

  p{
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */


    color: #535E70; 
  }
`

const CTAButton = styled.button`
  height: 58px;
  overflow: hidden;
`

const RightContent = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: green;
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
    <Body className='container-fluid'>
      <NavigationBar className='container mt-4'>
        <BrandText>M Group</BrandText>
        <MenuComponent></MenuComponent>
        <SearchIcon width={23} height={23}></SearchIcon>
      </NavigationBar>
      <ContentBody className='container mt-5'>
        <LeftContent>
          <h1>Architects <br />with different approach</h1>
          <p className='mt-4'>Find your home very easily by using our real estate platform. We makes home finding so easy and flexible.</p>
        </LeftContent>
        <RightContent></RightContent>
      </ContentBody>
    </Body>
  )
}

export default App;