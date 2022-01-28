let animal = ["cat", "dog", "wolf", "tiger"];

beforeEach(() => {
  animal = ["cat", "dog", "wolf", "tiger"];
});
afterEach(()=>{
    
})
afterAll(()=>{

})
beforeAll(()=>{

})
describe("animals array", () => {
  it("should add animal to end", () => {
    animal.push("bear");
    expect(animal[animal.length - 1]).toBe("bear");
  });
  it("add animal to begin array", () => {
    animal.unshift("monkey");
    expect(animal[0]).toBe("monkey");
  });
  it("should have initial length 4", () => {
    expect(animal.length).toBe(4);
  });
});
