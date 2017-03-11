import React from 'react';



export default (props) => {
  const styles = {
    container: { paddingTop: '50px'},
    img: {maxHeight: '400px', maxWidth: '400px'}
  }

  return (
    <div style={styles.container} >
      <h1>Home</h1>
      <img
        alt="mytko"
        style={styles.img}
        src="https://s-media-cache-ak0.pinimg.com/736x/5e/4f/d1/5e4fd16a971093d0329dd3181ed9edc7.jpg"
        className="z-depth-2 hoverable"
      />
    </div>

  );
}



