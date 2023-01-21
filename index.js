function calcular() {
  let number = document.querySelector("#txtnum");

  let tab = document.querySelector("#seltab");

  if (number.value.length == 0) {
    alert("[ERRO] Insira um número!");
  } else {
    let num = Number(number.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${num} x ${c} = ${num * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }

  /*for (let c = 0; c <= 10; c++) {
    tab.innerText = `${num} x ${c} = ${num * c}`;
  }*/
}
