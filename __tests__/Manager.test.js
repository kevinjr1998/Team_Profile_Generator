const manager = require("../classes/manager");

describe('Create new manager', () => {
    it('Create a new manager using constructors name, email, id and office number', () => {
      const manager = new Manager(`Kevin`, 23, `Kevin@ryner.com`, 2);

      expect(employee.empName).toEqual("Matt");
      expect(employee.empID).toEqual(17);
      expect(employee.email).toEqual("Matt@fox.com");
    });

    it('tests the methods on the created class to see it they return values expected', () => {
        const employee = new Employee(`Kevin`, 23, `Kevin@ryner.com`);
  
        expect(employee.getName()).toEqual("Kevin");
        expect(employee.getId()).toEqual(23);
        expect(employee.getEmail()).toEqual("Kevin@ryner.com");
        expect(employee.getRole()).toEqual("Employee");
      });

})