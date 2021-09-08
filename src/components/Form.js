import React from "react"

const Form = ({ input, setInput, onSubmit }) => {
    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-row">
                <span className="form-start">What is the regex for...</span>
                <input
                    className="form-input"
                    name="input"
                    label="input"
                    value={input}
                    placeholder="type your query in natural language (eg. 'an email address')"
                    onChange={onChange}
                />
            </div>
            <div className="form-row">
                <button className="form-button">Search</button>
            </div>
        </form>
    )
}

export default Form
