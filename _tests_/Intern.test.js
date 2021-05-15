const Intern = require("./Intern");

describe("Intern", () => {
  describe("this is the base constructor class", () => {
    it("should output name, email and email with valid input", () => {
      const name = "nick";
      const id = 1234;
      const email = "nick@yahoo.com";
      const school = "DU";

      const obj = new Employee(name, id, email, school);

      expect("name" in obj).toEqual(name);
      expect("id" in obj).toEqual(id);
      expect("email" in obj).toEqual(email);
      expect("school" in obj).toEqual(school);
    });

    it("should throw error if invalid input", () => {});
    it("should throw an error if not a string", () => {});
    it("should throw an error if is an empty string", () => {});
  });
});
