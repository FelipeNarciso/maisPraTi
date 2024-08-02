import styles from './ModuleCSS/Login.module.css'
import Footer from './FooterLogin'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [erroEmail, setErroEmail] = useState('')

    const [senha, setSenha] = useState('')
    const [erroSenha, setErroSenha] = useState('')

    const navigate = useNavigate()

    const validacao = () => {
        let logged = true

        if(email !== 'admin'){
            setErroEmail('Email inválido! Tente novamente')
            logged = false
        }else{
            setErroEmail('')
            logged = true
        }
        if(senha !== 'admin'){
            setErroSenha('Senha inválida! Tente novamente')
            logged = false
        }else {
            setErroSenha('')
            logged = true
        }

        if(logged){
            navigate('/PaginaInicial')
        }
    }
    return (
        <div className={styles.body}>
            <Link to='/' ><img className={styles.img} src="./src/components/imagens/logo.png"/></Link>
            <div className={styles.box}>
                <div className={styles.content}>
                    <h1>Entrar</h1>
                    <input className={styles.inputForm} type="text" placeholder='Email ou número de celular' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <p className={styles.erro}>{erroEmail}</p>
                    <input className={styles.inputForm} type="password" placeholder='Senha' value={senha} onChange={(event) => setSenha(event.target.value)}/>
                    <p className={styles.erro}>{erroSenha}</p>
                    <button id={styles.btnEntrar} onClick={validacao}>Entrar</button>
                    <p className={styles.centralizarTexto}>OU</p>
                    <button id={styles.btnCodigoDeAcesso}>Usar um código de acesso</button>
                    <p id={styles.esqueceuSenha}>Esqueceu a senha?</p>
                    <div>
                        <input type="checkbox"/> <span>Lembre-se de mim</span>
                    </div>
                    <p id={styles.novoAqui}>Novo por aqui? <span id={styles.assineAgora}>Assine Agora</span>.</p>
                    <div className={styles.footerForm}>
                        <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <span id={styles.saibaMais}>Saiba mais.</span></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
export default Login