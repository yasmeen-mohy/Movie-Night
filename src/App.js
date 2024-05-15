import React, { lazy, Suspense } from 'react';
import { BrowserRouter, createBrowserRouter,Router,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import axios from 'axios';
import UserContext from './Context/UserContext';
import './App.css';
import SimpleBackdrop from "./Components/Spinner";
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import("./Pages/About"));
const MovieDetails = lazy(() => import("./Pages/MovieDetails"));
const Profile = lazy(() => import("./Pages/profile"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const Register = lazy(() => import("./Pages/Register"));
const AddMovie = lazy(() => import("./Pages/AddMovie"));
const EditMovie=lazy(()=>import("./Pages/EditMovie"));
const AppModule=lazy(()=>import("./Pages/AppModule"));
const Favourits=lazy(()=>import("./Pages/Favourits"))
function App() {
  const loadData = async () => {
    const res = await axios.get("http://localhost:8000/movie");
    return res.data;
  };

  const route = createBrowserRouter([
    { path: "/", element: <AppModule />,children:[
      {index:true,element:<SignIn ></SignIn>},
      { path: "/home", element: <Home ></Home>,loader:loadData},
      { path: "/about", element: <About /> },
      { path: "/profile", element: <Profile /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/details/:id", element: <MovieDetails /> },
      { path: "/register", element: <Register /> },
      { path: "/add", element: <AddMovie /> },
      {path:"/edit/:id", element:<EditMovie />},
      {path:"/favourits",element:<Favourits></Favourits>}
    
    ] },      ]);

  return (  
    <UserContext>
        <div className="App">
          <Suspense fallback={<SimpleBackdrop />}>
           
              <div ><RouterProvider router={route} /></div>
           
          </Suspense>
        </div>
    </UserContext>
  );
}

export default App;
