import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is Terms and Conditions</h3>
            <p>Go Back To: <Link to='/register'>Register</Link></p>
            
        </div>
    );
};

export default TermsAndConditions;