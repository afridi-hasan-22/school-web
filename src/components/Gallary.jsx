import React from "react";

const Gallary = () => {
  return (
    <div>
      <div className="w-full mx-auto">
        <p className="text-4xl font-bold  text-center mb-16">
          Student <span className="text-blue-500">Gellary</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="carousel  lg:w-10/12 md:max-w-full sm:max-w-xl">
          <div id="slide1" class="carousel-item relative w-full">
            <img src="../../public/caro4.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src="../../public/caro5.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img src="../../public/caro6.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img src="../../public/caro4.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-center text-3xl font-bold mb-10">Notice Board</p>
            <hr className="mb-5 "/>
          </div>
          <div className="mx-auto lg:mr-9">
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div class="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div class="collapse-content">
                <p className="text-blue-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum esse magnam veniam ipsa iure laboriosam.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div class="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div class="collapse-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum esse magnam veniam ipsa iure laboriosam.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div class="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div class="collapse-content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum esse magnam veniam ipsa iure laboriosam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
