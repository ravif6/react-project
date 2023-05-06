
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contact';
import {  Students } from './Components/Students';
import { Studentsubmit } from './Components/Studentsubmit';
import { NoMatch } from './Components/NoMatch';
import { NewStudents } from './Components/NewStudents';
import { ExistingStudents } from './Components/ExistingStudents';
import { Tutor } from './Components/Tutor';
import { TutorDetails } from './Components/TutorDetails';
import { Admin } from './Components/Admin';
function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes className = 'body'>
    <Route path = '/' element = {<Home/>}></Route>
    <Route path ='/about' element = {<About/>}></Route>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/students' element = {<Students/>}>
      <Route index element= {<NewStudents/>}/>
      <Route path = 'new_students'element = {<NewStudents/>}/>
      <Route path = 'old_students'element = {<ExistingStudents/>}/>
    </Route>
    <Route path = 'tutor' element= {<Tutor/>}>
      <Route path = ':tutorId' element = {<TutorDetails/>}/>
      <Route path = 'admin' element = {<Admin/>}/>
    </Route>  
     <Route path = '/confirmed' element = {<Studentsubmit/>}/>
    <Route path = '*' element = {<NoMatch/>}></Route>
    </Routes>
   <Footer/>
   </>

  );
}

export default App;
