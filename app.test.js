// define test with
// it()
// test()

// expect().toBe() => to compare primitive values or to check referential identity of object instances. dont use this for  floating-point numbers

const sum = require("./app");

it("should add 1+2 to equal 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

// expect().toEqual() => to compare recursively all properties of object or an array

test("check object", () => {
  const obj = {};
  expect(obj).toEqual({});
});

// describe() => creates a block that groups together several related tests
// toBeFalsy()=> you use it when  don't care what a value is and you want to ensure a value is false in a boolean context
// toBeTruthy()=> you use it when  don't care what a value is and you want to ensure a value is true in a boolean context


const typeObj = {
  isTrue: true,
  isFalse: false,
  isNull: null,
  isUndefined:undefined
};

describe("my beverage", () => {
  test("should be false", () => {
    expect(typeObj.isTrue).toBeTruthy();
  });

  test("should be false", () => {
    expect(typeObj.isFalse).toBeFalsy();
  });

  //   Note: you can add .not after expect()for check everything is not for example
  test("shouldn't be true", () => {
    expect(typeObj.isNull).not.toBeTruthy();
  });

  // toBeNull()=> So use it when you want to check that something is null.
  test("should be null", () => {
    expect(typeObj.isNull).toBeNull();
  });
  //  toBeUndefined()=> it use to check that a variable is undefined.
   test("should be undefined", () => {
     expect(typeObj.isUndefined).toBeUndefined();
   });
});

