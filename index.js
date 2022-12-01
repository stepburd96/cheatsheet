const { content } = CONTENT;
const {
  CSS: { vocab },
} = content;

const cssPropsSection = document.getElementById("properties");

const tbl = document.createElement("table");
let tblBodyCSSProps = document.createElement("tbody");

vocab.forEach((element) => {
  const { term, definition } = element;

  const row = document.createElement("tr");
  const termCell = document.createElement("td");
  const definitionCell = document.createElement("td");
  const termText = document.createTextNode(`${term}`);
  const definitionText = document.createTextNode(`${definition}`);

  termCell.appendChild(termText);
  definitionCell.appendChild(definitionText);
  row.appendChild(termCell);
  row.appendChild(definitionCell);
  tblBodyCSSProps.appendChild(row);
});

tbl.appendChild(tblBodyCSSProps)
cssPropsSection.appendChild(tbl);
