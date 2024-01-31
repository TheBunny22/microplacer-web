const pcbspecData = [
  {
    Features: '<div class="ColumnText">Layer Count</div>',
    Capability: '<div class="ColumnText">1-20 Layers</div>',
    Notes: '<div class="ColumnText">The Number of Copper Layers in Board</div>',
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Controlled Impedance</div>',
    Capability:
      '<div class="ColumnText">4/6 Layers , default layer Stack-up</div>',
    Notes:
      '<div class="ColumnText">        <a href="fjkwfi">link</a>      </div >  ',
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Material</div>',
    Capability: `<div class="ColumnText">  FR-4         <br />         Aluminum         <br />         Copper core         <br />         Rogers / PTFE Teflon       </div>`,
    Notes: `<div class="ColumnText">         Fr - 4 , Alluminium , Copper Core , Rogers / PTFE,         <br />         Notes: FR-4: Tg 135 / Tg140 / Tg155 / Tg170 <br />         Aluminum thermal conductivity: 1W/m.K         <br />         Copper core thermal conductivity: 3801W/m.K       </div>`,
    Patterns: '<img src="assets/img/material.jpg"alt="images" />',
  },
  {
    Features: '<div class="ColumnText">Dielectric Constant</div>',
    Capability: '<div class="ColumnText"> 4.5(double-sided PCB)</div>',
    Notes: `<div class="ColumnText">      7628 Prepreg 4.6         <br />         3313 Prepreg 4.05         <br />         2116 Prepreg 4.25       </div>`,
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Max. Dimension</div>',
    Capability: '<div class="ColumnText">400 x 500mm</div>',
    Notes:
      '<div class="ColumnText">The Maximum Dimensions Microplacer Accepts</div>',
    Patterns: ' <img src="assets/img/maxd.jpg"alt="gdj" />',
  },
  {
    Features: '<div class="ColumnText">Dimension Tolerance</div>',
    Capability: '<div class="ColumnText">±0.1mm</div>',
    Notes:
      '<div class="ColumnText">         ±0.1mm(Precision) and ±0.2mm(Regular) for CNC routing, and ±0.4mm for         V-scoring       </div>',
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Board Thickness</div>',
    Capability:
      '<div class="ColumnText">0.4/0.6/0.8/1.0/1.2/1.6/2.0/2.5mm</div>',
    Notes: '<div class="ColumnText">The thickness of finished board.</div>',
    Patterns: '<img src="assets/img/pcbthickness.jpg"alt="thickness" />',
  },
  {
    Features: `<div class="ColumnText">           Thickness Tolerance <br /> ( Thickness≥1.0mm)       </div>`,
    Capability: '<div class="ColumnText">± 10%</div>',
    Notes:
      '<div class="ColumnText">         e.g. For the 1.6mm board thickness, the finished board thickness ranges         = 1.44mm(T-1.6×10%) to 1.76mm(T+1.6×10%)       </div>',
    Patterns: " ",
  },
  {
    Features: `<div class="ColumnText">  Thickness Tolerance ( Thickness<1.0mm) </div>`,
    Capability: '<div class="ColumnText">± 0.1mm</div>',
    Notes:
      '<div class="ColumnText">         e.g. For the 0.8mm board thickness, the finished board thickness ranges         = 0.7mm(T-0.1) to 0.9mm(T+0.1).       </div>',
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Finished Outer Layer Copper</div>',
    Capability: '<div class="ColumnText">1 oz/2 oz (35um/70um)</div>',
    Notes:
      '<div class="ColumnText">         Finished copper weight of outer layer is 1oz or 2oz.       </div>',
    Patterns: '<img src="assets/img/outlyr.jpg"alt="jdjbjds" />',
  },
  {
    Features: '<div class="ColumnText">Finished Inner Layer Copper</div>',
    Capability: '<div class="ColumnText">0.5 oz (17.5um)</div>',
    Notes:
      '<div class="ColumnText">         Finished copper weight of inner layer is 0.5oz by default. 2 oz inner         copper weight is available for 4-layer PCBs with 1.6mm thickness/         stackup/2oz outer copper weight.       </div>',
    Patterns: '<img src="assets/img/finishlyr.jpg"alt="dfwd" />',
  },
];

