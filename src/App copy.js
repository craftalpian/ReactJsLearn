import './App.css';
import { ReactComponent as SearchIcon } from './assets/images/SearchIcon.svg';
import { ReactComponent as SmallRightIcon } from './assets/images/SmallRightIcon.svg';
import { ReactComponent as SmallPlayIcon } from './assets/images/SmallPlayIcon.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navigation = styled.section`
  background-color: rebeccapurple;
  overflow: hidden;
  width: 100px;
`

function NavigationBar() {
  return (
    <section className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">M Group</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Properties</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Agents</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <SearchIcon width={23} height={23}></SearchIcon>
        </div>
      </nav>
    </section>
  )
}

function Home() {
  return (
    <section className="container mt-5 test">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="Title">Architects with different approach</h1>
            <h4 className="SubTitle mt-4">Find your home very easily by using our real estate platform. We makes home finding so easy and flexible.</h4>
            <div className="mt-5">

            <a href="#" className="btn btn-primary">Find A Property<SmallRightIcon height={26} width={26} className="ms-2"></SmallRightIcon></a>
            <a href="#" className="Secondary btn btn-link ms-3 p-0">
              <a href="#" className="btn btn-light me-2">
                <SmallPlayIcon width={14} height={14} className="Middle"></SmallPlayIcon>
              </a>
              What's Trending?
            </a>
            </div>
          </div>
          <div className="col">
            tostssssa
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="container-fluid App">
      <NavigationBar></NavigationBar>
      <Navigation>
        <h1>basjabs</h1>
      </Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
