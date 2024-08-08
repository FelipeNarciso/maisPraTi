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

        if (email !== 'admin') {
            setErroEmail('Email inválido! Tente novamente')
            logged = false
        } else {
            setErroEmail('')
            logged = true
        }
        if (senha !== 'admin') {
            setErroSenha('Senha inválida! Tente novamente')
            logged = false
        } else {
            setErroSenha('')
            logged = true
        }

        if (logged) {
            navigate('/PaginaInicial')
        }
    }
    return (
        <div className={styles.body}>
            <Link to='/' ><img className={` img-fluid ${styles.img} pt-3`} src="./src/components/imagens/logo.png" /></Link>
            <div className='d-flex justify-content-center pb-3 pt-1'>
                <div className='row d-flex justify-content-center'>
                    <div className='d-flex flex-column gap-3 justify-content-center col col-md-10 col-lg-7 text-white bg-black bg-opacity-75 p-5 rounded-3'>
                        <h1 className='fw-bolder fs-2'>Entrar</h1>
                        <input className='bg-transparent p-3 rounded-1 border border-secondary text-white' type="text" placeholder='Email ou número de celular' value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <span className='text-danger'>{erroEmail}</span>
                        <input className='bg-transparent p-3 rounded-1 border border-secondary text-white' type="password" placeholder='Senha' value={senha} onChange={(event) => setSenha(event.target.value)}/>
                        <span className='text-danger'>{erroSenha}</span>
                        <button className={`${styles.btnEntrar} text-white rounded-1 p-2`} onClick={validacao}>Entrar</button>
                        <span className='text-center text-secondary'>OU</span>
                        <button className={`${styles.btnCodigoAcesso} text-white rounded-1 p-2`}>Usar código de acesso</button>
                        <span className={`text-center ${styles.esqueceuSenha}`}>Esqueceu a senha?</span>
                        <div>
                            <input type="checkbox" />
                            <span className='ps-2'>Lembre-se de mim</span>
                        </div>
                        <span className='text-secondary'>Novo por aqui? <span className={`text-white ${styles.saibaMais}`}>Assine Agora</span> </span>
                        <span className={`text-secondary ${styles.footerForm}`}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <span className={`text-primary ${styles.linkSaibaMais}`}>Saiba mais.</span></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Login