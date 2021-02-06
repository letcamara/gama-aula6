import api from '../../service/api'

let Nav = {
  render: async () => {
    let view = `
    <h1>Bank</h1>
    <nav>
      <a href="#/">Home</a> 
      <a href="#/login">Login</a>
    </nav>
    `
    return view
  },
  after_render: async () => {
    // vazio
  }
}

export default Nav