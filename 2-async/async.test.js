const fetchData = require("./async");
// if you want write test for async function you must in test file make async test like this
it("should return correct todo",async  () => { 
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
