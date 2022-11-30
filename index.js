const data = fetch('./content.json').then(response => response.json).then(data => console.log(data)).catch(error => console.log(error));

console.log(data)