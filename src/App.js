import React, {Component} from 'react';
import './App.css';
import Table from './Table'

import {Greeting, DateFunc} from './Greeting';
import {Wishing} from './Greeting';
import { getCurrentDate, getCurHour } from './utils';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],

    greet: "Hello Sir!",

   date: getCurrentDate(),

  hour: getCurHour(),
  }

   
  render() {
    const {characters, greet, hour, date} = this.state
    return (
      <div className="container">
        <Table characterData={characters} />
        <Greeting greetingData={greet} />
        <Wishing wishData={hour} />
        <DateFunc dateData={date} />
      </div>
    );
  }
}

export default App;
