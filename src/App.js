
import './App.css';
import { ContextProvider } from './Context';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NestedRoutes from './components/NestedRoutes';
import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import User from './components/User';
import UserDetails from './UserDetails';
import { lazy } from 'react';
import { Suspense } from 'react';
import Profile from './components/Profile';
const LazyAbout = React.lazy(()=>
  import('./components/About'))
function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={
      <Suspense fallback='loading...'>
        <LazyAbout/>
        </Suspense>
      }/>
      <Route path="*" element={<NoMatch/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      
      <Route path="/nestedroutes" element={<NestedRoutes/>}>
        <Route index element={<FeaturedProducts/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="featuredproducts" element={<FeaturedProducts/>}/>
      </Route>



      
    </Routes>
    </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
