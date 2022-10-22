import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleTermsAndConditions = (e) => {
        setAccepted(e.target.checked);
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.error('error', error);
            })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleUpdateUserProfile(name, photoURL);
                form.reset()
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.error('error', error);
            })

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleTermsAndConditions} type="checkbox" label={<> Accept <Link to='/terms'>Terms & conditions</Link> </>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!(accepted)}>
                Submit
            </Button>
        </Form>
    );
};

export default Register;