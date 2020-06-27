import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student Form</h1>
      <form>
          <div>
            <input type="text" placeholder="Enter First Name..."/>
          </div>
          <div>
            <input type="text" placeholder="Enter Last Name..."/>
          </div>
          <div>
            <h3>Sex</h3>
            <input type="radio" name="gender" value="male"/>Male
            <input type="radio" name="gender" value="female"/>Female
          </div>
          <div>
          <h3>Hours</h3>
            <select>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
          <div>
            <h3>Courses</h3>
            <input type="checkbox" name="course" value="java"/>Java
            <input type="checkbox" name="course" value="javascript"/>JavaScript
            <input type="checkbox" name="course" value="c++"/>C++
          </div>
          <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
