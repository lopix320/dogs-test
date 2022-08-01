import React from 'react';

const PhotoGet = () => {
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/photo/26197')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setImg(json.photo.src);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Enviar</button>
      {img && <img src={img}></img>}
    </form>
  );
};

export default PhotoGet;
