import React from "react";
import { useQuery } from "react-query";
import SingleManageDonor from "./SingleManageDonor";

const ManageDonor = () => {
  const {
    data: donor,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch("https://hospital-server-tau.vercel.app/bloodDonor").then((res) =>
      res.json()
    )
  );
  return (
    <div className=" ">
      <div className=" ">
        <div class="mb-16">
          <dh-component>
            <div class="w-full bg-gray-100 px-10 pt-10">
              <div class=" mx-auto">
                <div
                  role="list"
                  aria-label="Behind the scenes People "
                  class="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around"
                >
                  {donor?.map((value) => (
                    <SingleManageDonor value={value} refetch={refetch} />
                  ))}
                </div>
              </div>
            </div>
          </dh-component>
        </div>
      </div>
    </div>
  );
};

export default ManageDonor;
