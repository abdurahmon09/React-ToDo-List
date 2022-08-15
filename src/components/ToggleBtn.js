import { useState } from "react"

export default function ToggleBtn() {
  const [toggleBtn, setToggleBtn] = useState(false)
    
    return (
        <>
        <button onClick={() => setToggleBtn(!toggleBtn)} className="btn btn-secondary my-2">Toggle btn</button>
      { toggleBtn ? 
        <p className="lead">
          YouTube Content
        </p>
        : null
      }
        </>
    )
}