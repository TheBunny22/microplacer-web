const LegendData = [
  {
    id: 1,
    Features: '<div class="ColumnText">Minimum Line Width</div>',
    Capability: '<div class="ColumnText">6 mil (0.153mm)</div>',
    Notes:
      '  <div class="ColumnText">\n        Characters width less than 6mil(0.153mm) will be unidentifiable.\n      </div>\n    ',
    Patterns: '<img src="../assets/img/clearance/legend1.jpg"alt="legend" />',
  },
  {
    id: 2,
    Features: '<div class="ColumnText">Minimum text height</div>',
    Capability: '<div class="ColumnText">40 mil (1.0mm)</div>',
    Notes:
      '<div class="ColumnText">\n        Characters width less than 40mil(1.0mm) will be unidentifiable.\n      </div>',
    Patterns: '<img src="../assets/img/clearance/legend2.png"alt="legend" />',
  },
  {
    id: 3,
    Features: '<div class="ColumnText">Character width to height ratio</div>',
    Capability: '<div class="ColumnText">1:6</div>',
    Notes:
      '<div class="ColumnText">The preferred ratio of width to height is 1:6.</div>',
    Patterns: '<img src="../assets/img/clearance/legend3.png"alt="legend" />',
  },
  {
    id: 4,
    Features:
      '<div class="ColumnText">Hollow-Carved Character width to height ratio</div>',
    Capability: '<div class="ColumnText">1:6</div>',
    Notes:
      '<div class="ColumnText">The preferred ratio of width to height is 1:6.</div>',
    Patterns: "",
  },
  {
    id: 5,
    Features: '<div class="ColumnText">Pad To Silkscreen</div>',
    Capability: '<div class="ColumnText">0.15mm</div>',
    Notes:
      '<div class="ColumnText">The preferred ratio of width to height is 1:6</div>',
    Patterns: '<img src="../assets/img/clearance/legend5.jpg"alt="legend" />',
  },
];

const BoardOutlines = [
  {
    id: 1,
    Features: '<div class="ColumnText">Trace to Outline</div>',
    Capability: '<div class="ColumnText">0.2mm</div>',
    Notes:
      ' <div class="ColumnText">\n        Ships as individual board(Rounting):Trace to Outline≥0.2mm\n      </div>',
    Patterns:
      ' <img src="../assets/img/clearance/boardOutline1.jpg"alt="legend" />',
  },
  {
    id: 2,
    Features: '<div class="ColumnText">Trace to V-cut line</div>',
    Capability: '<div class="ColumnText">0.4mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        Ship as panel with V-scoring: Trace to V-cut line≥0.4mm\n      </div>',
    Patterns:
      ' <img src="../assets/img/clearance/boardOutline2.jpg"alt="legend" />',
  },
];

function jsonToTable(jsonData) {
  let table = '<table border="1">';

  // Create table headers
  table += "<thead><tr>";
  for (const key in jsonData[0]) {
    table += `<th>${key}</th>`;
  }
  table += "</tr></thead>";

  // Create table body
  table += "<tbody>";
  jsonData.forEach((row) => {
    table += "<tr>";
    for (const key in row) {
      table += `<td>${row[key]}</td>`;
    }
    table += "</tr>";
  });
  table += "</tbody>";

  table += "</table>";
  return table;
}
