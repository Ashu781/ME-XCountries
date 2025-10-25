import React, {useState,useEffect} from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';

function App() {

  let [countries,setCountries] = useState([]);

   useEffect(()=>{

    async function getData(){
    try{
    let response = await axios.get("https://xcountries-backend.labs.crio.do/all");
    setCountries(response.data);
    }
    catch(err){
    console.error("Error fetching data:",err);
   }
   };

    getData();
   },[]);


  return (
  <>
   <Grid container spacing={2} sx={{margin:"30px 60px 30px 60px"}}>
    {countries.map((obj)=>(
        <Grid size={2} sx={{border:"1px solid black", display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"20px"}}>
          <img src={obj.flag} alt={obj.name} style={{height: "120px", width: "120px"}}/>
          <h4 style={{textAlign:"center"}}>{obj.name}</h4>
        </Grid>
    )
    )}
   </Grid>
  </>
  );
}

export default App;
