
import reliabilityIcon from "../assets/icons/icons8-reliability-64.png";
import qualityIcon from "../assets/icons/icons8-quality-80.png";
import supportIcon from "../assets/icons/icons8-support-100.png";

const WhyUs = () => {
  return (
    <div className="w-5/6 mx-auto my-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold caveat-font ">
          Why Choose Athletic Arsenal?
        </h2>
        <p className="mt-4 text-lg">
          Your ultimate destination for premium sports equipment and
          unparalleled customer service.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Reliability */}
        <div className="text-center p-6 bg-[#343a40] rounded-lg shadow-lg">
          <img
            src={reliabilityIcon}
            alt="Reliability Icon"
            className="mx-auto mb-4 w-16"
          />
          <h3 className="text-2xl font-semibold text-[#007bff]">
            Reliable Service
          </h3>
          <p className="mt-4 text-[#6c757d]">
            Experience seamless shopping with a commitment to timely delivery
            and dependable support.
          </p>
        </div>

        {/* Quality Products */}
        <div className="text-center p-6 bg-[#343a40] rounded-lg shadow-lg">
          <img
            src={qualityIcon}
            alt="Quality Icon"
            className="mx-auto mb-4 w-16"
          />
          <h3 className="text-2xl font-semibold text-[#007bff] ">
            Premium Quality
          </h3>
          <p className="mt-4 text-[#6c757d] ">
            All equipment is crafted with precision, ensuring top-notch
            durability and performance.
          </p>
        </div>

        {/* Support */}
        <div className="text-center p-6 bg-[#343a40] rounded-lg shadow-lg">
          <img
            src={supportIcon}
            alt="Support Icon"
            className="mx-auto mb-4 w-16"
          />
          <h3 className="text-2xl font-semibold text-[#007bff]">
            24/7 Support
          </h3>
          <p className="mt-4 text-[#6c757d]">
            Our dedicated team is always ready to assist you with your needs
            around the clock.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
