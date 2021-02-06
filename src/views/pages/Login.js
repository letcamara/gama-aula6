import Nav from '../components/Nav'

let Login = {
  render: async () => {
    let NavBar = await Nav.render()
    let view = `${NavBar}
    <div class="login--box-container">
      <div>
        <h1>Login page</h1>
      </div>
    </div>`
    return view
  },
  after_render: async () => {
    // vazio
  }
}

export default Login