import React from "react";

const Header = () => {
  return (
    <header className="w-full h-screen">
      <div className="container px-4 sm:px-0 mx-auto flex justify-center items-center min-h-full">
        <section className="text-center">
          <h1 className="text-4xl font-bold leading-relaxed">
            Prioritizing user experience
            <br />
            security and customer satisfaction
          </h1>
          <p className="mt-4 text-2xl">
            Agile in mind, committed and high spirit.
          </p>
          <button className="mt-4 bg-blue-700 text-slate-50 font-medium py-2.5 px-5 rounded-lg hover:opacity-90">
            Create Project
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
