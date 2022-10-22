import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <p>no 1</p>
            <p>no 2</p>
            <p>no 3</p>
            <p>Go back to Registration
                <Link to='/register'>Register</Link>
            </p>

        </div>
    );
};

export default TermsAndConditions;