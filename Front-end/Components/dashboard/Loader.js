"use client";

import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#193549");

  return (
    <div className="ml-[35vw] mt-[10vh]">
      
     

      <ClipLoader
        color={color}
        loading={loading}
        css={override}  // Correct prop name
        size={150}
        aria-label="Loading Spinner"
        data-testid="GridLoader"
      />
    </div>
  );
}

export default App;
