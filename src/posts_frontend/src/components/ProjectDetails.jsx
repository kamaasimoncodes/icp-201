import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const [data, setData] = useState(null);
  // if (!data) {
  //   return <div className="no">no data available</div>;
  // }
  return (
    <div className="about">
      <div className="di1">
        <img src="../../public/h.jpg" alt="user" className="img" />
        <div className="des">
          <h1 className="">
            name of the project <span>hack the box</span>
          </h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ea
            corrupti ipsum distinctio. Eos aliquid nemo quam, eveniet hic a rem
            labore ducimus adipisci cum suscipit dolore deserunt, asperiores
            tenetur.
          </p>
        </div>
        <div className="more">

        <h2>bext js react motoko</h2>
        </div>
        <Link to="">Github Page</Link>
        <a href={`mailto:`} className="a">Contact owner</a>
      </div>
    </div>
  );
};

export default ProjectDetails;
