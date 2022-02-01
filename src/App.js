
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import DisplayNames from './components/DisplayNames';


function App() {
  const NOBEL_API = "https://api.nobelprize.org/v1/prize.json";
  const [responeNobel, setResponeNobel] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchNobelApi = ()=>{
    //axios to fetch data from API
    axios.get(NOBEL_API)
    .then(function (response) {
      const res = response.data;
      setResponeNobel(res);
      setLoading(false)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const [dropDown, setDropDown] = useState("selectCat");
  const [yearDropDown, setYearDropDown] = useState(2021);
  useEffect(()=>{fetchNobelApi()},[])
  if(loading) return <h1>Loading ....</h1>
const getCategory = (res) =>{
  res.preventDefault();
  const str = document.getElementById("category").value
  setDropDown(str)
  const year = document.getElementById("year").value
  setYearDropDown(year)
}


  return (
    <div className="App">

{/* category and year dropdown  */}
<form onSubmit={(e)=>getCategory(e)} style={{marginTop:"20px"}}>
  <label for="Nobel Price">Choose the category and year:</label>
  <select name="category" id="category">
  <option value="selectCat" selected>--Select Category--</option>
   <option value="chemistry">chemistry</option>
<option value="economics">economics</option>
<option value="literature">literature</option>
<option value="peace">peace</option>
<option value="physics">physics</option>
<option value="medicine">medicine</option>
  </select>
  <select name='year' id="year">
  <option value="" selected>--Select Year--</option>
  <option value="1900">1900</option>
  <option value="1901">1901</option>
  <option value="1902">1902</option>
  <option value="1903">1903</option>
  <option value="1904">1904</option>
  </select>
  <input type="submit" value="Submit" />
</form>
<button>Get the Winner</button>
<div className='title'>
<h1 className='name'>Names</h1>
      <h1 style={{paddingLeft:"7%"}}>Motivation</h1>
      <h1 style={{paddingLeft:"18%"}}>Category</h1>
      <h1 style={{paddingLeft:"3%"}}>Year</h1>
      </div>
      {responeNobel  &&  responeNobel.prizes.filter(item=>{
        if(dropDown === "selectCat")
        return true
        if(item.category === dropDown && item.year === yearDropDown)
        return true;
        return false
      }).map(prize =>{

        // Data between year 1900 - 2018
        if(prize.year >=1900 && prize.year<=2018)
        return(
        <div className='app'>
          <p className='disp'><DisplayNames  laureates={prize.laureates}/></p>
          <p className='category'>{prize.category}</p>
          <p className='prizeYear'>{prize.year} </p>
       
        </div>)
 return null;
      })}
    </div>
  );
}

export default App;
