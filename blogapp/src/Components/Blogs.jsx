import React, {useEffect, useState} from 'react';
import  {Card,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';

function Blogs(props) {
    console.log(props);
    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const dataFetch = async() =>{
           try {
               const headers = {
                   "Access=Control-Allow-Origin": "*"
               }
            const res = await axios.get('https://harshit977blog.herokuapp.com/api/blogs',headers);
            console.log(res.data);
            if(res.data) {
                setLoading(false);
                setBlogs(res.data.slice(0,props.count));
            } 
        }
        catch(error) {
               console.log(error);
           }
       }
       dataFetch();
    },[])
    dayjs.extend(relativeTime);
   return(
    <>
    {loading === false ? (
        
        <div style={{fontFamily:'cursive',color:'black'}} >
            <div>
        </div>
        <Row lg={2}>
        { blogs ? (
            <>
               {blogs.map((blog,id)=> (
                   <Col>
                   <div key={id} style={{margin: 20}} >
                   <Card style={{backgroundColor:'whitesmoke', borderBlockColor:'white' , borderBlockStyle:'groove',borderWidth:3}}>
                     <Card.Header style={{backgroundColor:'skyblue',color:'white'}} as="h5">{blog.title}</Card.Header>
                     <Card.Body style={{backgroundColor:'lightyellow'}}>
                         <Card.Title style={{color:'crimson',fontWeight:'bold'}} className="blockquote-footer">{blog.author}</Card.Title>
                         <Card.Text>
                           {blog.desc.substring(0,200)+"..."}
                         </Card.Text>
                         <Link to={{pathname:'/fullblog/'+blog._id}}><Button variant="primary">Explore More</Button></Link>
                     </Card.Body>
                     <Card.Footer style={{backgroundColor:'skyblue'}} className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                   </Card>
                   </div>
                   </Col>
               ))
               }
            </>
        ) : (
            <></>
        )
        }
         </Row>
    </div> ) : (
        <Loading />
    )}
      </> 
   );
}
export default Blogs;