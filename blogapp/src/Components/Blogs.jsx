import React, {useEffect, useState} from 'react';
import  {Card} from 'react-bootstrap';
import axios from 'axios';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
       const dataFetch = async() =>{
           try {
               const headers = {
                   "Access=Control-Allow-Origin": "*"
               }
            const res = await axios.get('https://mostlypandatuts.herokuapp.com/api/blogs');
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
                      <Card style={{ width: 600 }}>
                          <Card.Body>
                              <Card.Title>{blog.title}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
                              <Card.Text>
                                {blog.desc}
                              </Card.Text>
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