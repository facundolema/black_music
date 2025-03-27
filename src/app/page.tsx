"use client"; // Mark this file as a Client Component

import "../styles/styles.css"; // Import global styles
import Record from "@/components/record";
import { useState } from "react";

let objetivos = [
  {
    title: "Aumentar la cantidad de seguidores",
    description: "de manera orgánica y con estrategias de crecimiento segmentadas."
  },
  {
    title: "Mejorar la presencia digital de la marca",
    description: "consolidando su identidad y diferenciándola de la competencia."
  },
  {
    title: "Crear una comunidad activa",
    description: "fomentando la interacción y la fidelización de clientes."
  },
  {
    title: "Impulsar las ventas",
    description: "a través de contenido atractivo, informativo y estratégico."
  }
]

let estrategiasContenido = [
  {
    title: "Contenido visual atractivo",
    description: "producción de fotos y videos de alta calidad que muestren los instrumentos en detalle, incluyendo su sonido, materiales y características."
  },
  {
    title: "Demostraciones y pruebas",
    description: "videos donde se muestren las funcionalidades de los instrumentos, con foco en sonido y usabilidad."
  },
  {
    title: "Educación musical",
    description: "tips prácticos sobre elección, mantenimiento, afinación y uso adecuado de los instrumentos."
  },
  {
    title: "Ofertas y promociones",
    description: "publicaciones estratégicas con descuentos, novedades y beneficios exclusivos."
  }
]

let estrategiasComunidad = [
  {
    title: "Gestión activa de interacciones",
    description: "responder comentarios y mensajes de manera rápida y personalizada."
  },
  {
    title: "Historias interactivas",
    description: "generación de encuestas, juegos, trivias y sorteos express para dinamizar el engagement."
  },
  {
    title: "Sorteos estratégicos",
    description: "planificación de sorteos periódicos con el objetivo de atraer nuevos seguidores e incentivar la interacción."
  },
  {
    title: "Colaboraciones con músicos e influencers",
    description: "del nicho, ampliando el alcance de la marca a través de figuras relevantes del sector."
  }
]

let frecuenciaPublicacion = [
  {
    title: "Feed",
    description: "3 publicaciones semanales (incluyendo al menos 1 reel por semana). La cantidad puede ajustarse en función del contenido disponible."
  },
  {
    title: "Historias",
    description: "publicaciones diarias para mantener la cuenta activa y fomentar la interacción."
  }
]

let metricas = [
  {
    title: "Crecimiento de la comunidad",
    description: "aumento de seguidores y nivel de interacción."
  },
  {
    title: "Alcance del contenido",
    description: "rendimiento de publicaciones, reels e historias."
  },
  {
    title: "Generación de consultas",
    description: "incremento de mensajes privados y comentarios relacionados con compras."
  }
]

let objetivosList = objetivos.map((objetivo, index) => {
  return (
    <li key={index}>
      <strong>{objetivo.title}</strong> {objetivo.description}
    </li>
  );
});

let estrategiasContenidoList = estrategiasContenido.map((estrategia, index) => {
  return (
    <li key={index}>
      <strong>{estrategia.title}</strong> {estrategia.description}
    </li>
  );
});

let estrategiasComunidadList = estrategiasComunidad.map((estrategia, index) => {
  return (
    <li key={index}>
      <strong>{estrategia.title}</strong> {estrategia.description}
    </li>
  );
});

let frecuenciaPublicacionList = frecuenciaPublicacion.map((frecuencia, index) => {
  return (
    <li key={index}>
      <strong>{frecuencia.title}</strong> {frecuencia.description}
    </li>
  );
});

let metricasList = metricas.map((metrica, index) => {
  return (
    <li key={index}>
      <strong>{metrica.title}</strong> {metrica.description}
    </li>
  );
});

