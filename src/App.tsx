import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Effect from './components/Effect'
import './App.css'
import { Suspense, lazy } from 'react';
import Navigate from './components/navigate';
import MyForm from './components/UncontrolledComponent';
import Landing from './components/context';
import Cart from './components/cart';
import Memo from './components/Memo';
import Callback from './components/Callback';
import OTP from './components/OTP';
import SearchBar from './components/Searchbar';
import ScrollRender from './components/scrollRender';

const Reducer=lazy(()=>import("./components/Reducer"))
//Lazy Loading:-
//Lazy loading is a technique used to defer the loading of components until they are needed. This can help reduce the 
//initial bundle size of your application and improve the overall performance by loading components only when they are required.

//Suspense:-
//Suspense is a React component that allows you to declaratively wait for some asynchronous operation to complete before rendering 
//its children. This asynchronous operation could be fetching data from an API, loading a lazy-loaded component using React.lazy(), 
//or any other asynchronous task

//If you use React.lazy() without Suspense, React will not be able to handle the loading state of the lazy-loaded 
//component automatically. Instead, it will result in a runtime error.

//When you use React.lazy(), you must also use Suspense to wrap the component being lazily loaded. This is because 
//Suspense is responsible for handling the loading state and providing a fallback UI while the lazy-loaded component is being loaded.

function App() {

  return (
    <>
       <Router>    
      <Routes>
       <Route  path="/" element={<Effect />} />
       <Route  path="/items" element={<Landing />} />
       <Route  path="/cart" element={<Cart />} />
       <Route  path="/reducer" element={<Suspense fallback={<div>Loading...</div>}><Reducer /></Suspense>}/>
       <Route  path="/navigate" element={<Navigate />}/>
       <Route  path="/un" element={<MyForm />}/>
       <Route  path="/memo" element={<Memo />} />
       <Route  path="/callback" element={<Callback />} />
       <Route  path="/otp" element={<OTP />} />
       <Route  path="/search" element={<SearchBar />} />
       <Route  path="/scroll" element={<ScrollRender />} />
       </Routes>
       
       </Router>
    </>
  )
}

export default App
