import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const userName = prompt("Ismingizni kiriting:");
    setName(userName);

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB"); // 12.12.2024 format
    setDate(formattedDate);

    const hour = today.getHours();
    setIsDarkMode(hour >= 18 || hour < 6);

    const random = Math.floor(Math.random() * 101);
    setRandomNumber(random);
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`p-10 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-700" : "bg-white"
        }`}
      >
        <p>
          Hello my name is: <span className="text-yellow-400">{name}</span>
        </p>
        <p>
          This is the day:{" "}
          <span className="text-yellow-500 font-medium">{date}</span>
        </p>
        <p>A random number from 0 to 100:</p>
        <h1 className="text-5xl font-bold text-center mt-4">{randomNumber}</h1>
      </div>
    </div>
  );
};

export default App;
