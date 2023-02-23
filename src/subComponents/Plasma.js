import "./Plasma.css";




export const Plasma = (props) => {
  return (
    <div {...props} >
      <svg width={30} height={30} >
        <filter id="gooey-plasma">
          <feGaussianBlur in="SourceGraphic" stdDeviation={20} result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
            result="goo"
          />
        </filter>
      </svg>
      <div className="plasma">
        <div className="gooey-container">
          <span className="bubble" />
          <span className="bubble" />
          <span className="bubble" />
          <span className="bubble" />
          <span className="bubble" />
          <span className="bubble" />
        </div>
      </div>
    </div>
  );
};
