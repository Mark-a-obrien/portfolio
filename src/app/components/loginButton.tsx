"use client"

function LoginButton() {

  function handleClick(event: React.MouseEvent): void {
    // event.preventDefault();
    // console.log(username, password)
  }

  return (
    <button type="submit" onClick={handleClick}>Login</button>
  )
}

export default LoginButton