import React, { useState, useEffect } from 'react';


function Message({ size }) {
  useEffect(() => {
    const {sizeClass, setSizeClass} = useState('');

    console.log('Message', size);

    let sizeName = '';
    switch (size) {
      case 's':
        sizeName = 'small'
        break;
      case 'm':
        sizeName = 'medium'
        break;
      case 'l':
        sizeName = 'large'
        break;
      case 'xl':
        sizeName = 'xlarge'
        break;
    }
    // console.log(sizeName);
    setSizeClass(sizeName);
  }, [size]);
  
  const [message, setMessage] = useState('');

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;