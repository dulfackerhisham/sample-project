'use client'

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const {push} = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)

  };

  return (
   <div className="text-center mt-5">
    <div className="p-4">
      <h1>enter your name</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <input type="text"  className="text-black" value={inputVal}
      placeholder="type your name.." onChange={(e) => setInputVal(e.target.value)} />
      <button type="submit" >Predict Data</button>
    </form>
   </div>
  );
}
