import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

function CreateBlog () {

   const [blogPost, setBlog] = useState({
       title: '',
       author: '',
       desc: ''
   });
   
   const handleChange = (e) => {
       setBlog({
           ...blogPost,
           [e.target.name]: e.target.value
       })
   }

   const postBlog =async() => {
       try{
            const res= await axios.post('https://harshit977blog.herokuapp.com/api/create', blogPost );
            //console.log(res.data);
        if(res.data) {
            setBlog({
                title: '',
                author: '',
                desc: ''
            })
                window.alert("Blog Created");
                console.log(res.data);
                window.location.reload(false);
            }
       }catch(err) {
           console.log(err);
       }
   }

   const onSubmit =(e) => {
       if(blogPost.title.trim() !== "" && blogPost.author.trim() !== "" && blogPost.desc.trim() !== "") {
          postBlog();
       }
       else {
           window.alert("Blog details are empty");
       }
   }

    return(
        <>
        <div style={{margin: 10}}>
            <h1 style={{marginBottom:20,color:'GrayText'}}>Add New Blog</h1>
            <Form  className="form" style={{textAlign:'center'} } height="800" width="400">
            <Form.Group controlId="">
                <Form.Control className="input" type="text" placeholder="Blog Title" 
                name="title" value={blogPost.title} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="">
                <Form.Control className="input" type="text" placeholder="Author"
                name="author" value={blogPost.author} onChange={handleChange}  />
            </Form.Group>

            <Form.Group controlId="">
            <Form.Control className="input" as="textarea" name="desc" value={blogPost.desc} onChange={handleChange}  rows={5} placeholder="Description"/>
            </Form.Group>

            <Button variant="primary"  onClick={onSubmit}>
                Create a Blog
            </Button>
            </Form>
        </div>
        </>
    )
}
export default CreateBlog;