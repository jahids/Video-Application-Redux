import Home from "./pages/Home";
import { Route, RouterProvider } from "react-router-dom";
import Video from "./pages/Video";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Video />} />
    </Route>
))

function App() {
    return <RouterProvider router={router} />
}

export default App;
