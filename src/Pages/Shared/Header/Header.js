import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaAtom, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{

    logOut()
    .then(() => {})
    .catch(error => console.error(error));
  }
    return (
        <div>
             <Navbar collapseOnSelect className="mb-4" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><FaAtom className='ms-3'></FaAtom> <Link to='/' className='text-decoration-none text-primary ms-1 fw-bold'>The Daily Star</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
          </Nav>
          <Nav>
            <Link to="/profile">
            {
              user?.photoURL ? <Image style={{height: '30px',marginRight: '20px',marginTop: '12px'}} roundedCircle src={user.photoURL}></Image>
              :
              <FaUserAlt style={{marginRight: '10px',marginTop: '12px'}}></FaUserAlt>
             }
          
            </Link>
            <div className="mt-2">
            {
                                user?.uid ?
                                    <>
                                        <span><Link to="/profile" className='text-decoration-none text-primary'>{user?.displayName}</Link></span>
                                        <Button variant="light" className='ms-2 p-1 mb-1' onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='ms-1 text-decoration-none text-secondary fw-semibold'>Login</Link>
                                        <Link className='ms-3 text-decoration-none text-secondary fw-semibold' to='/register'>Register</Link>
                                    </>
                            }
            </div>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;