import React, { useEffect, useState } from "react";
import SinglePackage from "./SinglePackage";

const Package = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://immense-sierra-48309.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  });
  return (
    <>
      <div className="container mx-auto px-14 py-10">
        <div className="text-center py-8">
          <p
            before="__"
            className="text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]"
          >
            Choose Your Package
          </p>
          <p className="text-4xl pt-1">Select Your Best Package </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          {packages
            .map((Package) => (
              <SinglePackage
                key={Package._id}
                package={Package}
              ></SinglePackage>
            ))
            .reverse().slice(0,4)}
        </div>
      </div>
    </>
  );
};

export default Package;
