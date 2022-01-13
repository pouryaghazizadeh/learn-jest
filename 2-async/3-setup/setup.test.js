let animals = ["bear", "polarBear", "wolfe"];
beforeAll(()=>{
     
})
beforeEach(() => {
 animals = ["bear", "polarBear", "wolfe"];
});
afterEach(() => {
      animals = ["bear", "polarBear", "wolfe"];
});
afterAll(() => {});
describe("animals array", () => {
  it("should add item to end of array", () => {
    animals.push("tiger");
    expect(animals[animals.length - 1]).toBe("tiger");
  });
  it("should add item to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 3",()=>{
      expect(animals.length).toBe(3)
  })
});
