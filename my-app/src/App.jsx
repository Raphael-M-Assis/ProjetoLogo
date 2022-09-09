import './App.css';

function App() {
  return (
    <div class="Container">

    <img src="./shopseg.png" alt="LogoShopseg" class="imagem_shopseg"/>

      <form>
        <div class="Container_login">
          <label for="inputLogin">Código </label>
          <input type="text" name="inputLogin" id="inputLogin" />
          <label for="inputSenha">Senha: </label>
          <input type="text" name="inputSenha" id="inputSenha" />
        </div>
      </form>

      <button type="submit" class="botaoEntrar">ENTRAR</button>
    </div>
  );
}

export default App;
