import React from "react";
// import "./load";

const Home = () => {
  // const $ = window.$;
  // const [img, setimg] = useState("im1.jpg");
  // useEffect(() => {
  //   setInterval(() => {
  //     setimg("im2.jpg");
  //   }, 3000);
  // }, [img]);
  return (
    <>
      <div className="home">
        <div className="home-title" style={{ textAlign: "left", width: "70%" }}>
          <h1>Welcome to Genenest</h1>
        </div>
        <div className="para" style={{ width: "70%", textAlign: "left" }}>
          <p style={{ fontSize: "1.3rem", color: "black" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit recusandae blanditiis aspernatur sit impedit ipsam
            praesentium
          </p>
        </div>
      </div>
      <div className="h-about">
        <h1>About Us</h1>
        <div className="para" style={{ width: "70%", textAlign: "left" }}>
          <p style={{ fontSize: "1.3rem" }}>
            We are a young company with a group of ardent professionals working
            passionately to provide quality healthcare to people by way of its
            futuristic and innovative products and services. We at, BioDx, aim
            to bring a successful combination of high quality healthcare
            products that prove instrumental in Infection Control, In-Vitro
            Diagnostics (IVD), Medical & Clinical Diagnostics and Rapid ICT
            Diagnostics. BioDx is currently having a sales force of 15 people
            including experienced molecular biologists and 150 direct and
            indirect channel partners. In our current product portfolio, we have
            products for Molecular Diagnostics, POCT, Clinical Diagnostics &
            Hospital Infection Control. We are expanding our portfolio in same
            line and our main motto is to give real time diagnosis for all
            critical care processes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
