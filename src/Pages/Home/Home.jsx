import axios from "axios";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";


export default function Home(){
    const [movies , setMovies] = useState(null);
    const [topMovies , setTopMovies] = useState(null);

   async function getTrendingMovies(){
    const options = {
        method: 'GET',
        url : `https://api.themoviedb.org/3/trending/movie/day`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcxOTk1NjU0My44NTM4NDQsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZbhKiCcUpGpw9G4lf-2p33JgOY_npuJPQzTjAffhJA'
        }
      };
      
     let {data} = await axios.request(options);
    //  console.log(data.results);
     setMovies(data.results);
    }
    useEffect(()=>{
        getTrendingMovies()
    },[])
    async function getTopRated(){
        const options = {
            method: 'GET',
            url : `https://api.themoviedb.org/3/movie/top_rated`,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcxOTk1NjU0My44NTM4NDQsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZbhKiCcUpGpw9G4lf-2p33JgOY_npuJPQzTjAffhJA'
            }
          };
          
         let {data} = await axios.request(options);
        //  console.log(data.results);
        setTopMovies(data.results);
    }
    useEffect(()=>{
        getTopRated()
    },[])
   
    return (<>
    <section className={`home ${styles.home} mb-28`}>
        <div className="container">
            {topMovies == null ? (<Loading/>) : (
               <div>
                <h1 className="font-bold text-2xl mb-5  ">Top Rated Movies</h1>
                 <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" >
                    {topMovies.map((topMovie)=> <swiper-slide key={topMovie.id}>
                        <div className="relative h-[650px] cursor-pointer">
                            <div className="">
                            <img src={`https://image.tmdb.org/t/p/w500${topMovie.backdrop_path}`} className="w-full h-96 object-cover" alt="" />
                            </div>
                            <div className="absolute bottom-32 left-10" >
                                <img src={`https://image.tmdb.org/t/p/w500${topMovie.poster_path}`} className="w-48 h-50 object-cover" alt="" />
                                <span className="absolute left-16 "><span className="font-semibold text-2xl">{topMovie.vote_average}</span>/10</span>
                            </div>
                            <div className="left-64 absolute mt-3">
                                <div>
                                    <span className="font-bold text-4xl">{topMovie.title  }</span>
                                    <span className="font-medium text-lg">   ({ topMovie.release_date.slice(0,4)})</span>
                                </div>
                                <p className="font-meduim text-lg mt-1 line-clamp-3">{topMovie.overview}</p>
                            </div>
                        </div>
                    </swiper-slide>)}
              </swiper-container>
               </div>
            )}
           {movies == null ? 
           (<Loading/>) 
           : (
             <div>
                {movies.length == 0 ? ("") : (<h2 className="font-bold text-2xl mb-5  ">Trending Movies</h2>
)}
                <div className="grid grid-cols-12 gap-8">
             {movies.map((movie)=> <Link to={`/movies/${movie.id}`} key={movie.id}  className="movie cursor-pointer overflow-hidden col-span-12 sm:col-span-6 lg:col-span-3 ">
                 <div className="relative">
                 <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-full object-cover" alt="" />
                 <div className="absolute  px-2 py-4 content">
                     <h2 className="font-bold text-xl">{movie.title}</h2>
                     <p className="italic line-clamp-2 font-medium">{movie.overview}</p>
                 </div>
                 </div>
             </Link>)}
             
         </div>
             </div>
           )}
        </div>
    </section>
    </>)
}