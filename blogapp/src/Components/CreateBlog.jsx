import React, {useEffect,useState} from 'react';
import {Form, Button} from 'react-bootstrap';


function CreateBlog () {
    return(
        <div style={{margin: 10}}>
            <h1 style={{marginBottom:20,color:'GrayText'}}>Add New Blog</h1>
            <Form style={{textAlign:'center'} } height="600" width="300">
            <Form.Group controlId="">
                <Form.Control type="title" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group controlId="">
                <Form.Control type="Author" placeholder="Author" />
            </Form.Group>

            <Form.Group controlId="">
            <textarea class="form-control" rows="5" placeholder="Description"></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
}
export default CreateBlog;