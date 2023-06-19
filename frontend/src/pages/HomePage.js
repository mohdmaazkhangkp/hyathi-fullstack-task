import React, { useContext } from 'react'
import { Context } from '..';

const HomePage = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return (
    <div>
      {!isAuthenticated ? (
        <div> please login</div>
      ) : (
        <div>welcome</div>
      )}
    </div>
  );
};


export default HomePage