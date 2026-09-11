import { useEffect, useState } from "react";

function Profile() {
  const [count, setCount] = useState(0);

  const user = {
    name: "NamNam",
  };

  useEffect(() => {
    console.log("Effect executed");
  }, [user]);

  return (
    <button onClick={() => setCount((count) => count + 1)}>{count}</button>
  );
}

export default Profile;
