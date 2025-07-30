const graph = {};

graph["you"] = ["Shima", "Nafise", "Ensi"];
graph["Shima"] = ["Parisa", "Arezoo"];
graph["Nafise"] = ["Ensi", "Matin"];
graph["Parisa"] = ["Zahra"];
graph["Arezoo"] = ["Aida"];
graph["Ensi"] = [];
graph["Matin"] = [];
graph["Zahra"] = [];
graph["Aida"] = [];

function isDoctor(person) {
  return person.startsWith("Z");
}

let searchQueue = graph["you"];

let visited = new Set();

while (searchQueue.length !== 0) {
  const person = searchQueue[0];
  searchQueue = searchQueue.filter((item, index) => index !== 0);
  //   searchQueue = searchQueue.slice(1);
  if (!visited.has(person)) {
    console.log(person);
    visited.add(person);
    console.log(visited, "visited");

    if (isDoctor(person)) {
      console.log(`Ok, ${person} is a Doctor`);
      return;
    } else {
      searchQueue.push(...graph[person]);
    }
  }
}
