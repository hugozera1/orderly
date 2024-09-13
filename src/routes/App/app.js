import React, {useState, useEffect} from "react";
import './app.css'
import MainHeader from "../../Components/mainHeader/mainHeader.js";
import NewPosts from "../../Components/newPosts/newPosts.js";

function App() {

  return (
    <div>
      <MainHeader />

      <main>
          <NewPosts/>
      </main>
    </div>
  );
}

export default App;
