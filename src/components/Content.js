import image from "../assets/images/d878924acfab4239b1ad4196968eea6a.jpeg";

const Content = () => {
  return (
    <>
      <div className="content">
        <div className="home-page">
          <div className="left-item">
            <span className="intro">Hi, I'm Keshav Bhandari</span>
            <span className="department">Web Developer</span>
            <span className="intro-content">
              I love Web Development, turning ideas into fully functional and
              visually captivating digital experiences. Explore my work, and
              let’s create something amazing together!
            </span>
          </div>
          <div className="right-item">
            <img src={image} style={{ height: "300px", width: "300px" }}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
