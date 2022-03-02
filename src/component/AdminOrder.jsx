import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminOrder = () => {
  const [bookedPackagesAdmin, setBookedPackagesAdmin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://immense-sierra-48309.herokuapp.com/bookedPackages")
      .then((res) => res.json())
      .then((data) => setBookedPackagesAdmin(data))
      .finally(() => setIsLoading(false));
  }, []);
  //   delete
  const handleDeletOrder = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://immense-sierra-48309.herokuapp.com/bookedPackages/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("successfullly ");
            const remainingOrder = bookedPackagesAdmin.filter(
              (bookedpackage) => bookedpackage._id !== id
            );
            setBookedPackagesAdmin(remainingOrder);
          }
        });
    }
  };
  //   update status
  function handleConfirm(id) {
    const proceed = window.confirm("Are you sure, you want to Confirm?");
    if (proceed) {
      const url = `https://immense-sierra-48309.herokuapp.com/bookedPackages/${id}`;
      fetch(url, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            alert("successfullly placed Order ");
            setIsLoading(!isLoading);
          }
        });
    }
  }

  return (
    <>
      <div className="h-screen">
        <div className="container mx-auto px-6 sm:px-44">
          <div className="text-center py-14">
            <p
              before="__"
              className="text-yellow-400 text-2xl before:content-[attr(before)] after:content-[attr(before)]"
            >
              Order History
            </p>
          </div>
          <div>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden shadow-md sm:rounded-lg">
                    <table class="min-w-full">
                      <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Package Name
                          </th>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            price
                          </th>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Confirm Date
                          </th>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                          >
                            Cancel
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookedPackagesAdmin.map((bookedpackage) => (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {bookedpackage.userName}
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {bookedpackage.email}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {bookedpackage.packageName}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {bookedpackage.price}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {bookedpackage.cofirmDate}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <Link
                                to=""
                                onClick={() => handleConfirm(bookedpackage._id)}
                              >
                                {bookedpackage.status}
                              </Link>
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              <Link
                                to=""
                                onClick={() =>
                                  handleDeletOrder(bookedpackage._id)
                                }
                              >
                                Cancel
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrder;
