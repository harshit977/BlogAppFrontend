import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Blogs from './Blogs';
import CreateBlog from './CreateBlog';




function Home ()  {
   
   
    return(
       <div>
         <Container>
            <Row>
               <Col lg="8">
                  <Blogs count={4} />
               </Col>   
               <Col >
                  <CreateBlog />
               </Col>
            </Row>
         </Container>
       </div>
    );
}

export default Home;