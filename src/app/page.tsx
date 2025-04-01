"use client"; // Mark this file as a Client Component

import "../styles/styles.css"; // Import global styles
import Record from "@/components/record";
import Receipt from "@/components/receipt";
import Phone from "@/components/phone";
import content from "./content.json";
import { useEffect, useRef, useState } from "react";

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
        {entry.subtitle && <h2>{entry.subtitle}</h2>}
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

// @ts-ignore
const handleWheel = (e) => {
  if (e.deltaY > 0) handleNext();
  if (e.deltaY < 0) handlePrev();
};

const handleNext = () => {
  const covers = document.querySelectorAll('.cover');
  const vinyls = document.querySelectorAll('.vinyl');
  const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;
  const translateAmount = isSmallScreen ? '200%' : '75vw';
  for (let i = covers.length - 1; i >= 0; i--) {
    console.log(covers[i]);
    // @ts-ignore
    if (!covers[i].displacement || covers[i].displacement === 0) {
      // @ts-ignore
      covers[i].style.transform = `translate(-${translateAmount}, -10vh) rotate(-30deg)`;
      // @ts-ignore
      vinyls[i].style.transform = `translate(${translateAmount}, -10vh) rotate(-180deg)`;
      // @ts-ignore
      covers[i].displacement = -50;
      // @ts-ignore
      vinyls[i].displacement = -50;
      break;
    }
  }
}
// @ts-ignore
const handlePrev = () => {
  const covers = document.querySelectorAll('.cover');
  const vinyls = document.querySelectorAll('.vinyl');
  for (let i = 0; i < covers.length; i++) {
    // @ts-ignore
    if (covers[i].displacement && covers[i].displacement !== 0) {
      // @ts-ignore
      covers[i].style.transform = `translateX(0px)`;
      // @ts-ignore
      vinyls[i].style.transform = `translateX(0px)`;
      // @ts-ignore
      covers[i].displacement = 0;
      // @ts-ignore
      vinyls[i].displacement = 0;
      break;
    }
  }
}

// @ts-ignore
const handleTouchStart = (e, setStartX, setStartY) => {
  setStartX(e.touches[0].clientX)
  setStartY(e.touches[0].clientY)
  console.log("Touch Start", e.touches[0].clientX, e.touches[0].clientY);
}

// @ts-ignore
const handleTouchEnd = (e, startX, startY) => {
  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;

  let diffX = endX - startX;
  let diffY = endY - startY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) {
            handlePrev();
          } else {
            handleNext();
          }
      } else {
          if (diffY > 0) {
              console.log("Swipe Down");
              handlePrev();
          } else {
              console.log("Swipe Up");
              handleNext();
          }
      }

    }

export default function Home() {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  return (
    <div
      className="page"
      onWheel={handleWheel}
      onTouchStart={(e) => handleTouchStart(e, setStartX, setStartY)}
      onTouchEnd={(e) => handleTouchEnd(e, startX, startY)}  
    >
      <div className="stack">
        <Receipt />
        {records}
      </div>
    </div>
  );
}