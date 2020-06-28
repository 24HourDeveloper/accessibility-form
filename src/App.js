import React, {useState} from 'react';
import { Button, Input ,Radio, RadioGroup, Select, Checkbox, CheckboxGroup, Heading} from "@chakra-ui/core";
import './App.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <form style={styles.formStyles} className="shadow">
          <Heading as='h1' style={{marginTop:0,color:'#ccc', marginBottom:10}}>Student Form</Heading>
          <div >
            <Input placeholder="Enter First Name" mb={2}/>
          </div>
          <div>
            <Input placeholder="Enter Last Name" mb={2}/>
          </div>
          <div>
            <h3 style={styles.title}>SEX</h3>
              <RadioGroup onChange={e => setValue(e.target.value)} value={value}
               style={{display:'flex', flexDirection:'row', justifyContent:'center'}}
               >
                <Radio value="1" style={{marginRight:10}} variantColor="green">Male</Radio>
                <Radio value="2" variantColor="green">Female</Radio>
              </RadioGroup>
          </div>
          <div>
          <h3 style={styles.title}>HOURS</h3>
          <Select placeholder="Choose Hours" mb={2}>
            <option value="option1">Morning</option>
            <option value="option2">Afternoon</option>
            <option value="option3">Evening</option>
          </Select>
          </div>
          <div>
            <h3 style={styles.title}>COURSES</h3>
            <CheckboxGroup variantColor="green" defaultValue={["java"]}
            style={{display:'flex', flexDirection:'row', justifyContent:'center'}}
            >
              <Checkbox value="java" style={{marginRight:10}}>Java</Checkbox>
              <Checkbox value="javascript" style={{marginRight:10}}>JavaScript</Checkbox>
              <Checkbox value="c++">C++</Checkbox>
            </CheckboxGroup>
          </div>
          <Button bg="brand.900" color="white" style={{width:'100%'}}>SUBMIT</Button>
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
