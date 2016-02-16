function Employee(name, age, isMale, daySalary){

    Person.call(this, name, age, isMale);

    var _daySalary = daySalary;

    this.getSalary = function(){
        return _daySalary;
    }

    this.setSalary = function(salary){
        _daySalary = salary;
    }
}

Employee.prototype.calculateOvertime = function(hours){
    if(hours > 0 && this.getAge() > 18){
       return (this.getSalary() / 8) * 1.5;
    }
    if(this.getAge() < 18){
        return 0;
    }
}

Employee.prototype.showEmployeeInfo = function(){
    var personInfo = Person.prototype.showPersonInfo.call(this);
    return personInfo + ', salary: ' + this.getSalary();
}