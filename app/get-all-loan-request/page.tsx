"use client";

import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://okigwecreations.online/api/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "get_all_loan_request" }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Data:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return <div className="text-5xl text-blue-700">Component content here</div>;
};

export default MyComponent;
