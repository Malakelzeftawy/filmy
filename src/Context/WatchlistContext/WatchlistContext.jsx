import {  createContext } from "react";



export const WatchlistContext = createContext("");

export default function WatchlistProvider({ children }){

     function addToWatchList(movieID){
        const options = {
            method: 'POST',
            body : JSON.stringify({
                media_type : "movie",
                media_id : movieID,
                watchlist : true,
            }) ,
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcyMDQzNTEwMC42OTQyMjMsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jzde9mwAsYD5SJ90riP2-CoF1dLF219eoNgfInq9ULA'
            }
          };
          
       return   fetch('https://api.themoviedb.org/3/account/21359878/watchlist', options)
  .then(response => response.json())
  .then(response => response)
  .catch(err => err);
            
    }


    function getWatchlist(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcyMDQzNTEwMC42OTQyMjMsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jzde9mwAsYD5SJ90riP2-CoF1dLF219eoNgfInq9ULA'
            }
          };
          
         return fetch('https://api.themoviedb.org/3/account/21359878/watchlist/movies', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => err);
    }

    function removeFromWatchList(movieID){
      const options = {
          method: 'POST',
          body : JSON.stringify({
              media_type : "movie",
              media_id : movieID,
              watchlist : false,
          }) ,
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmUzZjZkYTY4NWI2YTlhODIxNDc0ZTg4M2ExZGUzOCIsIm5iZiI6MTcyMDQzNTEwMC42OTQyMjMsInN1YiI6IjY2ODJmMzNmMzA5OTA2ZGI0MDFlNTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jzde9mwAsYD5SJ90riP2-CoF1dLF219eoNgfInq9ULA'
          }
        };
        
     return   fetch('https://api.themoviedb.org/3/account/21359878/watchlist', options)
.then(response => response.json())
.then(response => response)
.catch(err => err);
          
  }

    return(

        <WatchlistContext.Provider 
        value={{ addToWatchList , getWatchlist , removeFromWatchList}}
        >
            {children}
        </WatchlistContext.Provider>
    )
}