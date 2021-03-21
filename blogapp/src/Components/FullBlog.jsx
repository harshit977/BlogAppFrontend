import React, {useEffect, useState} from 'react';
import  {Card,Button,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Link,Redirect} from 'react-router-dom';
import { Loading } from './LoadingComponent';

function FullBlog(props) {

    const [blog, setBlog] = useState([]);
    let id=props.match.params.id;

    const [deleteB, setDelete] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const fetchBlog = async() =>{
           try {
            const res = await axios.get('https://harshit977blog.herokuapp.com/api/blogs/'+id);
            console.log(res.data);
            if(res.data) {
                setLoading(false);
               setBlog(res.data);
            } 
        }
        catch(error) {
               console.log(error);
           }
       }
       fetchBlog();
    },[])
    dayjs.extend(relativeTime);
    

    const deleteBlog = async() => {
        try {
            const res = await axios.delete('https://harshit977blog.herokuapp.com/api/delete/'+id);
            console.log(res.data);
            if(res.data) {
               setDelete(true);
               window.alert("Blog Deleted");
            } 
        }
        catch(error) {
               console.log(error);
               window.alert("An Error has occured!!");
           }
    }

    if(deleteB) {
        return <Redirect to='/allblogs' />
    }
   
    return(
        <>
          <div style={{margin: 20}} >
                      
                      {loading === false ? (
                          <Card border="secondary" style={{backgroundColor:'Eton Blue'}}>
                        <Card.Header as="h5">{blog.title}</Card.Header>
                        <Card.Body>
                            <Card.Title className="blockquote-footer">{blog.author}</Card.Title>
                            <Card.Text>
                              {blog.desc}
                            </Card.Text>
                            <Link to={{pathname:'/updateblog/'+blog._id}}><Button variant="primary">Update</Button></Link>
                            <Button style={{marginLeft:10 , marginRight:10}} variant="danger" onClick={deleteBlog}>Delete</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                      </Card>
                      ) : (
                          <Loading />
                      )}
                      </div>
        </>
    )
}

export default FullBlog;