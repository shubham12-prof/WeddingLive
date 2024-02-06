import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Common/Wrapper";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Haldi from "./Components/Haldi/Haldi";
import PreWedding from "./Components/Pre_Wedding/PreWedding";
import WeddingPage from "./Components/Wedding/WeddingPage";

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <div>Error 404, Page not found</div>,
    children: [
      {
        path: "/WeddingLive/",
        element: <Home />,
      },
      {
        path: "/WeddingLive/wedding",
        element: <WeddingPage />,
      },
      {
        path: "/WeddingLive/pre_wedding",
        element: <PreWedding />,
      },
      {
        path: "/WeddingLive/about_us",
        element: <About />,
      },
      {
        path: "/WeddingLive/contact",
        element: <Contact />,
      },
      {
        path: "/WeddingLive/haldi",
        element: <Haldi />,
      },
    ],
  },
]);