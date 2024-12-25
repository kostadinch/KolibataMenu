import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Food(props) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  return (
    
    <Card sx={{ width: "100%", height:"100%", backgroundColor:"#E8E8E9", margin:"5%", }}>
      <CardContent>
        <Typography sx={{padding:"0px", marginTop:"10px"}} variant="h5">
            <b>{props.title}</b>
            <br></br>
            {props.price}
        </Typography>
      </CardContent>
      <CardMedia
        transform="scale(1.1)"
        component="img"
        height="50%"
        image={props.img}
        margin="0px">
      </CardMedia>
      <CardContent>
        <Typography variant="body1">
          {props.ingredients}
          <br></br>
          {props.weight}
        </Typography>
       </CardContent>
    </Card>
  );
}