import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-white font-['Numans']">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-medium text-gray-900 tracking-tight sm:text-5xl">
            Know what other clubbers say
          </h2>

          {/* <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            praesentium natus sapiente commodi. Aliquid sunt tempore iste
            repellendus explicabo dignissimos placeat, autem harum dolore
            reprehenderit quis! Quo totam dignissimos earum.
          </p> */}
        </div>

        <div className="grid grid-cols-1 gap-8 pt-16 mt-16 border-t border-gray-100  sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
          <blockquote className="flex flex-col items-center justify-between text-center  sm:items-start sm:text-left">
            <h5 className="text-xl font-medium text-gray-700">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit&quot;
            </h5>

            <footer className="flex items-center mt-6 text-gray-500">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />

              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-700">Barry Scott</p>

                <p className="mt-1 text-xs text-gray-500">
                  Digital Marketing at Studio
                </p>
              </div>
            </footer>
          </blockquote>

          <blockquote className="flex flex-col items-center justify-between text-center  sm:items-start sm:text-left">
            <h5 className="text-xl font-medium text-gray-700">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing
              elit&quot;
            </h5>

            <footer className="flex items-center mt-8 text-gray-500">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />

              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-700">Barry Scott</p>

                <p className="mt-1 text-xs text-gray-500">
                  Digital Marketing at Studio
                </p>
              </div>
            </footer>
          </blockquote>

          <blockquote className="flex flex-col items-center justify-between text-center  sm:items-start sm:text-left">
            <h5 className="text-xl font-medium text-gray-700">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing
              elit&quot;
            </h5>

            <footer className="flex items-center mt-8 text-gray-500">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />

              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-700">Barry Scott</p>

                <p className="mt-1 text-xs text-gray-500">
                  Digital Marketing at Studio
                </p>
              </div>
            </footer>
          </blockquote>

          <blockquote className="flex flex-col items-center justify-between text-center  sm:items-start sm:text-left">
            <h5 className="text-xl font-medium text-gray-700">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing
              elit&quot;
            </h5>

            <footer className="flex items-center mt-8 text-gray-500">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />

              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-700">Barry Scott</p>

                <p className="mt-1 text-xs text-gray-500">
                  Digital Marketing at Studio
                </p>
              </div>
            </footer>
          </blockquote>

          <blockquote className="flex flex-col items-center justify-between text-center  sm:items-start sm:text-left">
            <h5 className="text-xl font-medium text-gray-700">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing
              elit&quot;
            </h5>

            <footer className="flex items-center mt-8 text-gray-500">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />

              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-700">Barry Scott</p>

                <p className="mt-1 text-xs text-gray-500">
                  Digital Marketing at Studio
                </p>
              </div>
            </footer>
          </blockquote>

          <blockquote className="flex flex-col items-center justify-between text-center  sm:items-start sm:text-left">
            <h5 className="text-xl font-medium text-gray-700">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing
              elit&quot;
            </h5>

            <footer className="flex items-center mt-8 text-gray-500">
              <img
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />

              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-700">Barry Scott</p>

                <p className="mt-1 text-xs text-gray-500">
                  Digital Marketing at Studio
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
