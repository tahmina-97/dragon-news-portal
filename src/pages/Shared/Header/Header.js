import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('error', error);
            })
    }
    useEffect(() => {
        fetch('https://dragon-news-server-khaki.vercel.app/news-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className='mb-4'>
            <Container>
                <Navbar.Brand> <Link to='/' className='text-white text-decoration-none'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">All News</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            {
                                categories.map(category =>
                                    <NavDropdown.Item
                                        key={category.id}>
                                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                                    </NavDropdown.Item>)
                            }

                        </NavDropdown>
                    </Nav>
                    <Nav className='align-items-center'>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} variant="outline-light" className='mx-2'>Log Out</Button>
                                        <span className='text-white fw-bold'>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Button className='me-3' variant="light"><Link className='text-decoration-none' to='/login'>Login</Link></Button>
                                        <Button variant="light"><Link className='text-decoration-none' to='/register'>Register</Link></Button>


                                    </>
                            }


                        </>
                        <Nav.Link href="#deets">
                            {user?.photoURL ?
                                <Image roundedCircle src={user?.photoURL} style={{ height: '30px' }} ></Image>
                                :
                                <FaUser />
                            }
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;