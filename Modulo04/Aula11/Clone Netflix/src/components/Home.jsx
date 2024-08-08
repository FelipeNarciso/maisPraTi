import { Link } from "react-router-dom"
import { IoLanguage } from 'react-icons/io5';
import styles from './ModuleCSS/Home.module.css'

function Home() {
    return (
        <div>
            <div className={styles.section01}>
                <div className='d-flex justify-content-between align-items-center  pt-3 pb-3 pe-2 ps-2 pe-lg-5 ps-lg-5'>
                    <img className={`img-fluid ${styles.imgLogo} ms-lg--5`} src="./src/components/imagens/logo.png" />
                    <div className='pe-lg--5'>
                        <span className='border border-secondary p-2 me-2 rounded-1 bg-black bg-opacity-50'><IoLanguage className='text-white me-1' /><select className='bg-transparent text-white border-0'>
                            <option className="text-black" value='pt-br'>Português</option>
                            <option className="text-black" value='en'>English</option>
                        </select></span>

                        <Link to='/Login'><button className={`rounded-2 border-0 text-white pt-1 pb-1 ps-3 pe-3 ${styles.btnEntrar}`}>Entrar</button></Link>
                    </div>
                </div>

                <div className="text-white d-flex flex-column justify-content-center align-items-center text-center gap-3 p-5">
                    <h4 className="fs-1 fw-bolder">Filmes, séries e muito mais, sem limites</h4>
                    <h5>Assista onde quiser. Cancele quando quiser.</h5>
                    <h5>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h5>
                    <div className='row d-flex justify-content-center'>
                        <input type="text" placeholder="Email" className="col col-lg-8 col-12 bg-black bg-opacity-50 p-lg-3 p-2 border border-secondary rounded-2 text-white" />
                        <button className={`col col-lg-3 col-6 p-lg-3 ms-lg-2 mt-3 mt-lg-0 p-2 rounded-2 text-white fs-5 border-0 ${styles.btnVamosLa}`}>Vamos lá <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg> </button>
                    </div>
                </div>

                <div className={`${styles.gradient} d-flex justify-content-center gap-5`}>
                    <img className={`img-fluid ${styles.imgGradient}`} src="https://i0.wp.com/mypornu.com/wp-content/uploads/2024/04/45654456.png?fit=1000%2C1000&amp;ssl=1"></img>
                    <div className="text-white d-flex flex-column">
                        <span>A netflix que você adora por apenas R$ 20,90.</span>
                        <span>Assine o plano Padrão com anúncios</span>
                        <span>Saiba mais</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home