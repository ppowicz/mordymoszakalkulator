import React, { useState } from "react"

export default function App() {
  const rate = 90

  const convert = number => {
    return number / rate
  }

  const convertReverse = number => {
    return number * rate
  }

  const [input, setInput] = useState()
  const [output, setOutput] = useState()
  const [inputReverse, setInputReverse] = useState()
  const [outputReverse, setOutputReverse] = useState()


  const onChange = e => {
    setInput(e.target.value)
    let conversion = 0
    try {
      conversion = convert(e.target.value).toFixed(2)
    } catch {}

    setOutput(conversion)
  }

  const onChangeReverse = e => {
    setInputReverse(e.target.value)
    let conversion = 0
    try {
      conversion = convertReverse(e.target.value)
    } catch {}

    setOutputReverse(conversion)
  }

  return (
    <div className="center">
      <h1>Kalkulator mord moszeknopowskich</h1>
      <div className="form">
        <div className="field">
          <input className="input" defaultValue="500" value={input} onChange={onChange} />
          ml
        </div>
        <div className="field margin">
          <input className="output" value={output} readOnly />
          mM
        </div>
      </div>
      <div className="form">
        <div className="field margin-reverse">
          <input className="inputReverse" defaultValue="10" value={inputReverse} onChange={onChangeReverse} />
          mM
        </div>
        <div className="field">
          <input className="outputReverse" value={outputReverse} readOnly />
          ml
        </div>
      </div>
    </div>
  )
}