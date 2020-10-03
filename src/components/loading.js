import React, { useEffect, useState } from "react"

const points_states = ["", ".", "..", "...", "..."]

const Loading = () => {
  const [points, setPoints] = useState(0)

  const nextPoints = (points) =>
    points === points_states.length ? 0 : points + 1

  useEffect(() => {
    const interval = setInterval(() => setPoints(nextPoints), 250)

    return () => clearInterval(interval)
  }, [])

  return <p>Loading{points_states[points]}</p>
}

export default Loading
