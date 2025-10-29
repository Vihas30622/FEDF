import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // Handles button click
    const handleClick = (value) => {
        if (value === '=') {
            try {
                // Safely evaluate the mathematical expression
                const calcResult = eval(input); // Note: Avoid `eval` in production, use libraries like math.js
                setResult(calcResult);
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div style={calculatorStyle}>
            <h1>React Calculator</h1>
            <div style={displayStyle}>
                <div style={inputStyle}>{input}</div>
                <div style={resultStyle}>{result}</div>
            </div>
            <div style={buttonContainerStyle}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
                    <button
                        key={button}
                        onClick={() => handleClick(button)}
                        style={buttonStyle}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Styles
const calculatorStyle = {
    width: '300px',
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
};

const displayStyle = {
    marginBottom: '20px',
    textAlign: 'right',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#fff',
    fontSize: '18px',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const inputStyle = {
    color: '#333',
};

const resultStyle = {
    color: '#007bff',
    fontSize: '22px',
    fontWeight: 'bold',
};

const buttonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
};

const buttonStyle = {
    padding: '15px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#007bff',
    color: 'white',
};

export default Calculator;
