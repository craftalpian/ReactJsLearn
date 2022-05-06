import './App.css';
import { ReactComponent as SearchIcon } from './assets/images/SearchIcon.svg';
import { ReactComponent as SmallRightIcon } from './assets/images/SmallRightIcon.svg';
import { ReactComponent as SmallPlayIcon } from './assets/images/SmallPlayIcon.svg';
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
    color: #343c49 !important;
  }
`

const ContentBody = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
`

const LeftContent = styled.div`
  overflow: hidden;
  width: 100%;

  h1{
    text-align: left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 86px;
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

    color: #535E70; 
  }
`

const ButtonDiv = styled.div`
  margin-top: 50px;
  display: flex;
`

const CTAButton = styled.a`
  background-color: #195AFF;
  border-radius: 6px;
  padding: 0px 27px;
  text-align: center;
  display: flex;
  
  &:hover{
    background-color: #1144c5 !important;
    text-decoration: none;
  }

  h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 21px 10px 21px 0px;
    margin: 0px;

    color: #FFFFFF;
  }
`

const OrangeButton = styled.a`
  overflow: hidden;
  display: flex;
  text-decoration: none;

  div{
    height: 100%;
    background-color: #FE6543;
    border-radius: 6px;
    padding: 0px 22px;
    margin: 0px;
    display: flex;
    align-items: center;
  }

  div:hover{
    background-color: #ea5f40
  }

  h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 21px 10px 21px 0px;
    margin: 0px;

    color: #113873;
  }
`

const RightContent = styled.div`
  overflow: hidden;
  width: 100%;
  
  img{
    width: 346px;
  }
`

const MiniProfile = styled.div`
  display: flex;

  img{
    width: 72px;
    height: 72px;
  }
`

const NameText = styled.div`
  h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #212831;
  }

  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #535E70;
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
    <Body className='container-fluid'>
      <NavigationBar className='container mt-4'>
        <BrandText>M Group</BrandText>
        <MenuComponent></MenuComponent>
        <SearchIcon width={23} height={23}></SearchIcon>
      </NavigationBar>
      <ContentBody className='container mt-5'>
        <LeftContent>
          <h1>Architects <br />with different approach</h1>
          <p className='mt-4'>Find your home very easily by using our real estate platform.<br />We makes home finding so easy and flexible.</p>
          <ButtonDiv>
            <CTAButton href='#'><h4>Find A Property</h4><SmallRightIcon className='align-self-center' height={26} width={26}></SmallRightIcon></CTAButton>
            <OrangeButton className='ms-4' href='#'>
              <div>
                <SmallPlayIcon></SmallPlayIcon>
              </div>
              <h4 className='ms-2'>What's Trending?</h4></OrangeButton>
          </ButtonDiv>
        </LeftContent>
        <RightContent>
          <img src={require('./assets/images/SampleImages.png')} />
          <MiniProfile className='mt-5'>
            <img src={require('./assets/images/SampleJohnLewis.png')} className='me-4' />
            <NameText>
              <h3>John Lewis</h3>
              <p>The real estate <br />agent of M group</p>
            </NameText>
          </MiniProfile>
        </RightContent>
      </ContentBody>
    </Body>
  )
}

export default App;