import { React, useContext } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('error', error);
            })
    }
    return (
        <div className='text-center'>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary mb-2 px-5 rounded"> <FaGoogle></FaGoogle> Login via Google</Button>
                <Button variant="outline-secondary px-5 rounded"> <FaGithub></FaGithub> Login via Github</Button>
            </ButtonGroup>
            <div className='my-3'>
                <h5> Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaLinkedin></FaLinkedin> LinkedIn</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;