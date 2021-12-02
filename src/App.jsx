import React, { useState } from "react"

export default function App() {
  const [input, setInput] = useState(500)
  const [output, setOutput] = useState("")

  const convert = number => {
    return number / 90
  }

  const onChange = e => {
    setInput(e.target.value)
    let conversion = 0
    try {
      conversion = convert(e.target.value).toFixed(2)
    } catch {}

    setOutput(conversion)
  }

  return (
    <div className="center">
      <h1>Kalkulator mord moszeknopowskich</h1>
      <div className="form">
        <div className="field">
          <input className="input" value={input} type="number" onChange={onChange} />
          ml
        </div>
        <div className="field margin">
          <input className="output" value={output} readOnly />
          mM
        </div>
      </div>
    </div>
  )
}