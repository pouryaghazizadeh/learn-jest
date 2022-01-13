
// define test with 
// it()
// test()

// expect().toBe() => to compare primitive values or to check referential identity of object instances. dont use this for  floating-point numbers
// expect().toEqual() =>



const sum = require ("./app")
it("should add 1+2 to equal 3",()=>{
    const result = sum(1,2 )
    expect(result).toBe(3)
}) 