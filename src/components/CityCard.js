import Card from './Card';
function CityCard({title,description,image,changeCity,resetCity}){
    const defaultTitle = "Lahore";
    const defaultDescription = "City of Foods";
    const defaultImage = "https://lh5.googleusercontent.com/p/AF1QipM-PLneiGlZyJ3-Meto263QdTtnbZSET8D5KiXT=w675-h390-n-k-no";
    return (
        
        <>
        <Card>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} style={{borderRadius:"5px",width :"300px",height:"170px"}}/>
        <button className='btn' onClick={changeCity}>Change City</button><br/>
        <button className='btn' onClick={()=>{
            resetCity({
            defaultTitle,
            defaultDescription,
            defaultImage
        })}}>Reset City</button>
        </Card>
        </>



)

}

export default CityCard;