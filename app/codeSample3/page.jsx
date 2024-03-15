"use client";

import React, { useState } from "react";

const CodeSample3 = () => {
  const [secretCode, setSecretCode] = useState(null);
  const [error, setError] = useState(null);

  const myList = ["Cat", "Dog", "Chicken", "Cow"];

  async function fetchSecretCode() {
    const passcode = "ehen2rfow";
    const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching secret code:", error);
      setError("Failed to fetch secret code");
    }
  }

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create a function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode as part of the URL for it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a JSON with a single field called
          "secretCode". This is the answer to your question.
        </p>
      </div>

      <div className="p-4">
        <button onClick={fetchSecretCode}>Get Secret Code</button>
        {secretCode && <p>Secret Code: {secretCode}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default CodeSample3;
