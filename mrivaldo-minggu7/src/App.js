import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './containers/Table'
import CreateTodo from './containers/CreateTodo'


function App() {
  return (


    <div className="App">
    <CreateTodo/>
    <Table/>
      {/* <header>
      </header> */}
    </div>
  );
}

export default App;
