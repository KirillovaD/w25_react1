
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Знания", "Знания к Требованиям"],
  ["HTML", 9],
  ["CSS", 8],
  ["JavaScript", 4],
  ["React", 0.1],
];

export const options = {
  title: "Я и фронтенд",
};

function App() {
  return (
    <div className="App">

      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />

    </div>
  );
}

export default App;
