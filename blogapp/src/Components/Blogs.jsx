import React, {useEffect, useState} from 'react';
import  {Card,Button} from 'react-bootstrap';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function Blogs(props) {
    console.log(props);
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
       const dataFetch = async() =>{
           try {
               const headers = {
                   "Access=Control-Allow-Origin": "*"
               }
            const res = await axios.get('https://harshit977blog.herokuapp.com/api/blogs',headers);
            console.log(res.data);
            if(res.data) {
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
       <div>
           { blogs ? (
               <>
                  {blogs.map((blog,id)=> (
                      <div key={id} style={{margin: 20}} >
                      <Card border="secondary">
                        <Card.Header as="h5">{blog.title}</Card.Header>
                        <Card.Body>
                            <Card.Title className="blockquote-footer">{blog.author}</Card.Title>
                            <Card.Text>
                             {blog.desc}
                            </Card.Text>
                            <Button variant="primary">Read</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                      </Card>
                      </div>
                  ))
                  }
               </>
           ) : (
               <></>
           )
           }
            
       </div>
       
   );
}
export default Blogs;