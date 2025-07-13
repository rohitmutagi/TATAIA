function saveProfessional(data) {
  const arr = JSON.parse(localStorage.getItem("professionals") || "[]");
  arr.push(data);
  localStorage.setItem("professionals", JSON.stringify(arr));
}

function getProfessionals() {
  return JSON.parse(localStorage.getItem("professionals") || "[]");
}
