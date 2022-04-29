document.getElementById("output").style.visibility = "hidden";
document.getElementById("ibsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let ibs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = ibs/0.0022046;
  document.getElementById("kgOutput").innerHTML = ibs/2.2046;
  document.getElementById("ozOutput").innerHTML = ibs*16;
})