const drillholeData = [
  {
    Features: '<div class="ColumnText">Drill Hole Size</div>',
    Capability: '<div class="ColumnText">0.15mm - 6.30mm</div>',
    Notes:
      "\n      <ColumnText>\n        1 & 2 Layer PCB: 0.3 - 6.3mm <br />\n        Multi-Layer PCB: 0.15 - 6.3mm (0.15mm more costly)\n      </ColumnText>",
    Patterns:
      '<img src="assets/img/drillTable/drillsizze.jpg"alt="drillsize" />',
  },
  {
    Features: '<div class="ColumnText">Drill Hole Size Tolerance</div>',
    Capability: '<div class="ColumnText">+0.13/-0.08mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        e.g. for the 0.6mm hole size, the finished hole size between 0.52mm to\n        0.73mm is acceptable.\n      </div>',
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Blind/Buried Vias</div>',
    Capability: '<div class="ColumnText">Don\'t Support</div>',
    Notes:
      '<div class="ColumnText">\n        Currently we don\'t support Blind/Buried Vias, only make through holes.\n      </div>',
    Patterns: '<img src="assets/img/drillTable/blind.jpg"alt="blind" />',
  },
  {
    Features: '<div class="ColumnText">in. Via hole size/diameter</div>',
    Capability: '<div class="ColumnText">0.15mm / 0.25mm</div>',
    Notes:
      "\n      <ColumnText>\n        - 1 & 2 Layer PCB: 0.3mm(hole size) / 0.5mm(diameter)\n        <br />\n        - Multi-Layer PCB: 0.15mm(Via hole size) / 0.25mm(Via diameter)\n        <br />\n        - Via diameter should be 0.1mm(0.15mm preferred) larger than Via hole\n        size\n        <br />- Preferred Min. Via hole size: 0.2mm\n      </ColumnText>\n    ",
    Patterns:
      '<img src="assets/img/drillTable/MinVia.png"height="130""alt="via" />',
  },
  {
    Features: '<div class="ColumnText">PTH hole Size</div>',
    Capability: '<div class="ColumnText">0.20mm - 6.35mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        The annular ring size will be enlarged to 0.15mm in production.\n      </div>\n    ',
    Patterns: '<img src="assets/img/drillTable/PTH.jpg"alt="pth" />',
  },
  {
    Features: '<div class="ColumnText">Pad Size</div>',
    Capability: '<div class="ColumnText">Minimum 1.0mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        The pad size will be enlarged by 0.5mm than the hole size. The minimum\n        size of annular ring around plated through hole pads is 0.25mm. If the\n        recommended sizes are not respected then the pad will not be produced\n        properly\n      </div>\n    ',
    Patterns:
      '<img src="assets/img/drillTable/holeSize.png"alt="hole size" height="130""/>',
  },
  {
    Features: '<div class="ColumnText">Min. Non-plated holes</div>',
    Capability: '<div class="ColumnText">0.50mm</div>',
    Notes:
      '<div class="ColumnText">\n        The minimum NPTH dimension is 0.50mm, Please add the NPTH in the\n        mechanical layer or keep out layer.\n      </div>',
    Patterns: '<img src="assets/img/drillTable/nonHoles.jpg"alt="nonplated" />',
  },
  {
    Features: '<div class="ColumnText">NPTH</div>',
    Capability: '<div class="ColumnText">0.2mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        We make NPTH via dry sealing film process, if customer would like a NPTH\n        but around with pad/copper, our engineer will dig out around pad/copper\n        about 0.2mm-0.25mm, otherwise the metal potion will be flowed into the\n        hole and it becomes a PTH. (there will be no copper dig out optimization\n        for single board).\n      </div>',
    Patterns: '<img src="assets/img/drillTable/npth.png"alt="npthh" />',
  },
  {
    Features: '<div class="ColumnText">Min. Plated Slots</div>',
    Capability: '<div class="ColumnText">0.5mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        The minimum plated slot width is 0.5mm, which is drawn with a pad.\n      </div>',
    Patterns:
      '<img src="assets/img/drillTable/minplated.png"alt="minplated" />',
  },
  {
    Features: '<div class="ColumnText">Min. Non-Plated Slots</div>',
    Capability: '<div class="ColumnText">1.0mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        The minimum Non-Plated Slot Width is 1.0mm, please draw the slot outline\n        in the mechanical layer(GML or GKO)\n      </div>',
    Patterns:
      '<img src="assets/img/drillTable/nonplatedmin.jpg"alt="nonplatedslotes" />',
  },
  {
    Features: '<div class="ColumnText">Hole size Tolerance (Plated)</div>',
    Capability: '<div class="ColumnText">+0.13mm/-0.08mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        e.g. for the 1.00mm Plated hole, the finished hole size between 0.92mm\n        to 1.13mm is acceptable.\n      </div>',
    Patterns:
      '<img src="assets/img/drillTable/holeSizeTol.jpg"alt="holetol" />',
  },
  {
    Features: '<div class="ColumnText">Hole size Tolerance (Non-Plated)</div>',
    Capability: '<div class="ColumnText">±0.2mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        e.g. for the 1.00mm Non-Plated hole, the finished hole size between\n        0.80mm to 1.20mm is acceptable.\n      </div>',
    Patterns:
      '<img src="assets/img/drillTable/holeSizeTolNon.png"alt="holesizeNon" />',
  },
  {
    Features: '<div class="ColumnText">Rectangle Hole/Slot</div>',
    Capability: '<div class="ColumnText">Don’t support</div>',
    Notes:
      '\n      <div class="ColumnText">\n        Rectangle/Square Slots, we don\'t make rectangular or square plated\n        holes,only make oval or round plated slots. For non-plated slots,\n        rounded corner-rectangular or square slots are supported. The\n        recommended minimum size is 3x3mm.\n      </div>',
    Patterns:
      '<img src="assets/img/drillTable/holeSlot.png"height="130""alt="holedrill" />',
  },
];

