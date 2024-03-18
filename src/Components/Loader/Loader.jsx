import { DNA } from "react-loader-spinner";
import "./Loader.css";

function Loader({ value }) {
  console.log(value, "height value ");
  return (
    <div className="loader-container" style={{ height: `${value}vh` }}>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

export default Loader;
