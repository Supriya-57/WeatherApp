import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
                         
    const HOT_URL ="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=612x612&w=is&k=20&c=3brCjiKwWlFr6aMTjIiWTLMhjNdlr15Lcg8ueEYi-d0=";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";

    return (
        <div className="InfoBox">
            
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ info.humidity >80
          ? RAIN_URL : info.temp > 15 
          ? HOT_URL :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        { info.humidity > 80
          ? <ThunderstormIcon /> : info.temp > 15 
          ? < WbSunnyIcon/>:<AcUnitIcon />
        }

        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather can be descibe as <i>{info.weather}</i> and feels like= {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}