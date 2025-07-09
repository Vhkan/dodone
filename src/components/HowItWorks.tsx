import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Create a Service Request",
    description: "Fill out the service request form with your details.",
    image: "/service.png",
  },
  {
    title: "Connect with a Specialist",
    description:
      "Our specialists will review your request and reach out to you.",
    image: "/connection.png",
  },
  {
    title: "Get Your Service Done",
    description:
      "Leave a review after the service completion.",
    image: "/easy-installation.png",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-700">
        How DoDone Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src={step.image}
                alt={step.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
