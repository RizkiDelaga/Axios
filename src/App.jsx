import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Search from './pages/search';
import Detail from './pages/detail';
import DetailInformasi from './pages/detailInformasi';
import UpdateInformasi from './pages/updateInformasi';
import TambahInformasi from './pages/tambahInformasi';


function App() {
  // let keySearch = useParams();
  // let key = keySearch.param;
  // console.log(key)

  return (
      <BrowserRouter>
        <Routes>
          {/* ---------- ROUTE HOME ---------- */}
          <Route path="/" element={<Home />}>
            <Route index element={<Header />} />
            <Route path='asd' element={<Search />} />
          </Route>

          {/* ---------- ROUTE SEARCHING WITH PARAMETER ---------- */}
          <Route path="/search" element={<Search Link={Link} keySearch={useParams} />}/>
          <Route path="/search/:id" element={<Detail />}/>

          {/* ---------- ROUTE BLOG ---------- */}
          <Route path="blog" element={<Blog/>}/>
          {/* Route Blog/top-10 */}
          <Route path="/blog/top-10" element={<Header/>}/>
          <Route path="/blog/top-10/nomer_9" element={<Header/>}/>
          <Route path="/blog/top-10/nomer_10" element={<Header/>}/>
          <Route path="/blog/top-10/nomer_10/tutorial1" element={<Header/>}/>
          <Route path="/blog/top-10/nomer_10/tutorial2" element={<Header/>}/>
          {/* Route Blog/top-50 */}
          <Route path="/blog/top-50" element={<Header/>}/>
          <Route path="/blog/top-50/nomer_48" element={<Header/>}/>
          <Route path="/blog/top-50/nomer_49" element={<Header/>}/>
          <Route path="/blog/top-50/nomer_50" element={<Header/>}/>
          {/* Route Blog/top-100 */}
          <Route path="/blog/top-100" element={<Header/>}/>
          <Route path="/blog/top-100/nomer100" element={<Header/>}/>

          {/* ---------- ROUTE ABOUT ---------- */}
          <Route path="about" element={<About/>}/>

          {/* ---------- ROUTE CONTACT ---------- */}
          <Route path="contact" element={<Contact/>}/>

          {/* Route Belajar HTTP Request */}
          <Route path="detail-informasi" element={<DetailInformasi />}/>
          <Route path="update-informasi/:id/:nama/:email/:password" element={<UpdateInformasi />}/>
          <Route path="tambah-informasi" element={<TambahInformasi />}/>

          {/* ---------- ROUTE ERROR 404 ---------- */}
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
  );
}

function Error404() {
  return (
    <>
        <h1>Page 404</h1>
        <Link to="/"><p>Back to Home</p></Link>
    </>
  )
}

function Home() {
  return (
    <>
        <h1>Ini halaman Home</h1>
        <Link to="/blog"><p>Blog</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
    </>
  )
}

function Blog() {
  const navigate = useNavigate();

  return (
    <>
        <h1>Ini halaman Blog</h1>
        <Link to="/blog"><p>Blog</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
        <button className='btn btn-primary' onClick={() => navigate(`/`)} >Back to Home!</button>
    </>
  )
}

function About() {
  const navigate = useNavigate();

  return (
    <>
        <h1>Ini halaman About</h1>
        <Link to="/blog"><p>Blog</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
        <button className='btn btn-primary' onClick={() => navigate(`/`)} >Back to Home!</button>
    </>
  )
}

function Contact() {
  const navigate = useNavigate();

  return (
    <>
        <h1>Ini halaman Contact</h1>
        <Link to="/blog"><p>Blog</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
        <button className='btn btn-primary' onClick={() => navigate(`/`)} >Back to Home!</button>
    </>
  )
}

export default App;
