import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
   const [error,setError] = useState('');
    const navigate = useNavigate();
    const {signIn,setLoading} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
           if(user.emailVerified)
           {
            navigate(from,{replace: true});
           }
           else
           {
            toast.error('Your email is not verified.Please Verified your email.');
           }
        })
        .catch(error => 
          {
            console.error(error);
            setError(error.message);
          })
        .finally(() =>{
            setLoading(false);
         })
        

    }


    return (
        <div className="mt-4 border border-2 p-3">
                <Form onSubmit={handleSubmit} className="mx-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <Form.Text className="text-danger">
           {error}
        </Form.Text>
            
        </div>
    );
};

export default Login;