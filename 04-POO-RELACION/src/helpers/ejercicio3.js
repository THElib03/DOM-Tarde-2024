/**
 * @author Martín Marín
 */

export function Empleado(name, age, position){
    this.name = name;
    this.age = age;
    this.position = position;

    //Shared method
    Empleado.prototype.getSalary = function(){
        cons = baseSalary = {
            'Junior': 1500,
            'Semisenior': 2000,
            'Senior': 3000,
            'Manager': 4000,
            'Supervisor': 4000,
            'Lead': 4500,
        }

        return baseSalary[this.position] || 0;
    }

    Empleado.prototype.info = function(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Position: ${this.position}
            Salary: ${this.getSalary()}
        `);
    }
}

export function Freelance(name, age, pricePerHour){
    //Builder from Empleado
    Empleado.call(this, name, age, 'Freelance');
    this.pricePerHour = pricePerHour;

    //Add prototype methods from Empleado
    Freelance.prototype = Object.create(Empleado.prototype);
    Freelance.prototype.constructor = Freelance;

    Freelance.prototype.getSalary = function(workedHours){
        return workedHours * this.pricePerHour;
    }
}

export class EmpleadoClass{
    constructor(name, age, position){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    info(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Position: ${this.position}
            Salary: ${this.getSalary()}
        `);
    }

    getSalary(){
        const baseSalary = {
            'Junior': 1500,
            'Semisenior': 2000,
            'Senior': 3000,
            'Manager': 4000,
            'Supervisor': 4000,
            'Lead': 4500,
        }

        return baseSalary[this.position] || 0;
    }

    hello(){
        console.log('hola');
    }
}

export class FreelanceClass extends EmpleadoClass{
    constructor(name, age, pricePerHour){
        super(name, age, 'Freelance');
        this.pricePerHour = pricePerHour;
    }

    info(workedHours){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Position: ${this.position}
            Salary: ${this.getSalary(workedHours)}
            Worked Hours: ${workedHours}
            twst: ${super.hello()}
        `);
    }

    getSalary(workedHours){
        return workedHours * this.pricePerHour;
    }
}