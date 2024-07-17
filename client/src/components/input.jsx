import { useState } from "react"
const Input = ({type, name, label, onChange}) => {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        onChange(e);
    };

    return (
        <div className="mb-3">
        <label htmlFor={`${name}-input`} className="form-label">{ label }</label>
            <input
                type={ type }
                name={ name }
                value={ input }
                onChange={handleChange}
                className="form-control"
                id={`${name}-input`}
            />
        </div>
    )
}

export default Input