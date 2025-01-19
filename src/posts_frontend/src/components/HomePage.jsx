import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const router=useNavigate();
  return (
    <div className="home">
      <h1 className="">welcome to the biggest collection of web 3 projects</h1>

      <p className="">Navigate between the pages to see collection</p>
     
    
      <button onClick={()=>router("/projects")}>Explore</button>
    </div>
  );
};

export default HomePage;
