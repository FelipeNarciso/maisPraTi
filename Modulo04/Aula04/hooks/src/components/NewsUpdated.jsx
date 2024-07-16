import { useEffect ,useState } from "react";


function NewsUpdated () {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        const fetchNews =  async () => {
            setIsLoading(true)

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setNews(data.slice(0, 5))
            } catch(error){
                console.log('Ligue para o suporte' , error)
            }

            setIsLoading(false)
        }

        fetchNews()

        const interval = setInterval(fetchNews , 10000)

        return () => clearInterval(interval)
    }, [])



    return(
        <div>
            <h1>Últimas notícias simuladas</h1>
            {isLoading ? (
                <p>Carregando notícias</p>
            ) : (
                <ul>
                    {
                        news.map((article) => (
                            <li key={article.id}></li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default NewsUpdated