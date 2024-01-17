import React, { useEffect, useState } from "react";

const Practice = () => {
  const [user, setUser] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    fetch("https://hospital-server-tau.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };

  useEffect(() => {
    fetch("https://hospital-server-tau.vercel.app/alluser")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div>
      <div className="h-[100%] text-5xl text-center mt-7 ">
        this is for practice
      </div>
      <div className="h-[500px]">
        {user.map((person) => (
          <p>{person.name}</p>
        ))}
      </div>
      <form
        className="flex justify-center flex-col mt-9 w-[30%] mx-auto mb-7"
        onSubmit={handleSubmit}
      >
        <input
          type="name"
          name="name"
          className="border-2 border-black
        "
          id=""
        />{" "}
        <br />
        <input
          type="email"
          className="border-2 border-black
        "
          name="email"
          id=""
        />{" "}
        <br />
        <input
          className=" border-black
        "
          type="submit"
        />
      </form>
    </div>
  );
};

export default Practice;
