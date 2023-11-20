import { useState } from "react";
import "./App.css";
import Slider from "./component/slider/slider";

type RangeType = {
  min: number | undefined;
  max: number | undefined;
};

function App() {
  const [range, setRange] = useState<RangeType>({
    min: undefined,
    max: undefined,
  });

  return (
    <>
      <Slider
        max={100}
        min={0}
        onChange={(value) =>
          setRange({
            min: value.min,
            max: value.max,
          })
        }
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <span>Min value is {range.min} </span>
        <span>Max value is {range.max} </span>
      </div>
    </>
  );
}

export default App;
