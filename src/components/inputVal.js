import { useState } from "react"

export default function InputVal() {
  const [value, setValue] = useState("name")

    return (
        <>
        <p> Value: {value}</p>
      <input type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
        className="form-control"/>
        </>
    )
}