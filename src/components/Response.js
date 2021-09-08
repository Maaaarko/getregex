import React from "react"

const Response = ({ response }) => {
    return (
        <textarea
            className="response"
            rows="5"
            name="input"
            label="input"
            value={response}
            placeholder="Response"
        />
    )
}

export default Response
