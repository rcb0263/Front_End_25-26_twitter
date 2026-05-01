import { useEffect, useState } from "react"
import "./style.css"
import { Login, Register } from "@/lib/api/database"
import { useRouter } from "next/navigation"

export const LoginContainer = () => {
  const [crear, setCrear] = useState<boolean>(false)
  const [mail, setMail] = useState<string>('Rolo@mail.com')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('Rolo')
  const router = useRouter()
  
  return(
  <div className="loginContainer">
    <div className="chooseContainer">
      <button className={crear==false?"tab-selected":"tab-not-selected"} 
      onClick={()=>{setCrear(false)}}
      disabled={!crear}
      >Iniciar Sesion</button>
      <button className={crear==true?"tab-selected":"tab-not-selected"} 
      onClick={()=>{setCrear(true)}}
      disabled={crear}
      >Crear Cuenta</button>
    </div>
    <form>
      {crear && <div className="in">
        <label>Username</label>
        <input 
        id="username"
        value={userName}
        onChange={e=>setUserName(e.target.value)}
        placeholder="tu_usuario"/>
      </div>}
      <div className="in">
        <label>Email</label>
        <input 
        id="login-email"
        type="email"
        value={mail}
        onChange={e=>setMail(e.target.value)}
        placeholder="Mail"/>
      </div>
      <div className="campo">
        <label>Contraseña</label>
        <input 
        id="login-password"
        type="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        placeholder="Contraseña"/>
      </div>
      <button 
      onClick={async (e) => {
        e.preventDefault()
        try {
          if (crear) {
            const res = await Register({
              username: userName,
              email: mail,
              password: password,
            });
            document.cookie = `token=${res.token}; path=/; max-age=72000;`
            document.cookie = `user=${encodeURIComponent(JSON.stringify(res.user))}; path=/; max-age=72000;`;
          } else {
            const res = await Login({
              email: mail,
              password: password,
            });
            document.cookie = `token=${res.token}; path=/; max-age=72000;`
            document.cookie = `user=${encodeURIComponent(JSON.stringify(res.user))}; path=/; max-age=72000;`;
          }

          router.push("/")
        } catch (error: any) {
          console.error(error.response?.data || error.message);
        }
        }}> {crear==true?'Crear Cuenta':'Iniciar Sesion'}</button>
        </form>
      </div>
    )
}


