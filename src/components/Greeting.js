import { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText ?
        <p>It's good to see you!</p>
        :
        <p>Check out this new text!</p>
      }
      <button onClick={() => setChangeText(true)}>
        Change text
      </button>
    </div>
  );
};

export default Greeting;