const minClearanceData = [
  {
    Features:
      '<div class="ColumnText">Hole to hole clearance(Different nets)</div>',
    Capability: '<div class="ColumnText">0.5mm</div>',
    Patterns: '<img src="assets/img/clearance/1.jpg"alt="clearancehole" />',
  },
  {
    Features: '<div class="ColumnText">Via to Via clearance(Same nets)</div>',
    Capability: '<div class="ColumnText">0.254mm</div>',
    Patterns: '<img src="assets/img/clearance/2.jpg"alt="clearance2" />',
  },
  {
    Features:
      '<div class="ColumnText">\n        Pad to Pad clearance(Pad without hole, Different nets)\n      </div>',
    Capability: '<div class="ColumnText">0.127mm</div>',
    Patterns: '<img src="assets/img/clearance/3.jpg"alt="clearance3" />',
  },
  {
    Features:
      '<div class="ColumnText">\n        Pad to Pad clearance(Pad with hole, Different nets)\n      </div>',
    Capability: '<div class="ColumnText">0.5mm</div>',
    Patterns: '<img src="assets/img/clearance/4.jpg"alt="cclearance4" />',
  },
  {
    Features: '<div class="ColumnText">Via to Track</div>',
    Capability: '<div class="ColumnText">0.254mm</div>',
    Patterns: '<img src="assets/img/clearance/5.jpg"alt="cclearance5" />',
  },
  {
    Features: '<div class="ColumnText">PTH to Track</div>',
    Capability: '<div class="ColumnText">0.33mm</div>',
    Patterns: '<img src="assets/img/clearance/5.jpg"alt="cclearance5" />',
  },
  {
    Features: '<div class="ColumnText">NPTH to Track</div>',
    Capability: '<div class="ColumnText">0.254mm</div>',
    Patterns: '<img src="assets/img/clearance/5.jpg"alt="cclearance5" />',
  },
  {
    Features: '<div class="ColumnText">Pad to Track</div>',
    Capability: '<div class="ColumnText">0.2mm</div>',
    Patterns: '<img src="assets/img/clearance/6.jpg"alt="clearance 6" />',
  },
];

