import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error,setError] = useState('');
  const [accepted,setAccepted] = useState(false);
    const navigate = useNavigate();
    const {createUser, updateUserProfile,verifyEmail} = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUpdate(name,photoURL);
            handleEmail();
            toast.success('Please Verify Your Email!!!');
            navigate('/login');
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        }

          );
       

    }
    const handleUpdate = (name,photoURL) =>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(error => console.error(error));

    }
    const handleAccept = (event) =>{
      setAccepted(event.target.checked);
    }
    const handleEmail = () =>{
      verifyEmail()
      .then(() =>{})
      .catch(error => console.error(error));
    }
    return (
        <div className="mt-2 border border-2 p-3">
        <Form onSubmit={handleSubmit}  className="mx-2">
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Name</Form.Label>
<Form.Control name="name" type="text" placeholder="Enter your name" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Photo Url</Form.Label>
<Form.Control name="photoURL" type="text" placeholder="Enter photo url" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email</Form.Label>
<Form.Control name="email" type="email" placeholder="Enter email address" required/>

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control name="password" type="password" placeholder="Password" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleAccept}
        label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
      </Form.Group>

<Button className="mt-2" variant="primary" type="submit" disabled={!accepted}>
  Register
</Button>
</Form>
<Form.Text className="text-danger">
      {error}
</Form.Text>
    
</div>
    );
};

export default Register;