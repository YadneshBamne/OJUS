import React from 'react';
import './Department.css';
const LogoFlexbox = () => {
  return (
    <div className="department" style={{ 
     display: 'flex', 
      justifyContent: 'space-around',
      width:"100%",
      height:"300px",
      flexWrap:"wrap",
      alignItems: 'center', 
      borderRadius:"45px",
      margin:"auto",
    }}>
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741936411/dept%20logos/u39gybazwotg8pxk5zjy.png" alt="Logo 1" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741936410/dept%20logos/xfej8mvy2kjxkzifwjke.png" alt="Logo 2" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741936410/dept%20logos/m4vt5v2rfoplzltvvvmm.png" alt="Logo 3" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741936410/dept%20logos/cxoxf4o7mubon7ugba9c.png" alt="Logo 4" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741936409/dept%20logos/z03nw1nfaxpiezgqib8u.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741936563/dept%20logos/aujzl4mma8oqj9v00qfw.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
      <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741945765/dept%20logos/aaml9awricfj757bi1c0.png" alt="Logo 5" style={{ width: '130px', height: 'auto' }} />
    </div>
  );
};

export default LogoFlexbox;
