import { useEffect, useState } from "react";
import "./Joker.css";
import clownImg from "./assets/Joker.jpg"; // adjust path accordingly

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const getJoke = async () => {
    let res = await fetch(URL);
    let jsonRes = await res.json();
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let res = await fetch(URL);
      let jsonRes = await res.json();
      setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }
    getFirstJoke();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    
    <div className="joke-container">
        <h1 className="heading">Make me Laugh</h1>
      <div className="joke-emoji">😂🎭</div>
      <h3> Hi, I am your Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>New Joke 🤡</button>
      <br />
      <button onClick={() => setDarkMode((prev) => !prev)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode 🌗
      </button>
    </div>
  );
}
