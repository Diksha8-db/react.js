import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github,{githubInfoLoader} from './components/Github/Github'
import User from './components/User/User'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="user/:userid" element={<User />} />
    <Route 
    loader={githubInfoLoader}
    path="github" 
    element={<Github/>} 
    />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
