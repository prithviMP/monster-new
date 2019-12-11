import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "./components/card-list/card-list.component";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
