import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Profile from "./components/Profile";
import { AuthProvider } from "./auth/authetication";
import AddProject from "./components/addproject";
import CreateProfile from "./components/createprofile";
//import { posts_backend } from 'declarations/posts_backend';

function App() {
  const [greeting, setGreeting] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   posts_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <BrowserRouter>
     <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/details" element={<ProjectDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/addproject" element={<AddProject/>}/>
        <Route path="/createprofile" element={<CreateProfile/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
