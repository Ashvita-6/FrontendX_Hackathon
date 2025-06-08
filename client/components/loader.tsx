import React from "react";
import "./loader.scss";

const Loader: React.FC = () => (
  <div className="container">
    {/** Row 1 */}
    <div className="h1Container">
      {[1,2,3].map((w) =>
        [1,2,3].map((l) => (
          <div key={`h1w${w}l${l}`} className={`cube h1 w${w} l${l}`}>
            <div className="face top" />
            <div className="face left" />
            <div className="face right" />
          </div>
        ))
      )}
    </div>

    {/** Row 2 */}
    <div className="h2Container">
      {[1,2,3].map((w) =>
        [1,2,3].map((l) => (
          <div key={`h2w${w}l${l}`} className={`cube h2 w${w} l${l}`}>
            <div className="face top" />
            <div className="face left" />
            <div className="face right" />
          </div>
        ))
      )}
    </div>

    {/** Row 3 */}
    <div className="h3Container">
      {[1,2,3].map((w) =>
        [1,2,3].map((l) => (
          <div key={`h3w${w}l${l}`} className={`cube h3 w${w} l${l}`}>
            <div className="face top" />
            <div className="face left" />
            <div className="face right" />
          </div>
        ))
      )}
    </div>
  </div>
);

export default Loader;
