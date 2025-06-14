document.getElementById("formCompra").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  try {
    const res = await fetch("https://tuservidor.com/api/alumnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      if (data.pago === "paypal") {
        window.location.href = "https://www.paypal.com/checkout";
      } else {
        window.location.href = "https://www.mercadopago.com/checkout";
      }
    } else {
      alert("No se pudo completar la compra. Intentalo más tarde.");
    }
  } catch (error) {
    console.error(error);
    alert("Error de conexión al guardar los datos.");
  }
});