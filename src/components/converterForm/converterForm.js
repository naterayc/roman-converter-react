import React, { useState } from "react";
import { convertToNewRoman } from "../../roman-convert/roman-converter";
import './converterForm.css';

const ConverterForm = () => {
    const [error, setError] = useState('');
    const [arabic, setArabic] = useState('');
    const [result, setResult] = useState('');
    const role = 'result';

    const convert = (e) => {
        e.preventDefault();
        try {
            setResult(convertToNewRoman(arabic));
            setError('');
        }
        catch (error) {
            setError(error.message);
            setResult('');
        }
    }


    return (
        <>

            <form className='converter-form'>
                {error !== '' && <h4 className='error-msg' data-testid='error'>{error}</h4>}
                <input className='converter-input' placeholder='Número a convertir' type='number' onChange={(e) => setArabic(e.target.value)} />
                <button className='converter-submit-btn' type='submit' onClick={convert}> Convertir </button>
            </form>
            {result !== '' && <h4 className='result-msg' role={role}> {result} </h4>}
        </>
    )
}

export default ConverterForm;
