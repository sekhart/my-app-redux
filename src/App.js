import React from 'react';
import './App.css';
import Table from './Table'

import {Greeting, DateFunc} from './Greeting';
import {Wishing} from './Greeting';
import { getCurrentDate, getCurHour } from './utils';

function App() {
  const characters = [
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
  ]

  const greet = "Hello Sir!"

  const date = getCurrentDate();

  const hour = getCurHour();

  return (
    <div className="container">
      <Table characterData={characters} />
      <Greeting greetingData={greet} />
      <Wishing wishData={hour} />
      <DateFunc dateData={date} />
    </div>
  );
}

export default App;
