import React, {useEffect, useState} from 'react';
import  {Card,Button} from 'react-bootstrap';
import axios from 'axios';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
       const dataFetch = async() =>{
           try {
               const headers = {
                   "Access=Control-Allow-Origin": "*"
               }
            const res = await axios.get('https://harshit977blog.herokuapp.com/api/blogs');
            console.log(res.data);
            if(res.data) {
                setBlogs(res.data);
            } 
        }
        catch(error) {
               console.log(error);
           }
       }
       dataFetch();
    },[])

   return(
       <div>
           { blogs ? (
               <>
                  {blogs.map((blog)=> (
                      <div style={{margin: 20}} >
                      <Card border="secondary">
                        <Card.Header as="h5">{blog.title}</Card.Header>
                        <Card.Body>
                            <Card.Title className="blockquote-footer">{blog.author}</Card.Title>
                            <Card.Text>
                             {blog.desc}
                            </Card.Text>
                            <Button variant="primary">Read</Button>
                        </Card.Body>
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