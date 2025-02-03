import "./leftStyle.scss";
import IMAGE from "next/image";
const leftnav = () => {
  return (
    <div className="main_nav">
      <div className="heading">
        <p>Private</p>
      </div>
      <div className="nav_left">
        {/* first nav */}
        <div className="content">
          <div className="home_logo">
            <p className="logo">🏠</p>
            <p>Home</p>
          </div>
          <div className="num_box">
            <p>8</p>
          </div>
        </div>
        {/* 2nd box */}
        <div className="content">
          <div className="about_logo">
            <p className="checkbox"></p>
            <p>Completed</p>
          </div>
          <div className="num_box">
            <p>16</p>
          </div>
        </div>
        {/* third */}
        <div className="content">
          <div className="about_logo">
            <p className="checkbox check1"></p>
            <p>Personal</p>
          </div>
          <div className="num_box">
            <p>4</p>
          </div>
        </div>
        {/* 4th */}
        <div className="content">
          <div className="about_logo">
            <p className="checkbox check2"></p>
            <p>work</p>
          </div>
          <div className="num_box">
            <p>6</p>
          </div>
        </div>
        {/* 5th */}
        <div className="content">
          <div className="about_logo">
            <p>💪</p>
            <p>Diet</p>
          </div>
          <div className="num_box">
            <p>3</p>
          </div>
        </div>
        {/* 6th */}
        <div className="content">
          <div className="about_logo">
            <p>📚</p>
            <p>List of Book</p>
          </div>
          <div className="num_box">
            <p>8</p>
          </div>
        </div>
        {/* 7th */}
        <div className="content">
          <div className="about_logo">
            <p>🚗</p>
            <p>Road trip list</p>
          </div>
          <div className="num_box">
            <p>6</p>
          </div>
        </div>
      </div>
      <div className="create_btn">
        <div className="create_para">
          <p>➕</p>
          <p>create new list</p>
        </div>
        <div className="create_logo">
          <p className="logo1">
            <IMAGE src="/command.png" alt="" height={16} width={16} />
          </p>
          <p className="logo1">
            <IMAGE src="/letter-l.png" alt="" height={16} width={16} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default leftnav;
