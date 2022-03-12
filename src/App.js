import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return {
            monsters: users,
          };
        });
      });
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchString: searchString,
      };
    });
  };

  render() {
    console.log("Render");
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const monstersList = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-monsters"
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
        />
        <CardList monsters={monstersList} />
      </div>
    );
  }
}

export default App;
