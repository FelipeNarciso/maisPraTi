import styles from './ModuleCSS/PaginaInicial.module.css'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

function PaginaInicial() {
    const [movies, setMovies] = useState([])
    const [moviesAcao, setMoviesAcao] = useState([])
    const [moviesAnimacao, setMoviesAnimacao] = useState([])
    const [moviesTerror, setMoviesTerror] = useState([])
    const [moviesComedia, setMoviesComedia] = useState([])


    const filmesAcao = movies.filter(movies => {
        if (movies.genres === 28) {
            setMoviesAcao(movies.genres)
        }
    })

    useEffect(() => {
        const searchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b00c01578845e59e69d79586b58dac81')

                const filmes = response.data.results
                setMovies(filmes)

                setMoviesAcao(filmes.filter(movie => movie.genre_ids.includes(28)))

                setMoviesAnimacao(filmes.filter(movie => movie.genre_ids.includes(16)))

                setMoviesTerror(filmes.filter(movie => movie.genre_ids.includes(27)))

                setMoviesComedia(filmes.filter(movie => movie.genre_ids.includes(35)))
            } catch (error) {
                console.error("Ocorreu um erro: ", error)
            }
        }
        searchMovies()
    }, [])

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.navbar}>
                    <img className={styles.imgLogo} src="./src/components/imagens/logo.png" />
                    <h5>Inicio</h5>
                    <h5>Séries</h5>
                    <h5>Filmes</h5>
                    <h5>Mais Recentes</h5>
                    <h5>Minha Lista</h5>
                </div>
                <div className={styles.btnTopo}>
                    <button><FaSearch /></button>
                    <input type="text" />
                    <Link to='/'><button>Logout</button></Link>

                </div>
            </div>

        
            <div className={styles.box}>
                {/* {movies.map(movie => (
                    <div key={movie.id}>
                        <p>{movie.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    </div>
                ))} */}


            </div>

            <div className={styles.FilmeDestaque}>
                <h1>Filmes de Ação</h1>
                <div className={styles.FilmeDestaque}>
                {moviesAcao.map(moviesAcao => (
                    <div key={moviesAcao.id}>
                        <p>{moviesAcao.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${moviesAcao.poster_path}`} alt="" />
                    </div>
                ))}
                </div>
            </div>
            
            <div className={styles.FilmeDestaque}>
                <h1>Filmes de Animação</h1>
                <div className={styles.FilmeDestaque}>
                {moviesAnimacao.map(movies => (
                    <div key={movies.id}>
                        <p>{movies.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.FilmeDestaque}>
                <h1>Filmes de Terror</h1>
                <div className={styles.FilmeDestaque}>
                {moviesTerror.map(movies=> (
                    <div key={movies.id}>
                        <p>{movies.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.FilmeDestaque}>
                <h1>Filmes de Comédia</h1>
                <div className={styles.FilmeDestaque}>
                {moviesComedia.map(movies => (
                    <div key={movies.id}>
                        <p>{movies.title}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="" />
                    </div>
                ))}
                </div>
            </div>


        </div>



    )
}
export default PaginaInicial