import { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import Heading from "./components/Heading"
import Response from "./components/Response"

import OpenAI from "openai-api"
import Footer from "./components/Footer"

const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

const openai = new OpenAI(API_KEY)

function App() {
    const [input, setInput] = useState("")
    const [response, setResponse] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        const gptResponse = await openai.complete({
            engine: "davinci",
            prompt: `Q: What is the regex for ${input}?\nA:`,
            temperature: 0,
            maxTokens: 300,
            topP: 1,
            presencePenalty: 0.0,
            frequencyPenalty: 0.0,
            stop: ["\n"],
        })

        console.log(gptResponse.data.choices[0].text)
        setResponse(
            gptResponse.data.choices[0].text.replace(
                "The regex for " + input + " is: ",
                ""
            )
        )
    }

    return (
        <div className="App">
            <div className="container">
                <Heading />
                <Form input={input} setInput={setInput} onSubmit={onSubmit} />
                <Response response={response} setResponse={setResponse} />
                <Footer />
            </div>
        </div>
    )
}

export default App
