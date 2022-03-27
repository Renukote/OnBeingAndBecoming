import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./style.css";


export default function ActionAreaCard(props: any) {
  return (
    <Card sx={{ width: "100%", borderRadius: "10px" }}>
      <CardActionArea className={props.small ? "card-flex" : ""}>
        <CardMedia
          component="img"
          height={props.imgHeight}
          image={props.img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='card-content'>
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
