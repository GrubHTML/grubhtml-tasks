import GetButton from "./GetButton";

function CallToAction({ isVisible }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-8 pb-32 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-white text-4xl font-bold">
          Ready to be more productive?
        </p>
        <div className="mt-8 flex justify-center">
          {" "}
          <GetButton />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
