const Manager = require("../classes/manager");

describe('Create new manager', () => {
    it('Create a new manager using constructors name, email, id and office number', () => {
      const manager = new Manager(`Matt`, 17, `Matt@fox.com`, 2);

      expect(manager.empName).toEqual("Matt");
      expect(manager.empID).toEqual(17);
      expect(manager.email).toEqual("Matt@fox.com");
      expect(manager.officeNumber).toEqual(2);

    });

    it('tests the methods on the manager class to see it they return values expected', () => {
        const manager = new Manager(`Matt`, 17, `Matt@fox.com`, 2);
  
        expect(manager.getName()).toEqual("Matt");
        expect(manager.getId()).toEqual(17);
        expect(manager.getEmail()).toEqual("Matt@fox.com");
        expect(manager.getRole()).toEqual("Manager");
      });

})