const LegendData = [
  {
    Features: '<div class="ColumnText">Minimum Line Width</div>',
    Capability: '<div class="ColumnText">6 mil (0.153mm)</div>',
    Notes:
      '  <div class="ColumnText">         Characters width less than 6mil(0.153mm) will be unidentifiable.       </div>     ',
    Patterns: '<img src="assets/img/clearance/legend1.jpg"alt="legend" />',
  },
  {
    Features: '<div class="ColumnText">Minimum text height</div>',
    Capability: '<div class="ColumnText">40 mil (1.0mm)</div>',
    Notes:
      '<div class="ColumnText">         Characters width less than 40mil(1.0mm) will be unidentifiable.       </div>',
    Patterns: '<img src="assets/img/clearance/legend2.png"alt="legend" />',
  },
  {
    Features: '<div class="ColumnText">Character width to height ratio</div>',
    Capability: '<div class="ColumnText">1:6</div>',
    Notes:
      '<div class="ColumnText">The preferred ratio of width to height is 1:6.</div>',
    Patterns: '<img src="assets/img/clearance/legend3.png"alt="legend" />',
  },
  {
    Features:
      '<div class="ColumnText">Hollow-Carved Character width to height ratio</div>',
    Capability: '<div class="ColumnText">1:6</div>',
    Notes:
      '<div class="ColumnText">The preferred ratio of width to height is 1:6.</div>',
    Patterns: "",
  },
  {
    Features: '<div class="ColumnText">Pad To Silkscreen</div>',
    Capability: '<div class="ColumnText">0.15mm</div>',
    Notes:
      '<div class="ColumnText">The preferred ratio of width to height is 1:6</div>',
    Patterns: '<img src="assets/img/clearance/legend5.jpg"alt="legend" />',
  },
];
const solderMaskData = [
  {
    Features: '<div class="ColumnText">Solder mask opening / expansion </div>',
    Capability: '<div class="ColumnText">0.05mm</div>',
    Notes:
      ' <div class="ColumnText">\n        The solder mask should have a minimum of a 0.05 mm "growth/mask opening"\n        around the pad to allow for any mis-registration.\n      </div>\n    ',
    Patterns: '<img src="assets/img/clearance/sol1.jpg"alt="solmask" />',
  },
  {
    Features: '<div class="ColumnText">Solder bridge</div>',
    Capability: `<div class="ColumnText">\n        0.2mm(green) <br /> 0.254mm(other colors)\n      </div`,
    Notes:
      '<div class="ColumnText">\n        To have solder mask bridge, the spacing between copper pads edge must be\n        0.2mm (8mils) or more.\n      </div>',
    Patterns: '<img src="assets/img/clearance/sol2.jpg"alt="solmask2" />',
  },
  {
    Features: '<div class="ColumnText">Via Covering</div>',
    Capability: ` <div class="ColumnText">\n        Epoxy Filled & Capped\n        <br />\n        Copper paste Filled&Capped\n      </div>\n    `,
    Notes:
      '  <div class="ColumnText">\n        Via hole size: 0.2 to 0.5 mm Annular ring: 0.05 mm minimum, 0.075 mm\n        preferred The via-in-pad must be placed more than 1.0 mm = regular PTHs\n        or NPTHs\n      </div>',
    Patterns:
      '<img src="assets/img/clearance/sol3.png"height="100"alt="solmask2" />',
  },
  {
    Features: '<div class="ColumnText">Solder mask color</div>',
    Capability:
      '<div class="ColumnText">green, red, yellow, blue, white, and black.</div>',
    Notes:
      ' <div class="ColumnText">\n        We use LPI (Liquid Photo Imageable) solder mask. It is the most common\n        type of mask used today.\n      </div>',
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Solder mask Dielectric Constant</div>',
    Capability: '<div class="ColumnText">3.8</div>',
    Notes: " ",
    Patterns: " ",
  },
  {
    Features: '<div class="ColumnText">Solder mask ink thickness</div>',
    Capability: '<div class="ColumnText">10-15UM</div>',
    Notes: " ",
    Patterns: " ",
  },
];

const BoardOutlines = [
  {
    Features: '<div class="ColumnText">Trace to Outline</div>',
    Capability: '<div class="ColumnText">0.2mm</div>',
    Notes:
      ' <div class="ColumnText">         Ships as individual board(Rounting):Trace to Outline≥0.2mm       </div>',
    Patterns:
      ' <img src="assets/img/clearance/boardOutline1.jpg"alt="legend" />',
  },
  {
    Features: '<div class="ColumnText">Trace to V-cut line</div>',
    Capability: '<div class="ColumnText">0.4mm</div>',
    Notes:
      '       <div class="ColumnText">         Ship as panel with V-scoring: Trace to V-cut line≥0.4mm       </div>',
    Patterns:
      ' <img src="assets/img/clearance/boardOutline2.jpg"alt="legend" />',
  },
];

