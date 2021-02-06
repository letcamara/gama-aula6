import Nav from '../components/Nav'

let Home = {
  render: async () => {
    let NavBar = await Nav.render()
    let view = `<h1>Home page</h1> 
    ${NavBar}`
    return view
  },
  after_render: async () => {
    // vazio

  }
}

export default Home