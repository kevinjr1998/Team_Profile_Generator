const Engineer = require("../classes/engineer");

describe('Create new engineer', () => {
    it('Create a new engineer using constructors name, email, id and gitHub username', () => {
      const engineer = new Engineer(`Luke`, 39, `luke@smith.com`, "LukeSmith91");

      expect(engineer.empName).toEqual("Luke");
      expect(engineer.empID).toEqual(39);
      expect(engineer.email).toEqual("luke@smith.com");
      expect(engineer.gitHub).toEqual("LukeSmith91");

    });

    it('tests the methods on the engineer class to see it they return values expected', () => {
        const engineer = new Engineer(`Luke`, 39, `luke@smith.com`, "LukeSmith91");
  
        expect(engineer.getName()).toEqual("Luke");
        expect(engineer.getId()).toEqual(39);
        expect(engineer.getEmail()).toEqual("luke@smith.com");
        expect(engineer.getRole()).toEqual("Engineer");
        expect(engineer.getGitHub()).toEqual("LukeSmith91");
      });

})