const PanaliZationData = [
  {
    Features: '<div class="ColumnText">Penelization without space</div>',
    Capability: '<div class="ColumnText">0mm</div>',
    Notes: '<div class="ColumnText">The space between boards is 0mm.</div>',
    Patterns:
      '<img src="assets/img/clearance/panelization1.jpg"alt="penalization" />',
  },
  {
    Features: '<div class="ColumnText">Penelization with space</div>',
    Capability: '<div class="ColumnText">2mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        Make sure the space between boards should be ≥2mm,otherwise it will be\n        hard to process for rounding.\n      </div>',
    Patterns:
      '<img src="assets/img/clearance/panelization2.jpg"alt="penalization" />',
  },
  {
    Features: '<div class="ColumnText">Penelized Round Board</div>',
    Capability: '<div class="ColumnText">≥20mmx20mm</div>',
    Notes:
      '\n      <div class="ColumnText">\n        The single round board size should be≥20mmx20mm.Panelize with stamp\n        holes and add tooling strips on four board edges\n      </div>',
    Patterns:
      '<img src="assets/img/clearance/panelization3.jpg"alt="penalization" />',
  },
  {
    Features: '<div class="ColumnText">Panelized castellated holes board</div>',
    Capability:
      '<div class="ColumnText">\n        Panelize with stamp holes and add tooling strips on four board edges\n      </div>',
    Notes: `<div class="ColumnText">\n        The distance between castellated hole and board corner should be larger\n        than 2mm.\n        <br />\n        Recommended diameter of stamp hole is 0.5mm-0.8mm;\n        <br />\n        Recommended distance between the two stamp holes is 0.2-0.3mm\n      </div>`,
    Patterns: '<img src="assets/img/clearance/panelization4.png"alt="paele" />',
  },
  {
    Features: '<div class="ColumnText">Min. Width of Breakaway Tab</div>',
    Capability: '<div class="ColumnText">4mm</div>',
    Notes:
      '<div class="ColumnText">\n        The minimum width of breakaway tab is 4mm. For breakaway with\n        mouse-bites, the minimum width is 5mm.\n      </div>',
    Patterns: ' <img src="assets/img/clearance/penelization.jpg"alt="paele" />',
  },
  {
    Features: '<div class="ColumnText">Min. Edge Rails</div>',
    Capability: '<div class="ColumnText">3mm</div>',
    Notes:
      ' <div class="ColumnText">\n        If choosing panel by Microplacer, we will add 5mm edge rails on both\n        sides by default.\n      </div>',
    Patterns: '<img src="assets/img/clearance/panelization6.jpg"alt="paele" />',
  },
];

