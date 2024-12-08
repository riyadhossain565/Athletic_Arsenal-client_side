import photo1 from "../assets/photo/images.jpg"
import photo2 from "../assets/photo/images (1).jpg"
import photo3 from "../assets/photo/images-3.jpg"

const Testimonials = () => {
  return (
    <div className="w-5/6 mx-auto my-16 text-center">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold caveat-font ">
        What Our Customers Say
      </h2>
      <p className="text-lg mt-4 ">
        Hear from athletes around the world who trust us with their sports gear.
      </p>

      {/* Testimonial Carousel */}
      <div className="mt-12 flex justify-center overflow-x-scroll gap-8 scrollbar-hide">
        {/* first */}
        <div
          className="w-80 bg-[#f8f9fa] dark:bg-[#343a40] p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
        >
          <img
            src={photo1}
            alt="testimonial photo"
            className="w-20 h-20 rounded-full mx-auto border-4 border-[#17a2b8]"
          />
          <h3 className="text-2xl font-semibold text-[#17a2b8] mt-4">
          Alex Johnson
          </h3>
          <p className="italic text-[#6c757d] dark:text-[#adb5bd] mt-2">
          The quality of equipment I found here is unmatched! It has truly elevated my game.
          </p>
          <p className="text-sm text-[#6c757d] dark:text-[#adb5bd] mt-2">
          California, USA
          </p>
        </div>

        {/* second */}
        <div
          className="flex-shrink-0 w-80 bg-[#f8f9fa] dark:bg-[#343a40] p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
        >
          <img
            src={photo2}
            alt="testimonial photo"
            className="w-20 h-20 rounded-full mx-auto border-4 border-[#17a2b8]"
          />
          <h3 className="text-2xl font-semibold text-[#17a2b8] mt-4">
          Maria Rodriguez
          </h3>
          <p className="italic text-[#6c757d] dark:text-[#adb5bd] mt-2">
          I love the variety of options available. The customer service is fantastic!
          </p>
          <p className="text-sm text-[#6c757d] dark:text-[#adb5bd] mt-2">
          Madrid, Spain
          </p>
        </div>
        <div
          className="flex-shrink-0 w-80 bg-[#f8f9fa] dark:bg-[#343a40] p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow"
        >
          <img
            src={photo3}
            alt="testimonial photo"
            className="w-20 h-20 rounded-full mx-auto border-4 border-[#17a2b8]"
          />
          <h3 className="text-2xl font-semibold text-[#17a2b8] mt-4">
          Kenichi Yamada
          </h3>
          <p className="italic text-[#6c757d] dark:text-[#adb5bd] mt-2">
          Athletic Arsenal is my go-to store for all my sports needs. Highly recommended!
          </p>
          <p className="text-sm text-[#6c757d] dark:text-[#adb5bd] mt-2">
          Tokyo, Japan
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-4 py-2 bg-[#007bff] text-white rounded-md hover:bg-[#0056b3] ">
          Previous
        </button>
        <button className="px-4 py-2 bg-[#007bff] text-white rounded-md hover:bg-[#0056b3]">
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
