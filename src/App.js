import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import Card from './components/Card';
import CityCard from './components/CityCard';
import { useState } from 'react';

function App() {
  var message = "Welcome to React";
  const cards = [
    {
    id : 1,
    title : "Peshawar",
    description : "City of Flowers",
    image : "https://lh5.googleusercontent.com/p/AF1QipNerW-SYbPrrA_trfp_noMCKLEPDKLVr3uwkHic=w675-h390-n-k-no"
},
    {
    id : 2,
    title : "Lahore",
    description : "City of Five Rivers",
    image :"https://lh6.googleusercontent.com/proxy/p8ix-1fWgI1pOP4Rlg4Azz4TDg-Fdep-BG9YeuVRWefO48ZFErqO7VpoCGekScxTJgTip6C9Jv0mLL8ch-iY7hktyaU32BxqcbRe4Fe3DPwttt-nmNsnp2LX6sGGmGdvLX-A9e5y9QP0i-khUEzR_maiwiYzzlQ=w675-h390-n-k-no"
},
    {
    id : 3,
    title : "Karachi",
    description : "City of Lights",
    image : "https://lh5.googleusercontent.com/p/AF1QipN3KfpYYmGpOxnTB-LAw3RzjDlQHxjlxTyn29JY=w675-h390-n-k-no"
}
]

const [city,setCity] = useState({
  name : "Lahore",
  description : "City of Foods",
  image : "https://lh5.googleusercontent.com/p/AF1QipM-PLneiGlZyJ3-Meto263QdTtnbZSET8D5KiXT=w675-h390-n-k-no"
});

const clickHandler = (event)=>{
  console.log("I am clicked!");
  console.log(event)
  setCity({
    name : "Peshawar",
    description : "City of Flowers",
    image : "https://lh5.googleusercontent.com/p/AF1QipNerW-SYbPrrA_trfp_noMCKLEPDKLVr3uwkHic=w675-h390-n-k-no"
  });
  }
  const resetHandler = (newState)=>{
    setCity({
      name : newState.defaultTitle,
      description : newState.defaultDescription,
      image : newState.defaultImage
    })
}
  return (
    <>
    {/* <h1 className='top-heading'>Cities Of Pakistan</h1>
    <img src='https://cdn.pixabay.com/animation/2022/09/06/03/13/03-13-18-245_512.gif' style={{width:"100px",height:"60px"}}/>
    {/* <p>{message}</p>
    <a href='https://github.com/hashirsyed' target="_blank"><button className='btn'>Visit My Github Profile</button></a><br/>

    // {cards.map((card)=> <CityCard key={card.id} title={card.title} description={card.description} image={card.image}/>)} */} 
    
    {/* <Card>
    <h3>{city.name}</h3>
        <p>{city.description}</p>
        <img src={city.image} style={{borderRadius:"5px",width :"240px",height:"150px"}}/>
        <button className='btn' onClick={clickHandler}>Change City</button>
        </Card> */}


        <CityCard title={city.name} description={city.description} image={city.image} changeCity={clickHandler} resetCity={resetHandler}/>
    </>
  );
}

export default App;