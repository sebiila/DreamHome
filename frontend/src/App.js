import React, { Component } from 'react'
 import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
 import HomeScreen from "./screens/HomeScreen";
 import ProductScreen from "./screens/ProductScreen";
 import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
    const { state } = useContext(Store);
    const { cart } = state;
    return (
        <BrowserRouter>
         <div className="d-flex flex-column site-container">
            <header>
            <Navbar >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>DreamHome</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
                 </header>
                 <main>
                    
                <Routes>
                    <Route path="/product/:slug" element={<ProductScreen/>}/>
                    <Route path='/cart' element={<CartScreen/>}/>
                    <Route path='/signin' element={<SigninScreen/>}/>
                    <Route path='/' element={<HomeScreen/>}/>
                </Routes>
                
                 </main>
                 <footer>    
                  <div className='footerstyle'>
                    <Row>
                      <Container>
                    <Col md={4}>
                      <ul >
                      
                        <h3>DreamHome</h3>
                           <p>One-stop Solution for Your Home Furnishing Needs

Committed to satisfying its customers at every step of the way. </p> 
                        
                        </ul>
                        </Col>
                        </Container>
                    </Row>
                    </div>   
          <div className="text-center">All rights reserved</div>
        </footer>
        </div>
         </BrowserRouter>
        
    );
}

export default App;

