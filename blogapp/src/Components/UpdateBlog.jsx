import React, {useEffect, useState} from 'react';
import  {Button,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

function UpdateBlog (props)  {

    let id = props.match.params.id;
 
    const [blogPost, setBlog] = useState({
        title: '',
        author: '',
        desc: ''
    });

    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const fetchBlog = async() => {
            try{
                
                const res = await axios.get('https://harshit977blog.herokuapp.com/api/blogs/'+id);
                console.log(res.data);
                if(res.data){
                    let blog = res.data;
                    setBlog({
                        title: blog.title,
                        author: blog.author,
                        desc: blog.desc
                    });
                }
            }
            catch(error){
                console.log(error);
            }
            
        } 
        fetchBlog();

    }, []);

    console.log(blogPost);

    const handleChange = (e) => {
        setBlog({
            ...blogPost,
            [e.target.name]: e.target.value
        })
    }

    const postBlog =async() => {
        try{
            const res= await axios.put( 'https://harshit977blog.herokuapp.com/api/update/'+id , blogPost );
            if(res.data)
            {
                    setUpdated(true);
                    window.alert("Blog Successfully Updated");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    if(updated){
        return <Redirect to={"/fullblog/"+id} />;
    }

    const onSubmit =(e) => {
        if(blogPost.title.trim() !== ""  && blogPost.author.trim() !== ""  && blogPost.desc.trim() !== "" ){
            postBlog();
        }else{
            window.alert("Blog details are  empty");
        }
    }

    return (
        <div>
          <Modal.Title id="contained-modal-title-vcenter">
            Blog Details 
          </Modal.Title>
        <Modal.Body className="show-grid">
                <div style={{margin: 20}}>
                    <Form  className="form" style={{textAlign:'center'} } height="800" width="400">
                    <Form.Group controlId="">
                        <Form.Control className="input" type="text" value={blogPost.title} onChange={handleChange} placeholder="" 
                        name="title"  />
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Control className="input" type="text" value={blogPost.author} onChange={handleChange} placeholder=""
                        name="author"  />
                    </Form.Group>

                    <Form.Group controlId="">
                    <Form.Control className="input" as="textarea" name="desc"  value={blogPost.desc} rows={5} onChange={handleChange} placeholder=""/>
                    </Form.Group>
                    </Form>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>Update</Button>
        </Modal.Footer>
      </div>
    );
}

export default UpdateBlog;