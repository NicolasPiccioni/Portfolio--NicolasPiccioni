const form = document.getElementById("contactForm");
const feedback = document.getElementById("status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mzdagnwp", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      feedback.textContent = "✅ Mensaje enviado correctamente.";
      form.reset();
    } else {
      const errorData = await response.json();
      console.log(errorData);
      feedback.textContent = "❌ Error al enviar.";
    }

  } catch (error) {
    console.error(error);
    feedback.textContent = "❌ Error de conexión.";
  }
  
});