import { useFormik } from "formik"
import { Link } from "react-router-dom";
import styles from "./AllMovies.module.css"
import axios from "axios";
import {  useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";



export default function AllMovies(){

    const [movies , setMovies] = useState(null);

  

    let formik = useFormik({
        initialValues : {
            name : ""
        },
        onSubmit : search
    })


  async  function search(values){
        const options = {
            method: 'GET',
            url : `https://api.themoviedb.org/3/search/movie?query=${values.name}`,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcyMDIwMzQ1OS41MjIzNzMsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BAiyGDm6VfikB4v7lnQ3yRFcyUwXvv5vWkoIzoWHFms'
            }
          };
          
         let {data} = await axios.request(options);
         setMovies(data.results);
    }

    async function getMovies(page){
        const options = {
            method: 'GET',
            url : `https://api.themoviedb.org/3/discover/movie?page=${page}`,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcyMDIwMzQ1OS41MjIzNzMsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BAiyGDm6VfikB4v7lnQ3yRFcyUwXvv5vWkoIzoWHFms'
            }
          };
          
         let {data} = await axios.request(options);
         setMovies(data.results)
        //  console.log(data.results);
    }
    useEffect(()=>{
        getMovies(1)
    },[])

    return (<>
    <section className={`all ${styles.all} mb-28` }>
       <div className="container">
        <div className="w-full flex justify-center items-center">
            <form onSubmit={formik.handleSubmit} className="w-full md:w-1/2 ">
                <div className="w-full relative">
                <input type="text" name="name" placeholder="search movie" value={formik.values.name} onChange={formik.handleChange} 
                className="bg-black bg-opacity-50 rounded-xl w-full border  outline-none px-3 py-2 " />
                <button type="submit" className="bg-yellow-400 rounded-xl absolute right-0 bottom-0 h-full px-3 py-2 text-black ">Search</button>
                </div>
            </form>
        </div>
        {movies == null ? (<Loading/>) : (
              <div className="grid grid-cols-12 gap-8 mt-14">
              {movies.map((movie)=> <Link to={`/movies/${movie.id}`} key={movie.id}  className="movie cursor-pointer overflow-hidden col-span-12 sm:col-span-6 lg:col-span-3 ">
                       <div className="relative">
                       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-full object-cover" alt="" />
                       <div className="absolute  px-2 py-4 content w-full">
                           <h2 className="font-bold text-xl">${movie.title}</h2>
                           <p className="italic line-clamp-2 font-medium">${movie.overview}</p>
                       </div>
                       </div>
                       

                   </Link> )}
              </div>
        )}
        
        <div className="mt-8 flex justify-center items-center text-lg gap-4">
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(1)
            }}>1</span>
            <span className="cursor-pointer px-3 py-1 border rounded " onClick={()=>{
                getMovies(2)
            }}>2</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(3)
            }}>3</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(4)
            }}>4</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(5)
            }}>5</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(6)
            }}>6</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(7)
            }}>7</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(8)
            }}>8</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(9)
            }}>9</span>
            <span className="cursor-pointer px-3 py-1 border rounded" onClick={()=>{
                getMovies(10)
            }}>10</span>
        </div>

       </div>
    </section>
    </>)
}