const pcbAssemblyData = [
  {
    Features: '<div class="ColumnText">Assembly Types</div>',
    Economic:
      '<div class="ColumnText">Single sided placement (SMT/Thru-hole)</div>',
    Standard:
      '<div class="ColumnText">Single & double sided placement (SMT/Thru-hole)</div>',
  },
  {
    Features: '<div class="ColumnText">PCB Layer</div>',
    Economic: '<div class="ColumnText">2,4,6 layers</div>',
    Standard: '<div class="ColumnText">1-20 layers</div>',
  },
  {
    Features: '<div class="ColumnText">Thickness</div>',
    Economic: '<div class="ColumnText">0.8mm - 1.6mm</div>',
    Standard: '<div class="ColumnText">0.4mm - 2.0mm</div>',
  },
  {
    Features: '<div class="ColumnText">Dimension</div>',
    Economic:
      `<div class="ColumnText">\n        Single PCB Size:\n        <br />\n        10x10mm - 570x470mm\n        <br />\n        PCB Panel Size:\n        <br />\n        10x10mm - 250x250mm\n      </div>`,
    Standard:
      `\n <div class="ColumnText">\n        Single PCB Size:\n        <br />\n        70x70mm - 510x460mm\n        <br />\n        PCB Panel Size:\n        <br />\n        70x70mm - 250x250mm\n      </div>`,
  },
  {
    Features: '<div class="ColumnText">Order Volume</div>',
    Economic: '<div class="ColumnText">2-50 pcs</div>',
    Standard: '<div class="ColumnText">2-80000 pcs</div>',
  },
  {
    Features: '<div class="ColumnText">Surface Finish</div>',
    Economic: '<div class="ColumnText">Limited by specific options</div>',
    Standard: '<div class="ColumnText">No limit</div>',
  },
  {
    Features: '<div class="ColumnText">PCB Color</div>',
    Economic: '<div class="ColumnText">Limited by specific options</div>',
    Standard: '<div class="ColumnText">No limit</div>',
  },
  {
    Features: '<div class="ColumnText">Delivery Format</div>',
    Economic:
      '<div class="ColumnText">Single PCB, Panel with mouse bites</div>',
    Standard:
      '<div class="ColumnText">\n        Single PCB, Panel with mouse bites, Panel with V-cut\n      </div>',
  },
  {
    Features: '<div class="ColumnText">Layer Stackup</div>',
    Economic:
      '<div class="ColumnText">\n        Standard stack-up only, special stack-up is not supported{" "}\n      </div>',
    Standard: '<div class="ColumnText">All stack-up</div>',
  },
  {
    Features: '<div class="ColumnText">Edge Rails </div>',
    Economic: '<div class="ColumnText">Not necessary</div>',
    Standard: '<div class="ColumnText">Necessary</div>',
  },
  {
    Features: '<div class="ColumnText">Fiducials </div>',
    Economic: '<div class="ColumnText">Not necessary</div>',
    Standard: '<div class="ColumnText">Necessary</div>',
  },
  {
    Features: '<div class="ColumnText">Minimum Package </div>',
    Economic: '<div class="ColumnText">0402</div>',
    Standard: '<div class="ColumnText">0201</div>',
  },
  {
    Features: '<div class="ColumnText">Minimum IC Pin Spacing </div>',
    Economic: '<div class="ColumnText">0.4mm</div>',
    Standard: '<div class="ColumnText">0.35mm</div>',
  },
  {
    Features: '<div class="ColumnText">Minimum BGA Spacing</div>',
    Economic: '<div class="ColumnText">0.5mm</div>',
    Standard: '<div class="ColumnText">0.5mm</div>',
  },
  {
    Features: '<div class="ColumnText">Reflow temperature </div>',
    Economic: '<div class="ColumnText">255+/-5 °C （not adjustable)</div>',
    Standard: '<div class="ColumnText">240+/-5 °C</div>',
  },
  {
    Features: '<div class="ColumnText">SPI</div>',
    Economic: '<div class="ColumnText">No</div>',
    Standard: '<div class="ColumnText">Yes</div>',
  },
  {
    Features: '<div class="ColumnText">AOI</div>',
    Economic: '<div class="ColumnText">Yes</div>',
    Standard: '<div class="ColumnText">Yes</div>',
  },
  {
    Features: '<div class="ColumnText">Visual Inspection </div>',
    Economic: '<div class="ColumnText">Yes</div>',
    Standard: '<div class="ColumnText">Yes</div>',
  },
  {
    Features: '<div class="ColumnText">X-ray Inspection</div>',
    Economic: '<div class="ColumnText">Yes</div>',
    Standard: '<div class="ColumnText">Yes</div>',
  },
  {
    Features: '<div class="ColumnText">Build time    </div>',
    Economic: '<div class="ColumnText">1-3 days</div>',
    Standard: '<div class="ColumnText">≥ 4 days</div>',
  },
];
function injectDataIntoTable(jsonData, classname) {
  let table = `<table class="Data-table" cellspacing="0"><thead><tr>`;

  // Create table headers
  for (const key in jsonData[0]) {
    table += `<th><div class="TableHeaderText">${key}</div></th>`;
  }
  table += "</tr></thead><tbody>";

  // Create table body
  jsonData.forEach((row) => {
    table += "<tr>";
    for (const key in row) {
      table += `<td>${row[key]}</td>`;
    }
    table += "</tr>";
  });
  table += "</tbody></table>";

  let container = document.querySelector(classname);
  container.innerHTML = table;
}

injectDataIntoTable(pcbspecData, "#pcb-Specifications");
injectDataIntoTable(drillholeData, "#drill-hole-size");
injectDataIntoTable(minClearanceData, "#min-clearance");
injectDataIntoTable(solderMaskData, "#solder-mask");
injectDataIntoTable(LegendData, "#legend");
injectDataIntoTable(BoardOutlines, "#board-outline");
injectDataIntoTable(PanaliZationData, "#panalization");
injectDataIntoTable(pcbAssemblyData, "#pcb-assembly-capability");
