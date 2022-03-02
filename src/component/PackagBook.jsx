import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PackageBook = () => {
  const [packages, setPackages] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  // --------------------
  const statusRef = useRef();
  const packageNameRef = useRef();
  const countryNameRef = useRef();
  const priceRef = useRef();
  const packageDaysRef = useRef();
  const tourStartRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const cofirmDateRef = useRef();

  const handlerBookedPackages = (e) => {
    const status = statusRef.current.value;
    const packageName = packageNameRef.current.value;
    const countryName = countryNameRef.current.value;
    const price = priceRef.current.value;
    const packageDays = packageDaysRef.current.value;
    const tourStart = tourStartRef.current.value;
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const cofirmDate = cofirmDateRef.current.value;

    const newBooked = {
      status,
      packageName,
      countryName,
      price,
      packageDays,
      tourStart,
      userName,
      email,
      cofirmDate,
    };

    fetch("https://immense-sierra-48309.herokuapp.com/bookedPackages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooked),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added successfully");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  useEffect(() => {
    const url = `https://immense-sierra-48309.herokuapp.com/packages/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  });

  return (
    <>
      <form
        action=""
        className="bg-banner4 bg-cover bg-center bg-no-repeat w-full h-full"
        onSubmit={handlerBookedPackages}
      >
        <div className="container mx-auto my-auto px-20 grid grid-cols-2 py-16 ">
          <img src={packages.img} alt="" className="w-full h-auto" />
          <div className="text-gray-600 space-y-3">
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">{/* status */}</div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value="Pending"
                  ref={statusRef}
                  hidden
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Package Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={packages.packageName}
                  ref={packageNameRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Country Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={packages.countryName}
                  ref={countryNameRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Price
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={packages.price}
                  ref={priceRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Package Days
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={packages.packageDays}
                  ref={packageDaysRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Tour Start
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={packages.tourStartDate}
                  ref={tourStartRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  User Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={user?.displayName}
                  ref={userNameRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  User Email
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={user?.email}
                  ref={emailRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-4">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Confirm Date
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={today}
                  ref={cofirmDateRef}
                />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <input
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                  type="submit"
                  value="Confirm"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PackageBook;
