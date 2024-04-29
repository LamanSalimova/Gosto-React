import Details from "../components/home/details/Details";
import Home from "../components/pages/Home";

export const ROUTES = [
  { path: "/", element: Home },
  { path: "/cart/:id", element: Details },
  // { path: "/blog", element: Home },
  // { path: "/about", element: Home },
  // { path: "/shop", element: Home },
  // { path: "/contact", element: Home },
];
