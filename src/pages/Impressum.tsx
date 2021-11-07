import React from "react";

const Impressum = () => {
  return (
    <div id="Impressum" className="w-full flex justify-center">
      <div className="w-full sm:w-2/3 md:w-1/2">
        <h1 id="Impressum.title" className="font-bold text-2xl">
          Impressum
        </h1>
        <p
          id="Impressum.rechts-hinweis"
          className="text-gray-800 dark:text-gray-200"
        >
          Angaben gemäß § 5 TMG
        </p>
        <br />
        <p id="Impressum.rechts-hinweis">Busch &amp; Busch Digital GbR</p>
        <p id="Impressum.rechts-hinweis">Pankower Allee 90</p>
        <p id="Impressum.rechts-hinweis">13409 Berlin</p>
        <br />
        <p id="Impressum.rechts-hinweis">Vertreten durch:</p>
        <p id="Impressum.rechts-hinweis">Philipp Busch</p>
        <p id="Impressum.rechts-hinweis">Jannis Busch</p>
      </div>
    </div>
  );
};

// Impressum
// Angaben gemäß § 5 TMG

// Philipp Busch
// Pankower Allee 90
// 13409 Berlin
// Vertreten durch:
// Philipp Busch
// Jannis Busch

export default Impressum;
