import Nav from '../components/Nav'

let Login = {
  render: async () => {
    let NavBar = await Nav.render()
    let view = `<h1>Login page</h1> 
    ${NavBar}`
    return view
  },
  after_render: async () => {
    // vazio
  }
}

export default Login