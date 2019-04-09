var FileReader = require('filereader');

function* number() {
  let file = new FileReader("test.txt");
  try {
    while (!file.eof) {
      yield parseInt(file.readLine(), 10);
    }
  } catch (e) {
  } finally {
    // file.close();
  }
}


var f = number();
for(let line of f){
    console.log(line);
}
console.log(f.next());