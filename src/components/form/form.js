import React, { useState } from "react";
import { convertToNewRoman } from "../../roman-convert/roman-converter";
import './form.css';

const Form = () => {
    const [roman, setRoman] = useState('');
    const [arabic, setArabic] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setArabic(e.target.value);
    }

    const convertNumber = (e) => {
        e.preventDefault();
        try {
            setRoman(convertToNewRoman(arabic));
            setError('');
        } catch (error) {
            setError(error.message);
            setRoman('');
        }
    }

    return (
        <form data-testid='form'>
            {error !== '' && <h4 className="result error">{error}</h4>}
            <div className="input">
                <input type='number' id="number" placeholder='Número' value={arabic} onChange={handleChange} />
            </div>
            <button type="submit" id="convert-btn" onClick={convertNumber}>Convertir</button>
            {roman !== '' && <h4 className="result">{roman}</h4>}
        </form>
    );
}

export default Form;
