import { useState } from "react"

function Header({ title, likes, handleClick }) {
  return (
    <>
      <h1>{title ? title : "I 💙 React"}</h1>
      <br />
      <button onClick={handleClick}>Likes: {likes}</button>
    </>
  )
}

export default function HomePage() {
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes((prev) => prev + 1)
  }

  return (
    <Header
      title="Develop. Preview. Ship. 🚀"
      handleClick={handleClick}
      likes={likes}
    />
  )
}
