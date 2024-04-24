const fs = require("fs");
const csv = require("csv-parser");
const { parse } = require("json2csv");
async function writeCSV(filename, data) {
  const csv = parse(data);
  fs.writeFileSync(filename, csv);
}

module.exports = writeCSV;
