import Utils from '../src/service/Utils'

// Imports
import Home from './views/pages/Home'
import Login from './views/pages/Login'
import Error404 from './views/pages/Error'


// Routes
let routes = {
  '/': Home,
  '/login': Login
}

const router = async() => {
  const root = null || document.getElementById('root')

  // ptnt Obter url do NAvegador
  let request = Utils.parseRequestURL()

  // Analise de URL
  let parseURL = (request.resource ? '/' + request.resource: '/') + (request.id ? '/:id' + request.id: '') + (request.verb ? '/' + request.verb: '')

  // Renderiza 
  let page = routes[parseURL] ? routes[parseURL] : Error404

  root.innerHTML = await page.render()

  await page.after_render()
}

// Observa as mudancas na hash
window.addEventListener('haschange', router)

//Observar o carregamento da página
window.addEventListener('load', router)

