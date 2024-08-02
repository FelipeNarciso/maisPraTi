import { Link } from "react-router-dom"
import { IoLanguage } from 'react-icons/io5';
import styles from './ModuleCSS/Home.module.css'
import { useState } from "react";

function Home() {

    return (
        <div>
            <div className={styles.section01}>
                <div className={styles.header}>
                    <img className={styles.imgLogo} src="./src/components/imagens/logo.png" />
                    <div className={styles.btnTopo}>
                        <div className={styles.select}>
                            <IoLanguage /><select>
                                <option value='pt-br'>Português</option>
                                <option value='en'>English</option>
                            </select>
                        </div>
                        <div>
                            <Link to='/Login'><button>Entrar</button></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.textoPrincipalSection01}>
                    <h1>Filmes, séries e muito mais, sem limites</h1>
                    <h4>Assista onde quiser. Cancele quando quiser.</h4>
                    <h5>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h5>
                    <input type="text" placeholder="Email" /> <button>Vamos lá <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg> </button>
                </div>

                <div className={styles.sectionGradient}>
                    <img src="https://i0.wp.com/mypornu.com/wp-content/uploads/2024/04/45654456.png?fit=1000%2C1000&amp;ssl=1"></img>
                    <div>
                        <p className={styles.tituloPlanoPadrao}>A netflix que você adora por apenas R$ 20,90.</p>
                        <p>Assine o plano Padrão com anúncios</p>
                        <p className={styles.LinkPlanoPadrao}>Saiba mais <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home