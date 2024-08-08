'use client'

import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
  };

  return (
   <div>
    <div>
      <h1>enter your name</h1>
    </div>
    <form action="">
      <input type="text" placeholder="type your name.." onChange={(e) => setInputVal(e.target.value)} />
      <button type="submit" >Predic Data</button>
    </form>
   </div>
  );
}
