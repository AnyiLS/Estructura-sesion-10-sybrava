const handleGetTotal = () => {
  const total = JSON.parse(sessionStorage.getItem("responses")),
    container = document.querySelector(".container");

  document.querySelector(".total").style.fontSize = `${
    container.clientHeight / 14
  }px`;

  document.querySelector('.total').innerText = total.length
};

document.addEventListener("DOMContentLoaded", handleGetTotal);
