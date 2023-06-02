import React from "react";

const Teacher = () => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <p className="text-4xl text-center font-bold">Our Honourable Teacher</p>
      </div>
      <hr className="mt-2" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 py-5 mx-auto">
      <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10 grid grid-cols-3">
          <img
            src="../../public/teacher.jpg"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Afridi Hasan</h2>
          <p>Assistant Professor</p>
          <p>IT Society</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10 grid grid-cols-3">
          <img
            src="../../public/teacher.jpg"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Afridi Hasan</h2>
          <p>Assistant Professor</p>
          <p>IT Society</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10 grid grid-cols-3">
          <img
            src="../../public/teacher.jpg"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Afridi Hasan</h2>
          <p>Assistant Professor</p>
          <p>IT Society</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Teacher;
