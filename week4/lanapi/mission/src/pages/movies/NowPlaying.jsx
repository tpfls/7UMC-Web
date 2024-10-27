
// import MovieCard from "../../components/MovieCard";
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import CardContainer from '../../components/CardContainer';

// const Token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTYzYzUwZGQwMjI5Y2ViMDUyZGM5ZTNlMGRlOWEyNSIsIm5iZiI6MTcyODI4ODY3NC4zNTAxNDEsInN1YiI6IjY2ZmViY2JhYzlhMTBkNDZlYTdjOWQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hiJR7nmiA0-Hbx5nJuALWjUN0IzIMpWtGzKXplLYSYw";

// const NowPlaying = () => {
//     const [movies, setMovies] = useState([]);
    
//     useEffect(() => {
//         const getMovies = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`, {
//                     headers: {
//                         Authorization: Token,
//                     }
//                 });
//                 setMovies(response.data.results);
//             } catch (error) {
//                 console.error("Error fetching movies:", error);
//             }
//         };
//         getMovies();
//     }, []);
    
//     return (
//         <CardContainer>
//             {movies.map((movie) => (
//                 <MovieCard 
//                     key={movie.id}
//                     posterPath={movie.poster_path}
//                     title={movie.title}
//                     releaseDate={movie.release_date}
//                 />
//             ))}
//         </CardContainer>
//     );
// };

// export default NowPlaying;

import MovieCard from "../../components/MovieCard";
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardContainer from '../../components/CardContainer';

const Token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTYzYzUwZGQwMjI5Y2ViMDUyZGM5ZTNlMGRlOWEyNSIsIm5iZiI6MTcyODI4ODY3NC4zNTAxNDEsInN1YiI6IjY2ZmViY2JhYzlhMTBkNDZlYTdjOWQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hiJR7nmiA0-Hbx5nJuALWjUN0IzIMpWtGzKXplLYSYw";

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`, {
                    headers: {
                        Authorization: Token,
                    }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        getMovies();
    }, []);
    
    return (
        <CardContainer>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id}
                    movieId={movie.id}  // movieId를 전달
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                />
            ))}
        </CardContainer>
    );
};

export default NowPlaying;
