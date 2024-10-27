

// import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
// import useFetch from "../../hooks/UseFetch";

// const PageWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
// `;


// const MovieImageWrapper = styled.div`
//   width: 100vw;
//   height: 500px;
//   position: relative;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const CreditWrapper = styled.div`
//   display: flex;
//   max-width: 100%;
//   flex-direction: row;
//   left:0;
//   gap: 10px;
//   box-sizing: border-box;
//   flex-wrap: wrap
// `;

// const CreditImage = styled.img`
//     width: 120px;
//     height: 120px;
//     border-radius: 50%;
//     object-fit: cover;
//     background-color: black;
//     display: block;
//     border: 2px solid white;
//     justify-content: center;
//     }
// `;

//   const MovieImage = styled.div`
//     width: 100vw;
//     height: 100%;
//     background-image: 
//       linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 50%), 
//       url(${props => props.image});
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     border-radius: 8px;
//   `;

// const MovieText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   position: absolute;
//   top: 0;
//   left: 0;
//   color: white;
//   max-width: 60%;
//   border-radius: 8px;
//   overflow: hidden;
//   z-index: 2;
// `;

// const CreditText = styled.div`
//   width: 150px;
//   color: white;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
// `;


// const MovieDetailPage = () => {
//     const { movieId } = useParams();
//     const { data: movieData, isLoading: movieLoading, isError: movieError } = 
//     useFetch(`/movie/${movieId}?language=ko-KR`);
//     const { data: creditsData, isLoading: creditsLoading, isError: creditsError } = 
//     useFetch(`/movie/${movieId}/credits?language=ko-KR`);


//     if (movieLoading || creditsLoading) {
//         return (
//           <div>
//             <h1 style={{ color: 'white' }}>로딩 중 입니다..</h1>
//           </div>
//         );
//       }
    
//       if (movieError || creditsError) {
//         return (
//           <div>
//             <h1 style={{ color: 'white' }}>에러가 발생했습니다.</h1>
//           </div>
//         );
//       }
    
//       return (
//         <PageWrapper>
//           {movieData && (
//             <div>
//               <MovieImageWrapper>
//                 <MovieImage
//                   image={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`}
//                 />
//                 <MovieText>
//                   <h3 style={{marginTop:'10px',marginLeft:'10px', fontSize:'40px'}}>{movieData.title}</h3>
//                   <div style={{fontSize:'24px',marginLeft:'10px'}}>평균 {movieData.vote_average.toFixed(1)}</div>
//                   <div style={{fontSize:'24px',marginLeft:'10px'}}>{movieData.release_date.split('-')[0]}</div>
//                   <div style={{fontSize:'24px',marginLeft:'10px'}}>{movieData.runtime}분</div>
//                   <h3 style={{fontSize:'30px',marginLeft:'10px'}}>{movieData.tagline}</h3>
//                   <p style={{fontSize:'18px',marginLeft:'10px'}}>{movieData.overview}</p>
//                 </MovieText>
//               </MovieImageWrapper>
//               <h1 style={{ color: 'white', paddingLeft: '50px' }}>감독/출연</h1>
//               <CreditWrapper style={{ color: 'white', paddingLeft: '20px' }}>
//                 {creditsData?.cast?.map((cast) => (
//                   <div style={{ color: 'white', paddingLeft: '30px' }}>
//                     <CreditImage
//                       src={
//                         cast.profile_path
//                           ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
//                           : ''
//                       }
//                     />
//                     <CreditText>{cast.name}</CreditText>
//                     <CreditText>{cast.character}</CreditText>
//                     </div>
//                 ))}
//               </CreditWrapper>
//             </div>
//           )}
//         </PageWrapper>
//       );
//     };
    
//     export default MovieDetailPage;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetailPage = () => {
    const { movieId } = useParams();  // movieId 파라미터 가져오기
    const [movie, setMovie] = useState(null);
    const Token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTYzYzUwZGQwMjI5Y2ViMDUyZGM5ZTNlMGRlOWEyNSIsIm5iZiI6MTcyODI4ODY3NC4zNTAxNDEsInN1YiI6IjY2ZmViY2JhYzlhMTBkNDZlYTdjOWQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hiJR7nmiA0-Hbx5nJuALWjUN0IzIMpWtGzKXplLYSYw";

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=ko`, {
                    headers: {
                        Authorization: Token,
                    }
                });
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
    );
};

export default MovieDetailPage;
