const Intern = require("../classes/intern");

describe('Create new intern using constructors', () => {
    it('Create a new engineer using constructors name, email, id and school', () => {
      const intern = new Intern(`Simon`, 11, `simon@lake.com`, "King Edwards School");

      expect(intern.empName).toEqual("Simon");
      expect(intern.empID).toEqual(11);
      expect(intern.email).toEqual("simon@lake.com");
      expect(intern.school).toEqual("King Edwards School");

    });

    it('tests the methods on the intern class to see it they return values expected', () => {
        const intern = new Intern(`Simon`, 11, `simon@lake.com`, "King Edwards School");
  
        expect(intern.getName()).toEqual("Simon");
        expect(intern.getId()).toEqual(11);
        expect(intern.getEmail()).toEqual("simon@lake.com");
        expect(intern.getRole()).toEqual("Intern");
        expect(intern.getSchool()).toEqual("King Edwards School");
      });

})