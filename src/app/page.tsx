"use client"; // Mark this file as a Client Component

import "../styles/styles.css"; // Import global styles
import Record from "@/components/record";
import Receipt from "@/components/receipt";
import Phone from "@/components/phone";
import content from "./content.json";

const records = content.reverse().flatMap((entry, index) => {
  if (entry.title === "Estrategia de Comunidad") {
    return [
      <Phone key={index + 1000} />,
      <Record key={index} bg={`bg${index + 1}`}>
        <h1>{entry.title}</h1>
        <p>{entry.description}</p>
        {entry.content && (
          <ol>
            {entry.content.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong> {item.description}
              </li>
            ))}
          </ol>
        )}
      </Record>,
    ];
  } else {
    return (
      <Record key={index} bg={`bg${index + 1}`}>
        <h1>{entry.title}</h1>
        <p>{entry.description}</p>
        {entry.content && (
          <ol>
            {entry.content.map((item, i) => (
              <li key={i}>
                <strong>{item.title}</strong> {item.description}
              </li>
            ))}
          </ol>
        )}
      </Record>
    );
  }
});

const handleWheel = (e) => {
  if (e.deltaY > 0) handleNext();
  if (e.deltaY < 0) handlePrev();
};

const handleNext = () => {
  const covers = document.querySelectorAll('.cover');
  console.log(covers);
  const vinyls = document.querySelectorAll('.vinyl');
  for (let i = covers.length - 1; i >= 0; i--) {
    console.log(covers[i]);
    if (!covers[i].displacement || covers[i].displacement === 0) {
      covers[i].style.transform = `translate(-75vw, -10vh) rotate(-30deg)`;
      vinyls[i].style.transform = `translate(75vw, -10vh) rotate(-180deg)`;
      covers[i].displacement = -50;
      vinyls[i].displacement = -50;
      break;
    }
  }
}

const handlePrev = () => {
  const covers = document.querySelectorAll('.cover');
  const vinyls = document.querySelectorAll('.vinyl');
  for (let i = 0; i < covers.length; i++) {
    if (covers[i].displacement && covers[i].displacement !== 0) {
      covers[i].style.transform = `translateX(0px)`;
      vinyls[i].style.transform = `translateX(0px)`;
      covers[i].displacement = 0;
      vinyls[i].displacement = 0;
      break;
    }
  }
}

const handleTouchMove = (e) => {
  console.log(e);
}

export default function Home() {

  return (
    <div className="page" onWheel={handleWheel} onTouchMove={handleTouchMove}>
      <div className="stack">
        <Receipt />
        {records}
      </div>
    </div>
  );
}