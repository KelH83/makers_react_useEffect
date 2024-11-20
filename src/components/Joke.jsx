import { useState, useEffect } from "react";

const Joke = () => {
    const [joke, setJoke] = useState({});

useEffect(() => {
const URL = "https://official-joke-api.appspot.com/random_joke";
fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        setJoke(data);
        console.log(data);
    });
}, []);

return (
<>
    <h2>{joke.setup}</h2>
    <p>{joke.punchline}</p>
</>
);
};

export default Joke;