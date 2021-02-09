import api from '../../service/api';
import Nav from '../components/Nav'

let Home = {
  render: async () => {
    let NavBar = await Nav.render()
    let view = `${NavBar}
          <div class="d-flex justify-content-center align-items-center">
            <div class="content-box-card">
              <div class="mb-4 mt-4 text-center">
                  <h3>Não tem conta? Entre para <br/> <span class="text-color--purple">Gama Bank</span></h3>
              </div>
              <form id="register-account" action="/login.html" >
                <div class="form-content mb-4">
                  <input class="input cpf" type="text" name="cpf" placeholder="CPF">
                  <span class="border"></span>
                </div>
                <div class="form-content mb-4">
                  <input class="input nome" type="text" name="name" placeholder="Nome completo">
                  <span class="border"></span>
                </div>
                <div class="form-content mb-4">
                  <input class="input email" type="email" name="email" placeholder="Digite seu email">
                  <span class="border"></span>
                </div>
                <div class="form-content mb-4">
                  <input class="input senha" type="password" name="password" placeholder="Digite sua senha">
                  <span class="border"></span>
                </div>
                <div class="form-content mb-4">
                  <input class="input confirm-senha" type="password" name="confirm-password" placeholder="Confirme sua senha">
                  <span class="border"></span>
                </div>
                <div class="mt-4 mb-3">
                    <div class="loader">
                      <button class="content-bg--purple text-color--white" type="submit" id="register-account">
                        Continuar
                        <span class="btn-label"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </div> 
    `
    return view
  },
  after_render: async () => {
    document.getElementById('register-account').addEventListener('submit', (e)=>{
      e.preventDefault();
      let cpf = document.querySelector('.cpf').value
      let nome = document.querySelector('.nome').value
      let email = document.querySelector('.email').value
      let senha = document.querySelector('.senha').value
      let confirmSenha = document.querySelector('.confirm-senha').value
      let loaderContent = document.querySelector('.loader')

      if(confirmSenha.length > 5 && confirmSenha === senha) {
        loaderContent.innerHTML = `
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only"></span>
        </div>
        `
        api.post(``, {
          cpf: cpf,
          login:email,
          nome: nome,
          senha: senha
        }, 
        {
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          localStorage.setItem('userData', JSON.stringify(response.data))
        }).catch(error => {
          console.error(error)
        })
      } else {
        window.alert('As senhas devem ser iguais')
      }
    })

  }
}

export default Home