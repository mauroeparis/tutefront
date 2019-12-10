import React from "react";

import HomeBooks from './homeBooks';
import About from './about';

function Home() {
  return (
    <div className="flex flex-col">
      <HomeBooks />
      <About />
    </div>
  );
}

export default Home;
