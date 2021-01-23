import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import Blogs from './Blogs';


function Home ()  {
    return(
       <div>
         <Container>
            <Row>
               <Col lg="8">
                  <Blogs />
               </Col>
               <Col >
               
               </Col>
            </Row>
         </Container>
       </div>
    );
}

export default Home;