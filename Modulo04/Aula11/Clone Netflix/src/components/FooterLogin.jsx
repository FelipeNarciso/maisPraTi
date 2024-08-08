import styles from './ModuleCSS/FooterLogin.module.css'
import { IoLanguage } from 'react-icons/io5'

function FooterLogin() {
    return (
        <div className={`text-secondary bg-black ${styles.footer} d-flex flex-column ps-5`}>
            <div className='pt-3 ps-3'>
                <span>Dúvidas? Ligue 0800 591 2876</span>
            </div>
            <div className='row row-cols-2 row-cols-lg-4 d-flex justify-content-center p-3 text-decoration-underline mw-100 align-items-center'>
                <div className='col d-flex flex-column justify-content-center gap-2'>
                    <span>Perguntas frequentes</span>
                    <span>Preferências de cookies</span>
                </div>
                <div className='col d-flex flex-column justify-content-center gap-2'>
                    <span>Central de ajuda</span>
                    <span>Informações Coorporativas</span>
                </div>
                <div className='col'>
                    <span>Termos de Uso</span>
                </div>
                <div className='col'>
                    <span>Privacidade</span>
                </div>
            </div>

            <div className='ps-3 pb-5'>
                <span className={`border border-secondary p-1 ${styles.sizeLanguage}`}><IoLanguage className={`text-white `}/><select className='bg-black text-white border-0'>
                    <option value='pt-br'>Português</option>
                    <option value='en'>English</option>
                </select></span>
            </div>

        </div>
    )
}

export default FooterLogin