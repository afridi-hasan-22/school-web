import React from "react";

const Header = () => {
  return (
    <div>
      <div class="navbar  bg-gray-300">
        <div class="inline-flex flex-1">
           <img className="h-8 w-8" src="../../public/logo.jpg" alt="" />
          <a class="text-blue-500 normal-case font-bold px-4 py-5 text-2xl ">IT Society</a>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://picsum.photos/seed/picsum" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
