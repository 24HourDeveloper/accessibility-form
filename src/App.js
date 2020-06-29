import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={styles.formStyles} className="shadow">
          <h1 style={{marginTop:0,color:'#595959', marginBottom:10}}>Student Form</h1>
          <label htmlFor="fname" style={{display:'flex', flexDirection:'row'}}>
            <span style={{flexGrow:1, alignSelf:'center'}}>First Name:</span>
            <input id="fname" type="text" placeholder="Enter First Name..." style={styles.inputStyles}/>
          </label>
          <label htmlFor="lname" style={{display:'flex', flexDirection:'row'}}>
            <span style={{flexGrow:1, alignSelf:'center'}}>Last Name:</span>
            <input id="lname" type="text" placeholder="Enter Last Name..." style={styles.inputStyles}/>
          </label>
          <fieldset>
            <legend style={styles.title}>SEX</legend>
            <label htmlFor="man">
              <input id="man" type="radio" name="gender" value="male"/>Male
            </label>
            <input type="radio" name="gender" value="female" aria-label="female"/>Female
          </fieldset>
          <div>
          <h3 style={styles.title}>HOURS</h3>
            <select aria-label="select hours">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
          <fieldset>
            <legend style={styles.title}>COURSES</legend>
            <label htmlFor="java">
              <input id="java" type="checkbox" name="course" value="java"/>Java
            </label>
            <label htmlFor="javascript">
              <input id="javascript" type="checkbox" name="course" value="javascript"/>JavaScript
            </label>
            <label htmlFor="c++">
              <input id="c++" type="checkbox" name="course" value="c++"/>C++
            </label>
          </fieldset>
          <button style={styles.btn} className='shadow-btn'>SUBMIT</button>
      </div>
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
    flexGrow:2
  },
  formStyles:{
    width:'30%',
    borderWidth:1,
    borderRadius:10,
    borderColor:"#B30C00",
    borderStyle:'solid',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,
    padding:20,
  },
  title:{
    color:'#B30C00',
    marginBottom:10,
    marginTop:0
  },
  btn:{
    backgroundColor:'#B30C00',
    color:'#fff',
    borderWidth:1,
    borderColor:"#B30C00",
    borderRadius:5,
    borderStyle:'solid',
    padding:10,
    width:'100%',
    marginTop:10,
    fontSize:18
  }
}

export default App;
