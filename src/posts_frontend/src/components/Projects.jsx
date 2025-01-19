import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { posts_backend } from 'declarations/posts_backend';
const Projects = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    posts_backend.get_all_projects().then((result) => {
      console.log(result, "projects");
      setData(result);
    });
  }, []);
  console.log("data", data);
  const router=useNavigate()
  return (
    <div className="project">
      {data.length == 0 ? (
        <div className="no">
          <h1>No projects available </h1>
        </div>
      ) : (
        <>
          <div className="projos">
            {data.map((val, index) => (
              <div className="ma" key={index}>
                <div className="na">
                  <img src="../../public/h.jpg" alt="" />
                </div>
                    <h1 className="">{val.name}</h1>
                <div className="bt">
                  <div className="bt2">
                    <p className="">{val.techused}</p>
                  </div>
                  <div className="bt3">
                    <button className="button" onClick={()=>router("/details")}>View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
