import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Details from "./Pages/Details/Details"
import AllMovies from "./Pages/AllMovies/AllMovies"
import Watchlist from "./Pages/Watchlist/Watchlist"
import WatchlistProvider from "./Context/WatchlistContext/WatchlistContext"
import { Toaster } from "react-hot-toast";

function App() {

  const routes = createBrowserRouter([
    {path : "/" , element:<Layout/> , children:[
      {index : true , element : <Home/>},
      {path : "/movies/:id" , element : <Details/>},
      {path : "/allmovies" , element : <AllMovies/>},
      {path : "/watchlist" , element : <Watchlist/>},
    ]} , 

    
  ])
  return (
    <>
    <WatchlistProvider>
    <RouterProvider router={routes}>

</RouterProvider>
<Toaster></Toaster>
    </WatchlistProvider>
    </>
  )
}

export default App
