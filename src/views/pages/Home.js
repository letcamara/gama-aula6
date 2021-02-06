import Nav from '../components/Nav'

let Home = {
  render: async () => {
    let NavBar = await Nav.render()
    let view = `${NavBar}
    <h1>Home page</h1> 
    `
    return view
  },
  after_render: async () => {
    // vazio

  }
}

export default Home