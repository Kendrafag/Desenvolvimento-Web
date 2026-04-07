const input = document.getElementById('inputTarefa');
const lista = document.getElementById('lista');

function adicionarTarefa() {
  const texto = input.value;

  if (texto === "") return;

  const li = document.createElement("li");
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  const span = document.createElement("span");
  span.textContent = texto;
  
  li.appendChild(checkbox);
  li.appendChild(span);

  lista.appendChild(li);

  input.value = "";
}

lista.addEventListener("click", function(event) {
  if (event.target.type === 'checkbox') {
    return; 
  }


  const li = event.target.closest("li");
  if (li) {
    li.remove();
  }
});