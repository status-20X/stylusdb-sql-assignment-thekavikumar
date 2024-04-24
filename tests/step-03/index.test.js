const readCSV = require("../../src/csvReader");
const parseQuery = require("../../src/queryParser");

test("Read CSV File", async () => {
  const data = await readCSV("./student.csv");
  expect(data.length).toBeGreaterThan(0);
  expect(data.length).toBe(3);
  expect(data[0].name).toBe("John");
  expect(data[0].age).toBe("30"); //ignore the string type here, we will fix this later
});

test("Parse SQL Query", () => {
  const query = "SELECT id, name FROM student";
  const parsed = parseQuery(query);
  expect(parsed).toEqual({
    fields: ["id", "name"],
    table: "student",
    joinCondition: null,
    joinTable: null,
    whereClauses: [],
  });
});

// test("Parse Invalid SQL Query", () => {
//   const invalidQuery = "SELECT id name FROM student db";
//   const parsed = parseQuery(invalidQuery);
//   expect(parsed).toThrow("Invalid query format");
// });
