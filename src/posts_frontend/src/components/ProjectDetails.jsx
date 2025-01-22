import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { posts_backend } from "declarations/posts_backend";
const ProjectDetails = () => {
  const [data, setData] = useState(null);
  const { projectid } = useParams();

  posts_backend.get_project(projectid).then((result) => {
    setData(result.ok);
    console.log(result);
  });
  if (!data) {
    return <div className="no">no data available</div>;
  }
  return (
    <div>
      {data ? (
        <div>
          {data.map((val, index) => (
            <div className="about" key={index}>
              <div className="di1">
                <img src={val.coverimage} alt="user" className="img" />
                <div className="des">
                  <h1 className="">
                    name of the project <span>{val.nameofproject}</span>
                  </h1>
                  <p className="">{val.description}</p>
                </div>
                 <div className="more">
                  <h2>{val.techused}</h2>
                </div>
                 <div className="more2">
                  <Link to={`${val.githublink}`}>Github Page</Link>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div></div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
