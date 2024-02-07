function ans() {
    let a = parseInt(document.getElementById("abcd").value);
  
    for (let b = 1; b <= 10; b++) {
      document.getElementById("jay").innerHTML +=
        a + " * " + b + " = " + a * b + "<br>";
    }
  }