const handleWheel = (e, selectedCover, selectedVinyl, setSelectedCover, setSelectedVinyl) => {
  const covers = document.querySelectorAll('.cover');
  const vinyls = document.querySelectorAll('.vinyl');

  let currentCover = selectedCover;
  let currentVinyl = selectedVinyl;

  console.log(currentCover, currentVinyl);

  // If selectedCover is not defined, initialize it
  if (!currentCover) {
    console.log('Initializing cover');
    currentCover = covers[covers.length - 1];
    currentVinyl = vinyls[vinyls.length - 1];
    setSelectedCover(currentCover);
    setSelectedVinyl(currentVinyl);
  }

  const rect = currentCover.getBoundingClientRect();

  console.log('scroll: ', e.deltaY);
  console.log('cover: ', currentCover);
  console.log('vinyl: ', currentVinyl);
  console.log('current displacement: ', currentCover.displacement);

  // Check if the cover is within the viewport
  if (e.deltaY > 0 || (e.deltaY < 0 && currentCover.displacement > 0)) {
  if (rect.left > 0 && rect.right <= window.innerWidth) {
    console.log('Cover is in view');
  } else {
    console.log('Cover is out of view');
    for (let i = 0; i < covers.length; i++) {
      if (covers[i] === currentCover) {
        console.log('Found current cover');
        currentCover = covers[i - 1];
        currentVinyl = vinyls[i - 1];
        setSelectedCover(currentCover);
        setSelectedVinyl(currentVinyl);
        break;
      } 
    } 
  }}
  else {
      for (let i = 0; i < covers.length; i++) {
        if (covers[i] === currentCover) {
          console.log('Found current cover');
          currentCover = covers[i + 1];
          currentVinyl = vinyls[i + 1];
          setSelectedCover(currentCover);
          setSelectedVinyl(currentVinyl);
          break;
        } 
      }
    }

  if (currentCover) {
    if (!currentCover.displacement) {
      currentCover.displacement = e.deltaY;
    } else {
      currentCover.displacement += e.deltaY;
    }
    if (!currentVinyl.displacement) {
      currentVinyl.displacement = e.deltaY;
    } else {
      currentVinyl.displacement += e.deltaY;
    }

    // Apply transformations
    currentCover.style.transform = `translateX(${-currentCover.displacement * 5}px )`;
    currentVinyl.style.transform = `translateX(${currentVinyl.displacement * 5}px )`;
  }
};

export default function Home() {
  const [selectedCover, setSelectedCover] = useState(null);
  const [selectedVinyl, setSelectedVinyl] = useState(null);
  return (
    <>
      <div id="page"
        onWheel={(e) => handleWheel(e, selectedCover, selectedVinyl, setSelectedCover, setSelectedVinyl)}
      >
        <div className="side side-left" />
        <div className="stack">
          <Record>
            <h1>Métricas y Evaluación</h1>
            <p>
              Para medir el éxito de la estrategia, se realizará un seguimiento de las siguientes métricas clave:
            </p>
            <ol>{metricasList}</ol>
          </Record>
          <Record>
            <h1>Publicidad Paga (Opcional)</h1>
            <p>
              Si se decide complementar la estrategia con publicidad paga, se recomienda invertir en campañas segmentadas en Instagram y Facebook, dirigidas a músicos y amantes de la música. Se puede evaluar un presupuesto adicional para maximizar el impacto.
            </p>
          </Record>
          <Record>
            <h1>Frecuencia de Publicación</h1>
            <p>
              La constancia es clave para el crecimiento de la cuenta. Se propone el siguiente plan de publicaciones:
            </p>
            <ol>{frecuenciaPublicacionList}</ol>
          </Record>
          <Record>
            <h1>Estrategia de Comunidad</h1>
            <p>
              Para fomentar la participación y el sentido de pertenencia de los seguidores, se desarrollarán las siguientes acciones:
            </p>
            <ol>{estrategiasComunidadList}</ol>
          </Record>
          <Record>
            <h1>Estrategia de Contenido</h1>
            <p>Para lograr estos objetivos, se implementará una estrategia de contenido alineada con las necesidades del negocio y el interés del público objetivo.          </p>
            <ol>{estrategiasContenidoList}</ol>
          </Record>
          <Record>
            <h1>Objetivos</h1>
            <p>
              El objetivo de las estrategias sugeridas a continuación es potenciar la presencia digital de la marca y generar resultados concretos en términos de interacción y ventas. Para ello, se plantean los siguientes ejes principales:
            </p>
            <ol>{objetivosList}</ol>
          </Record>
          <Record>
            <h2><strong>BLACK MUSIC</strong> | 27.03.2025</h2>
            <h1>Propuesta | Redes</h1>
            <p>Nuestra estrategia de marketing digital para la marca se enfoca en la creación de contenido de valor para la audiencia, con el objetivo de aumentar la presencia digital y las ventas.</p>
          </Record>
        </div>
        <div className="side side-right" />
      </div>
    </>
  );
}