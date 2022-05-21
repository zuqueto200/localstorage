import { useEffect, useState } from "react"



export function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')))


  function FnBt(e) {

    const email = document.getElementById('email').value
    const senha = document.getElementById('pass').value

    var validacao = true

    if (localStorage.getItem('users') !== 'null') {

      users.map((e) => {
        if (e.email === email) {
          validacao = false
        }
      })

    } else {

      if (validacao === true && email !== '' && senha !== '') {

        setUsers([{

          email: email,
          senha: senha
        }])

      }
    }


    if (validacao === true && email !== '' && senha !== '') {

      setUsers([...users, {
        email: email,
        senha: senha
      }])

    }

  }




  useEffect(() => {

    localStorage.setItem('users', JSON.stringify(users))

  }, [users])








  return (
    <div className="centralizar">

      <div className="divInput">

          <h3>ARMAZENAMENTO EM LOCAL STORAGE</h3>
        <label >
          Email
          <input id="email" type='email' />
        </label>

        <label>
          Senha
          <input id="pass" type='password' />
        </label>

        <button id="btCadastrar" onClick={(e) => { FnBt(e) }}>CADASTRAR</button>

        <div className="listando">

          {users && (users.map((e, i) => (
            <div className="linha" key={i}>


              <div className="divEmailSenha">

                <div className={"email" + (i%2==0?" l1":" l2")} >

                  {e.email}

                </div>


                <div className={"senha" + (i%2==0?" l1":" l2")}>

                  {e.senha}

                </div>
                <div className="divBtDel">

                  <button className={"del" + (i%2==0?" l1":" l2")} onClick={() => { setUsers(users.filter((item, index) => index !== i)) }}>x</button>
              </div>
              </div>
            </div>

          )))}


        </div>
      </div>
    </div>
  );
}


