import styles from './ModuleCSS/FooterLogin.module.css'
import { IoLanguage } from 'react-icons/io5'

function FooterLogin() {
    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <div>
                    <p>Dúvidas? Ligue 0800 591 2876</p>
                    <p className={styles.link}>Perguntas frequentes</p>
                    <p className={styles.link}>Preferências de cookies</p>

                    <p className={styles.select}><IoLanguage /><select name="" id="">
                        <option value='pt-br'>Português</option>
                        <option value='en'>English</option>
                    </select></p>
                </div>

                <div>
                    <p className={styles.link}>Central de Ajuda</p>
                    <p className={styles.link}>Informações corporativas</p>
                </div>

                <div>
                    <p className={styles.link}>Termos de Uso</p>
                </div>

                <div>
                    <p className={styles.link}>Privacidade</p>
                </div>
            </div>
        </div>
    )
}

export default FooterLogin