import { useEffect, useState } from 'react';

const Main = () => {
  const [meme, setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
  });

  const [memes, setMemes] = useState([]);
  const url = 'https://api.imgflip.com/get_memes';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    const location = event.target.name;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [location]: value,
    }));
  }

  function getRandom() {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const image = memes[randomNumber];
    setMeme((preMeme) => ({
      ...preMeme,
      imageUrl: image.url,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getRandom}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
