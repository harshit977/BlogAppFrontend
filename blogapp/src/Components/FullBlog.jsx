import React, {useEffect, useState} from 'react';
import  {Card,Button,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {Redirect} from 'react-router-dom';
import { Loading } from './LoadingComponent';

function UpdateBlog(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Blog Details 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
                <div style={{margin: 10}}>
                    <Form  className="form" style={{textAlign:'center'} } height="800" width="400">
                    <Form.Group controlId="">
                        <Form.Control className="input" type="text" value={props.blog.title} onChange={props.handleChange} placeholder="Blog Title" 
                        name="title"  />
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Control className="input" type="text" value={props.blog.author} onChange={props.handleChange} placeholder="Author"
                        name="author"  />
                    </Form.Group>

                    <Form.Group controlId="">
                    <Form.Control className="input" as="textarea" name="desc"  value={props.blog.desc} rows={5} onChange={props.handleChange} placeholder="Description"/>
                    </Form.Group>

                    </Form>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onSubmit}>Update</Button>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function FullBlog(props) {

    const [blog, setBlog] = useState([]);
    let id=props.match.params.id;

    const [deleteB, setDelete] = useState(false);

    const [modalShow, setModalShow] = useState(false);
    
    const [blogObject, updateBlog] = useState({
        title: '',
        author: '',
        desc: ''
    });

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
   
   

    const handleChange = (e) => {
        updateBlog({
            ...blogObject,
            [e.target.name]: e.target.value
        })
    }


    const postBlog =async() => {
        try{
            const res= await axios.put( 'https://harshit977blog.herokuapp.com/api/delete/'+id , blogObject );
            if(res.data){
                window.alert("Blog Updated");
            }
        }catch(err){
            console.log(err);
        }
    }

    const onSubmit =(e) => {
        if(blogObject.title.trim() !== ""  && blogObject.author.trim() !== ""  && blogObject.desc.trim() !== "" ){
            postBlog();
        }else{
            window.alert("Blog details are  empty");
        }
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
                            <Button onClick={() => setModalShow(true)} variant="info">Update</Button>
                            <Button style={{marginLeft:10 , marginRight:10}} variant="danger" onClick={deleteBlog}>Delete</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Last updated {dayjs(`${blog.updatedAt}`).fromNow()}</Card.Footer>
                      </Card>
                      ) : (
                          <Loading />
                      )}
                        
                      </div>
                      <UpdateBlog show={modalShow} onHide={() => setModalShow(false)}  blog={blogObject} handleChange={handleChange} onSubmit={onSubmit}/>
        </>
    )
}

export default FullBlog;