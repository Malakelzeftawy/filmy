import { useContext, useEffect, useState } from "react"
import { WatchlistContext } from "../../Context/WatchlistContext/WatchlistContext"
import Loading from "../../components/Loading/Loading";
import styles from "./Watchlist.module.css";
import toast from "react-hot-toast";


export default function Watchlist(){
    const [watchlist , setWatchlist] = useState(null);
    let {getWatchlist , removeFromWatchList} = useContext(WatchlistContext);
    async function getMoviesWatchList (){
        let res = await getWatchlist();
        setWatchlist(res.results);
    }

    async function remove(movieID){
        let res = await removeFromWatchList(movieID);
        let fiterWatchlist = [...watchlist];
        fiterWatchlist = fiterWatchlist.filter((movie)=>movie.id !== movieID);
        setWatchlist(fiterWatchlist);
        if(res.success == true){
            toast.success("Movie is deleted successfully" , {
                position : "bottom-right",
                duration : 1500,
            })
        }
    }

    useEffect(()=>{
        getMoviesWatchList()
    },[])
    return(<>
    <section className={`watchlist ${styles.watchlist} mb-24 `}>
        <div className="container">
            {watchlist == null ? (
                <Loading/>
            ) : (
                <div className="grid grid-cols-12 gap-8">
                    {watchlist.map((movie) => <div key={movie.id}  className="movie cursor-pointer overflow-hidden col-span-12 sm:col-span-6 lg:col-span-3">
                       <div className="relative">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-full object-cover" alt="" />
                        <div className="absolute  px-2 py-4 content w-full">
                     <h2 className="font-bold text-xl">{movie.title}</h2>
                     <p className="italic line-clamp-2 font-medium">{movie.overview}</p>
                 </div>
                       </div>
                       <button className="bg-yellow-400 text-black w-full py-1 mt-3 rounded-xl" onClick={()=>{
                        remove(movie.id)
                       }}> Remove </button>

                    </div>)}
                </div>
            )}
        </div>
    </section>
    </>)
}