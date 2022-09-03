import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [result, setResult] = useState(false);

  async function getImage() {
    try {
      setImage(null);
      const data = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      ).then((res) => res.json());
      setImage(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLeft() {
    setLeft([...left, image]);
    getImage();
  }

  function handleRight() {
    setRight([...right, image]);
    getImage();
  }

  function handleResult() {
    setResult(!result);
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="App">
      <img src={image} alt="a random pic" />
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      <button onClick={handleResult}>Result</button>
    </div>
  );
}
