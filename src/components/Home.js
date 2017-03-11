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
        alt="sky"
        style={styles.img}
        src="http://i.imgur.com/WSYYkeO.jpg"
      />
    </div>

  );
}



