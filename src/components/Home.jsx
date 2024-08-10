export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">
        <p className="line line1">Hi!</p>
        <p className="line line2">
          I'm Adir<span>,</span>
        </p>
        <p className="line line3">
          <span>F</span>ull <span>S</span>tack <span>D</span>eveloper
          <span>.</span>
        </p>
      </div>
      <button
        className="animation-btn connect-btn"
        onClick={() => console.log("connect")}
      >
        Let's Connect!
      </button>
    </div>
  );
};
