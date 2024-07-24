import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import styles from "./Details.module.css"
import { WatchlistContext } from "../../Context/WatchlistContext/WatchlistContext";
import toast from "react-hot-toast";





export default function Details(){
    const [details , setDetails] = useState(null);
    const [recommendations , setRecommendations] = useState(null);
    const [video , setVideo] = useState(null);
    const {addToWatchList} = useContext(WatchlistContext);

    let {id} = useParams();


    async function addMovie(movieID){
      let res = await addToWatchList(movieID);
      if(res.success == true){
        toast.success("Movie is added to watchlist" , {
          position : "bottom-right",
          duration : 1500,
        })
      }
    }

    async function getDetails(){
        const options = {
            method: 'GET',
            url : `https://api.themoviedb.org/3/movie/${id}` ,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcxOTk1NjU0My44NTM4NDQsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZbhKiCcUpGpw9G4lf-2p33JgOY_npuJPQzTjAffhJA'
            }
          };
          
          let {data} = await axios.request(options);
          setDetails(data);
          }

          useEffect(()=>{
            getDetails()
          },[])

          async function getVideo(){
            const options = {
                method: 'GET',
                url : `https://api.themoviedb.org/3/movie/${id}/videos`,
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcxOTk1NjU0My44NTM4NDQsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZbhKiCcUpGpw9G4lf-2p33JgOY_npuJPQzTjAffhJA'
                }
              };
              let {data} = await axios.request(options);
              setVideo(data.results);
             
          }
          useEffect(()=>{
            getVideo()
          },[])


          async function getRecommendations(){
            const options = {
                method: 'GET',
                url : `https://api.themoviedb.org/3/movie/${id}/recommendations`,
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcxOTk1NjU0My44NTM4NDQsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ZbhKiCcUpGpw9G4lf-2p33JgOY_npuJPQzTjAffhJA'
                }
              };
              let {data} = await axios.request(options);
              setRecommendations(data.results);
          }
          
          useEffect(()=>{
            getRecommendations()
          },[])

    return(<>
    <section className={`details ${styles.details} mb-14 `}>
        <div className="container">
            {details == null ? (
                <Loading/>
            ) : (
                                <div className="relative h-[680px] cursor-pointer">
                            <div className="">
                            <img src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} className="w-full h-96 object-cover" alt="" />
                            </div>
                            <div className="absolute bottom-32 left-10 border-4" >
                                <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className="w-48 h-50 object-cover" alt="" />
                                <span className="absolute left-16 mt-2 "><span className="font-semibold text-2xl">{details.vote_average}</span>/10</span>
                            </div>
                            <div className="left-64 absolute mt-3">
                                <div>
                                    <span className="font-bold text-4xl">{details.title  }</span>
                                    <span className="font-medium text-lg">   ({ details.release_date.slice(0,4)})</span>
                                </div>
                                <p className="font-meduim text-lg mt-1 line-clamp-3">{details.overview}</p>
                                <p className="font-medium text-lg mt-1">({details.genres[0].name} , {details.genres[1].name})</p>
                                <button className="bg-yellow-400 text-black py-1 mt-3 px-9 rounded-xl" onClick={()=>{
                                  addMovie(details.id)
                                }}>Add To Watchlist</button>
                            </div>
                        </div>
            )} 


            {video == null ? (<Loading/>) : (
                <div className="grid grid-cols-12 gap-8">
                    {video.slice(0,2).map((video)=> <div key={video.id} className="col-span-12 md:col-span-6">
                    <iframe className="w-full" width="" height="315" src={`https://www.youtube.com/embed/${video.key}?si=xdwDlV5eeF149iVt`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>)}
                </div>                
            )}

            
            {recommendations == null ? (
                <Loading/>
            ) : (
                <div>
                  {recommendations.length == 0 ? ("") : (<h2 className="font-bold text-2xl mb-16 mt-12 col-span-12">Recommendations Movies</h2>
)}
                    <div className="grid grid-cols-12 gap-8">
                   {recommendations.map((recommendation)=>  <Link to={`/movies/${recommendation.id}`} key={recommendation.id}  className="movie cursor-pointer overflow-hidden col-span-12 sm:col-span-6 lg:col-span-3 ">
                 <div className="relative">
                 <img src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`} className="w-full object-cover" alt="" />
                 <div className="absolute  px-2 py-4 content w-full">
                     <h2 className="font-bold text-xl">{recommendation.title}</h2>
                     <p className="italic line-clamp-2 font-medium">{recommendation.overview}</p>
                 </div>
                 </div>
             </Link>)}
                    </div>
                </div>
            )
        }
            
        </div>
    </section>
    </>)
}