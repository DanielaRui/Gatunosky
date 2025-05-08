document.addEventListener("DOMContentLoaded", function () {
    const preguntas = [
      {
        pregunta: "¿Cuántas vidas se dice que tiene un gato?",
        respuesta: "Nueve."
      },
      {
        pregunta: "¿Qué color tienen los ojos de la mayoría de los gatos al nacer?",
        respuesta: "Azules."
      },
      {
        pregunta: "¿Cuánto duerme un gato al día, en promedio?",
        respuesta: "Entre 12 y 16 horas."
      },
      {
        pregunta: "¿Cómo se llama el sonido que hace un gato?",
        respuesta: "Maullido."
      },
      {
        pregunta: "¿Los gatos pueden ver en la oscuridad total?",
        respuesta: "No, pero pueden ver con muy poca luz."
      }
    ];
  
    const preguntaEl = document.getElementById("pregunta"); 
    const respuestaEl = document.getElementById("respuesta");
    const mostrarBtn = document.getElementById("mostrarBtn");
    const nuevaPreguntaBtn = document.getElementById("nuevaPreguntaBtn");
  
    function mostrarPreguntaAleatoria() {
      const aleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
      preguntaEl.textContent = aleatoria.pregunta;
      respuestaEl.textContent = aleatoria.respuesta;
      respuestaEl.style.display = "none";
    }
  
    mostrarPreguntaAleatoria();
  
    mostrarBtn.addEventListener("click", () => {
      respuestaEl.style.display = "block";
    });
  
    nuevaPreguntaBtn.addEventListener("click", () => {
      mostrarPreguntaAleatoria();
    });
  });
  