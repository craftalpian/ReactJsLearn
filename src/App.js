import './App.css';
import {ReactComponent as SearchIcon} from './assets/images/SearchIcon.svg';

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

function App() {
  return (
    <div className="container-fluid">
      <NavigationBar />
    </div>
  );
}

export default App;
