import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import GlobalStyle from "./styles/globalStyles";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/signup";
import SearchPage from "./pages/search/search";
import CategoryPage from "./pages/movies/category";
import NowPlayingPage from "./pages/movies/nowPlaying";
import PopularPage from "./pages/movies/popular";
import TopRatedPage from "./pages/movies/topRated";
import UpComingPage from "./pages/movies/upComing";
import MapsPage from "./pages/maps/maps";
import MovieDetail from "./pages/movies/movieDetail";
import NotFoundPage from "./pages/notFound/notFound";
import { LoadScript } from "@react-google-maps/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        errorElement: <NotFoundPage />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          {
            path: "auth",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "map",
        element: <MapsPage />,
      },
      {
        path: "movies",
        errorElement: <NotFoundPage />,
        children: [
          {
            index: true,
            element: <CategoryPage />,
          },
          {
            path: "now-playing",
            element: <NowPlayingPage />,
          },
          {
            path: "popular",
            element: <PopularPage />,
          },
          {
            path: "top-rated",
            element: <TopRatedPage />,
          },
          {
            path: "up-coming",
            element: <UpComingPage />,
          },
          {
            path: ":movieId",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_TOKEN} libraries={["places"]}>
        <RouterProvider router={router} />
      </LoadScript>
    </>
  );
}

export default App;
