import React from "react";

export type person = {
  id: number;
  vorname: string;
  nachname: string;
  rollen: string[];
  beschreibung: string;
  foto: string;
};

const personen: person[] = [
  {
    id: 0,
    vorname: "Philipp",
    nachname: "Busch",
    rollen: ["Frontend-Developer", "Filmmaker", "Geschäftsführung"],
    beschreibung:
      "Hi, ich bin Philipp und liebe Filme! Von kleinen Bewerbungsvideos über komplexere Imagefilme bis hin zu großen Produktionen. Neben Video-/Filmproduktionen bin ich leidenschaftlicher Software-Entwickler mit Fokus auf Frontend Development und Kenntnissen in diversen Datenbank-Systemen und Backend-Technologien. Allgemein sage ich immer: Du willst was, du kriegst es!",
    foto: "Telepromter-und-Ich.jpeg",
  },
  {
    id: 1,
    vorname: "Jannis",
    nachname: "Busch",
    rollen: ["Fullstack-Developer", "Projectmanagement", "Geschäftsführung"],
    beschreibung:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo pariatur, ullam consectetur perspiciatis dolorum aspernatur quas in quibusdam quo ab sint eligendi iusto, quidem suscipit nulla ad et perferendis! Praesentium.",
    foto: "Jannis-aufm-sofa.jpeg",
  },
  // {
  //   id: 2,
  //   vorname: "Nico",
  //   nachname: "Busch",
  //   rollen: ["Fullstack-Developer", "Projectmanagement", "Geschäftsführung"],
  //   beschreibung:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo pariatur, ullam consectetur perspiciatis dolorum aspernatur quas in quibusdam quo ab sint eligendi iusto, quidem suscipit nulla ad et perferendis! Praesentium.",
  //   foto: "Telepromter-und-Ich.jpeg",
  // },
];

const WerSindWir = () => {
  return (
    <div
      id="WerSindWir"
      className="flex w-full h-full p-2 sm:p-6 pt-12 overscroll-y-auto justify-center"
    >
      <div
        id="WerSindWir.container"
        className="flex w-full sm:w-2/3 flex-wrap justify-center"
      >
        {personen.map((person: person) => (
          <div
            id="WerSindWir.person"
            key={person.id}
            className="flex flex-col space-y-4 p-4 w-full items-center lg:w-1/2"
          >
            <img
              id="WerSindWir.profil-pic"
              src={person.foto}
              alt={`profil-pic-${person.vorname}`}
              className="h-40 rounded-full border-4 border-logo-dark dark:border-logo-light"
            />
            <h1
              id="WerSindWir.profil-name"
              className="text-center font-bold text-2xl font-logo"
            >
              {person.vorname} {person.nachname}
            </h1>
            <h1
              id="WerSindWir.profil-rollen"
              className="text-center font-bold text-base text-logo-dark dark:text-logo-light"
            >
              {person.rollen.join(", ")}
            </h1>
            <p
              id="WerSindWir.profil-beschreibung"
              className="text-center text-wrap w-full md:w-3/4 text-justify"
            >
              {person.beschreibung}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WerSindWir;
