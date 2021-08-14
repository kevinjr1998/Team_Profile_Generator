const Employee = require("../classes/Employee");

describe('Create new employee', () => {
    it('Create a new employee using constructors name, email and id', () => {
      const employee = new Employee(`Kevin`, 23, `Kevin@ryner.com`);

      expect(employee.empName).toEqual("Kevin");
      expect(employee.empID).toEqual(23);
      expect(employee.email).toEqual("Kevin@ryner.com");
    });

    it('tests the methods on the created class to see it they return values expected', () => {
        const employee = new Employee(`Kevin`, 23, `Kevin@ryner.com`);
  
        expect(employee.getName()).toEqual("Kevin");
        expect(employee.getId()).toEqual(23);
        expect(employee.getEmail()).toEqual("Kevin@ryner.com");
        expect(employee.getRole()).toEqual("Employee");
      });

})