import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form style={styles.formStyles} className="shadow">
          <h1 style={{marginTop:0,color:'#ccc', marginBottom:10}}>Student Form</h1>
          <div >
            <input type="text" placeholder="Enter First Name..." style={styles.inputStyles}/>
          </div>
          <div>
            <input type="text" placeholder="Enter Last Name..." style={styles.inputStyles}/>
          </div>
          <div>
            <h3 style={styles.title}>SEX</h3>
            <input type="radio" name="gender" value="male"/>Male
            <input type="radio" name="gender" value="female"/>Female
          </div>
          <div>
          <h3 style={styles.title}>HOURS</h3>
            <select>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
          <div>
            <h3 style={styles.title}>COURSES</h3>
            <input type="checkbox" name="course" value="java"/>Java
            <input type="checkbox" name="course" value="javascript"/>JavaScript
            <input type="checkbox" name="course" value="c++"/>C++
          </div>
          <input type="submit" style={styles.btn} className='shadow-btn'/>
          {/* <button style={styles.btn} className='shadow-btn' onClick={(e) => e.preventDefault()}>SUBMIT</button> */}
      </form>
    </div>
  );
}

const styles = {
  inputStyles:{
    padding:10,
    marginBottom:10,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#ccc',
    borderStyle:'solid',
    width:'100%'
  },
  formStyles:{
    width:'30%',
    borderWidth:1,
    borderRadius:10,
    borderColor:"#ff6257",
    borderStyle:'solid',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,
    padding:20,
  },
  title:{
    color:'#ff6257',
    marginBottom:10,
    marginTop:0
  },
  btn:{
    backgroundColor:'#ff6257',
    color:'#fff',
    borderWidth:1,
    borderColor:"#ff6257",
    borderRadius:5,
    borderStyle:'solid',
    padding:10,
    width:'100%',
    marginTop:10,
    fontSize:18
  }
}

export default App;
