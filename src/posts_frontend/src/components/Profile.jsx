import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [auth, setAuth] = useState(true);
  const data = [
    {
      name: "text-white clone",
      techused: "next js react motoko",
      chain: "icp",
    },
    {
      name: "text-white clone",
      techused: "next js react motoko",
      chain: "icp",
    },
  ];
  const router = useNavigate();
  return (
    <>
      {auth ? (
        <>

        <div className="">
            <a href="/createprofile" className="k">create or update profiile</a>
          <div className="project">
            {data.length == 0 ? (
              <div className="no">
                <h1>No you dont any project vailable </h1>
              </div>
            ) : (
              <>
                <div className="projos gu">
                  {data.map((val, index) => (
                    <div className="m" key={index}>
                      <div className="na">
                        <img src="../../public/h.jpg" alt="" />
                      </div>
                      <h1 className="h1">{val.name}</h1>
                     <button className="button">View</button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          </div>
        </>
      ) : (
        <>
          <div className="no">
            <h1 className="">not logged in</h1>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
