import React, { Component } from "react";
import Card from "./Card";
import PageHeader from "./PageHeader";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstViewRequested: false,
      currentView: "",
      films: [],
      people: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(obj => {
        this.setState({
          films: obj
        });
      });
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(obj => {
        this.setState({
          people: obj
        });
      });
  }

  displayCards() {
    if (this.state.firstViewRequested === false) {
      return null;
    } else if (this.state.currentView === "films") {
      return this.createMovieCards();
    } else if (this.state.currentView === "people") {
      return this.createPeopleCards();
    }
  }

  createMovieCards() {
    return this.state.films.map(film => {
      return (
        <Card
          cardTitle={film.title}
          cardContent={film.description}
          key={film.id}
        />
      );
    });
  }

  createPeopleCards() {
    return this.state.people.map(person => {
      return (
        <Card
          cardTitle={person.name}
          cardContent={`Gender: ${person.gender}`}
          cardContent2={`Age: ${person.age}`}
          cardContent3={`Eye Color: ${person.eye_color}`}
          cardContent4={`Hair Color: ${person.hair_color}`}
          key={person.id}
        />
      );
    });
  }

  handleClick(e) {
    if (this.state.firstViewRequested === false) {
      this.setState({
        currentView: e.target.name,
        firstViewRequested: true
      });
    } else {
      this.setState({
        currentView: e.target.name
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <PageHeader />
        <div className="container d-flex justify-content-center">
          <button
            name="films"
            className="btn btn-info m-1"
            onClick={this.handleClick}
          >
            Movies
          </button>
          <button
            name="people"
            className="btn btn-info m-1"
            onClick={this.handleClick}
          >
            People
          </button>
        </div>
        <div className="row">{this.displayCards()}</div>
      </div>
    );
  }
}
export default App;
