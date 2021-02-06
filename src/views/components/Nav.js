import api from '../../service/api'

let Nav = {
  render: async () => {
    let view = `
    <a href="#/">Home</a> 
    <a href="#/login">Login</a>`
    return view
  },
  after_render: async () => {
    // vazio
  }
}

export default Nav