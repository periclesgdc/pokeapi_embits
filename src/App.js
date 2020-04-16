import React from 'react';
import Home from './components/pages/Home';
import Pokemons from './components/pages/Pokemons';
import Types from './components/pages/Types';
import { Navbar, Nav } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: <Home/>,
    }
  }

  switchPage = (page) => {
    switch(page) {
      case 'home':
        this.setState({ currentPage: <Home/> });
        break;
      case 'pokemons':
        this.setState({ currentPage: <Pokemons/> });
        break;
      case 'types':
        this.setState({ currentPage: <Types/> });
        break;
      default:
        this.setState({ currentPage: <Home/> });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Pokepedia</Navbar.Brand>
        </Navbar>

        <div className="row">
          <div className="col-2">
            <Nav className="flex-column" defaultActiveKey="/">
              <Nav.Link href="#" onClick={() => this.switchPage('home')}>Página Inicial</Nav.Link>
              <Nav.Link href="#" onClick={() => this.switchPage('pokemons')}>Listar Pokémons</Nav.Link>
              <Nav.Link href="#" onClick={() => this.switchPage('types')}>Listar Tipos</Nav.Link>
            </Nav>
          </div>

          <div id="content">
            { this.state.currentPage }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
