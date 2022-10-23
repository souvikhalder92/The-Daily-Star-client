import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaFacebook,FaTwitter,FaWhatsapp,FaTwitch,FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';


const RightSideNav = () => {
    const {providerLogin,providerLoginFacebook} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const facebookProvider = new FacebookAuthProvider();
    const handleGoogleSignIn = () =>
    {
        providerLogin(googleProvider)
        .then(result =>{
           const user = result.user;
           console.log(user);
        })
        .catch(error => console.error(error));

    }
    const handleFacebookSignIn = () =>
    {
       providerLoginFacebook(facebookProvider)
       .then(result =>{
        const user = result.user;
        console.log(user);
       })
       .catch(error => console.error(error));

    }
    return (
        <div>
            <div className='mt-3 lg-mt-0'>
            <ButtonGroup vertical >
      <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary"><FaGoogle className="me-2"></FaGoogle> Login With Google</Button>
      <Button onClick={handleFacebookSignIn}  variant="outline-secondary"><FaFacebook className="me-0"></FaFacebook> Login With Facebook</Button>
    </ButtonGroup>
            </div>
            
    <div className='mt-4'>
        <h2 className='text-muted'>Find Us On</h2>
        <ListGroup className='mt-3'>
      <ListGroup.Item className="mb-3"><a className='text-decoration-none ms-2 text-muted' href="https://www.facebook.com/Souvik405"><FaFacebook className='me-1'></FaFacebook> Facebook</a></ListGroup.Item>
      <ListGroup.Item className="mb-3"><a className='text-decoration-none ms-2 text-muted' href="https://www.facebook.com/Souvik405"><FaWhatsapp className='me-1'></FaWhatsapp> WhatsApp</a></ListGroup.Item>
      <ListGroup.Item className="mb-3"><a className='text-decoration-none ms-2 text-muted' href="https://www.facebook.com/Souvik405"><FaYoutube className='me-1'></FaYoutube> Youtube</a></ListGroup.Item>
      <ListGroup.Item className="mb-3"><a className='text-decoration-none ms-2 text-muted' href="https://www.facebook.com/Souvik405"><FaTwitter className='me-1'></FaTwitter> Twitter</a></ListGroup.Item>
      <ListGroup.Item className="mb-3"><a className='text-decoration-none ms-2 text-muted' href="https://www.facebook.com/Souvik405"><FaTwitch className='me-1'></FaTwitch> Twitch</a></ListGroup.Item>
    
    </ListGroup>

    </div>
    <div className='mt-4'>
        <BrandCarousel></BrandCarousel>
    </div>

        </div>

    );
};

export default RightSideNav;