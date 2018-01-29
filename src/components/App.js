import React from 'react';
import Nav from './Nav';


class App extends React.Component {
  render() {
    return (
      <div className="Recipe-App">
        <p>This is my App component!</p>
        <div>
          <Nav />
        </div>


      </div>
    );
  }
}

export default App;
