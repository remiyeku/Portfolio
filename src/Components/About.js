import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:pl-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {"Hello, I'm Anthony!"}
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="sm:text-2xl">
            I have experience creating React apps and analysing data with Python
          </h2>
          <br className="hidden lg:inline-block" />
          <p className="mb-8 leading-relaxed">
            As a full stack developer, I possess a good understanding of web
            development principles and technologies however I understand I have
            lots to learn. My knowledge is complemented by a user-centered
            design approach, ensuring that I prioritise the needs and
            experiences of users throughout the development process. Overall, my
            achievements and soft skills make me a well-rounded developer, ready
            to contribute to dynamic and innovative projects. I am dedicated
            continuously improving my abilities in order to excel in the field
            of software development and analysis.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Details
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <Image
            width={300}
            height={300}
            className="position relative object-cover object-center rounded"
            alt="profile picture"
            src="/images/profile.jpg"
          />
        </div>
      </div>
    </section>
  );
}
