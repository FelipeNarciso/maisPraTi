import styles from "./ModuleCSS/PaginaInicial.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import Footer from "./FooterLogin";
import gif from "./imagens/loading-gif.gif";

function PaginaInicial() {
  const [moviesAcao, setMoviesAcao] = useState([]);
  const [moviesAnimacao, setMoviesAnimacao] = useState([]);
  const [moviesTerror, setMoviesTerror] = useState([]);
  const [moviesComedia, setMoviesComedia] = useState([]);
  const [movie, setMovie] = useState("");
  const [show, setShow] = useState(false);
  const [querry, setQuerry] = useState("");
  const [moviesSearch, setMoviesSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const carroselConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  setInterval(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    const searchApi = async () => {
      try {
        const allMovies = [];
        const response1 = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "b00c01578845e59e69d79586b58dac81",
              page: 1,
              language: "pt-BR",
            },
          }
        );
        allMovies.push(...response1.data.results);

        const response2 = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "b00c01578845e59e69d79586b58dac81",
              page: 2,
              language: "pt-BR",
            },
          }
        );
        allMovies.push(...response2.data.results);

        setMoviesAcao(
          allMovies.filter((movie) => movie.genre_ids.includes(28))
        );

        setMoviesAnimacao(
          allMovies.filter((movie) => movie.genre_ids.includes(16))
        );

        setMoviesTerror(
          allMovies.filter((movie) => movie.genre_ids.includes(27))
        );

        setMoviesComedia(
          allMovies.filter((movie) => movie.genre_ids.includes(35))
        );
      } catch (error) {
        console.error("Ocorreu um erro: ", error);
      }
    };
    searchApi();
  }, []);

  const searchMovie = async () => {
    try {
      setErro(false)
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "b00c01578845e59e69d79586b58dac81",
            query: querry,
            language: "pt-BR",
          },
        }
      );
      if(response.data.results.length === 0){
        setErro(true)
      }else{
        setErro(false)
        setMoviesSearch(response.data.results)
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = (movies) => {
    setMovie(movies);
    console.log(movies);
    setShow(true);
  };

  return (
    <div className="bg-black">
      <nav class="navbar navbar-expand-lg bg-black pt-3 pb-lg-5">
        <div class="container-fluid">
          <img
            className={`img-fluid ${styles.imgLogo}`}
            src="./src/components/imagens/logo.png"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Séries
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Filmes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Mais Recentes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Minha lista
                </a>
              </li>
            </ul>
            <div>
              <Link to="/">
                <button
                  className={`${styles.btnSair} border-0 rounded-1 ps-3 pe-3 text-white`}
                >
                  Sair
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {loading ? (
        <div className="d-flex justify-content-center vh-100 pt-5">
          <img
            src={gif}
            alt="erro"
            className="text-center position-absolute pt-5"
          />
        </div>
      ) : (
        <>
          <div className="text-white pb-5">
            <h1 className="text-center">Filmes de Ação</h1>
            <div className="ms-5 me-5">
              <Slider {...carroselConfig}>
                {moviesAcao.map((movies) => (
                  <div key={movies.id}>
                    <img
                      className={`img-fluid rounded-4 p-1 ${styles.imgSlider}`}
                      src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                      onClick={() => handleShow(movies)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="text-white pb-5">
            <h1 className="text-center">Filmes de Animação</h1>
            <div className="ms-5 me-5">
              <Slider {...carroselConfig}>
                {moviesAnimacao.map((movies) => (
                  <div key={movies.id}>
                    <img
                      className={`img-fluid rounded-4 p-1 ${styles.imgSlider}`}
                      src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                      onClick={() => handleShow(movies)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="text-white pb-5">
            <h1 className="text-center">Filmes de Terror</h1>
            <div className="ms-5 me-5">
              <Slider {...carroselConfig}>
                {moviesTerror.map((movies) => (
                  <div key={movies.id}>
                    <img
                      className={`img-fluid rounded-4 p-1 ${styles.imgSlider}`}
                      src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                      onClick={() => handleShow(movies)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="text-white pb-5">
            <h1 className="text-center">Filmes de Comédia</h1>
            <div className="ms-5 me-5">
              <Slider {...carroselConfig}>
                {moviesComedia.map((movies) => (
                  <div key={movies.id}>
                    <img
                      className={`img-fluid rounded-4 p-1 ${styles.imgSlider}`}
                      src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                      onClick={() => handleShow(movies)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <div className="pt-2">
                <h5>
                  <strong>Data de Lançamento: </strong>
                  {movie.release_date}
                </h5>
                <h5>
                  <strong>Avaliação: </strong>
                  {movie.vote_average}
                </h5>
                <h5>
                  <strong>Sinopse: </strong>
                  {movie.overview}
                </h5>
              </div>
            </Modal.Body>
          </Modal>

          <div className="pb-5">
            <h1 className="text-center text-white">
              Não encontrou o que queria? Pesquise &#x1F447;
            </h1>
            <div className="d-flex justify-content-center align-items-center gap-3 pt-3">
              <input
                class="w-50 rounded-3 ps-2 pt-2 pb-2"
                type="text"
                placeholder="Pesquise"
                value={querry}
                onChange={(event) => {
                  setQuerry(event.target.value);
                }}
              />
              <FaSearch
                className={`fs-2 text-white ${styles.btnSearch}`}
                onClick={searchMovie}
              />
            </div>

            <div className="text-white pb-5 pt-5">
              <div className="ms-5 me-5">
                {erro ? (
                  <h1 className="text-center">Nenhum filme encontrado!</h1>
                ) : (
                  <>
                    {moviesSearch && (
                      <Slider {...carroselConfig}>
                        {moviesSearch.map((movies) => (
                          <div key={movies.id}>
                            <img
                              className={`img-fluid rounded-4 p-1 ${styles.imgSlider}`}
                              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                              onClick={() => handleShow(movies)}
                            />
                          </div>
                        ))}
                      </Slider>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
export default PaginaInicial;
