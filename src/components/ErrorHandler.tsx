import React from 'react';
import '../styles/ErrorHandler.css';

interface ErrorHandlerProps {
    errorMessage: string;
}

const ErrorHandler = ({ errorMessage }:ErrorHandlerProps) => {
    return (

        <div>
            <h2 className='error-message'>{errorMessage}</h2>
        </div>

    )
}
export default ErrorHandler;