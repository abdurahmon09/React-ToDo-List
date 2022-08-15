import { useState } from "react";

export const useFetching = (collback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [ err, setErr] = useState("")

  const fetching = async (...args) => {
      try {
        setIsLoading(true)
        await collback(...args)
      }catch (e) {
        setErr(e.message)
      }finally {
        setIsLoading(false)
      }
  }

  return [fetching, isLoading, err]
}