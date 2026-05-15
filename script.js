const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
    empresa: document.getElementById("empresa").value,
    curso: document.getElementById("curso").value,
    modalidad: document.getElementById("modalidad").value,
  };

  console.log(datos);

  try {
    const respuesta = await fetch(
      "https://juanoliveros.app.n8n.cloud/webhook/registro",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(datos),
      },
    );

    console.log("RESPUESTA:", respuesta);

    document.getElementById("mensaje").innerText =
      "Información enviada correctamente";

    form.reset();
  } catch (error) {
    console.log("ERROR:", error);

    document.getElementById("mensaje").innerText = "Error al enviar";
  }
});
