import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function DrinkCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  return (
    
    <Card sx={{display:"flex",flexDirection:"row", backgroundColor:"#E8E8E9", marginTop:"7%",marginLeft:"3%", marginRight:"3%", maxHeight:"80px"}}> 
      <CardMedia 
        sx={{ width:"22%"}}    
        component="img"
        image={props.img}
        margin="0px"/>
        <Box  sx={{width:"52%"}}>
        <CardContent >
            <Typography variant="subtitle2">
                <b>{props.title}</b><br></br> {props.weight}  
            </Typography>
        </CardContent>
        </Box>
        <Box  sx={{borderLeft:"groove"  }}>
            <CardContent>
                <Typography  variant="body1">
                    <b>{props.price}</b>  
                </Typography>
            </CardContent>
        </Box>
    </Card>
  );
}