import { useState } from "react"

type loginInputs = {
  username: string,
  password: string
}

const Login = () => {
  const [inputs, setInputs] = useState<loginInputs>({ username: '', password: '' })

  const loginHandler = () => {
    let resp = false
    if (JSON.stringify(inputs) == JSON.stringify({ username: 'Mary', password: 'rocks!' })) {
      document.cookie = 'loggedIn=yes'
      window.location.href = '/'
    }
    console.log('failed login')
    return resp
  }

  return (
    <div>
      <label>Username</label>
      <input onChange={(e) => setInputs({ ...inputs, username: e.target.value })} value={inputs.username}></input>
      <label>Password</label>
      <input type="password" onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password}></input>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Login