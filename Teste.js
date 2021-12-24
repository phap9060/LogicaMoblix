function ampulheta(n) {
  let valor = n;
  let string = "";
  let count1 = 1;
  let count2 = valor - 2;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === 1 || i === n - 1) {
        string += "#";
      } else {
        if (j === 0 || j === valor - 1) {
          string += "#";
        } else if (j > count1 && j < count2) {
          string += "#";
        } else if (i >= n / 2 && (j === count2 || j === count1)) {
          string += "#";
        } else {
          string += " ";
        }
      }
    }
    if (i > 1) {
      count1 += 1;
      count2 -= 1;
    }
    string += "\n";
  }
  console.log(string);
}
ampulheta(21);
