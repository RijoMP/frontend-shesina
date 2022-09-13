import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {useEffect,useState} from 'react'
import CardCustom from "./Card"
import { GridView } from '@mui/icons-material';


// Generate Post Data


function preventDefault(event) {
  event.preventDefault();
}

export default function Posts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    let posts = []
    fetch(`http://localhost:4675/posts/getposts`,
    {
      method: "POST",
       
      // Adding body or contents to send
      body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1
      }),
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }})
      .then((response) => response.json())
      .then((response) => response.data)
      .then((actualData) => setPost(actualData));
  }, []);
  return (
    <React.Fragment><GridView>
       <Typography gutterBottom variant="h5" component="div">
        Posts
      </Typography>
      {posts.map((item,index)=>(
        <CardCustom key={index} title ={item.title} description ={item.description} date ={item.date}/>
      ))
    }
    </GridView>
     
    </React.Fragment>
  );
}
