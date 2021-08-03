function createEmployee(config){
    var employee = { firstname:'Default firstname',lastname:'Default lastname',id:63211000,age:0,salary:20000,bonus:true};
    if(config.firstname){
        employee.firstname = config.firstname;
    }
    if(config.lastname){
        employee.lastname = config.lastname;
    }
    if(config.id){
        employee.id = config.id;
    }
    if(config.age){
        employee.age = config.age;
    }
    if(config.salary){
        employee.salary = config.salary;
    }
    if(config.bonus == true){
        employee.salary = config.salary * 2.5; 
    }else{
        employee.salary = config.salary
        employee.bonus == false
    }
    return employee;
}

var myemployee = createEmployee({ firstname:'Pearaya',lastname:'Bunyawirot',id:63211349,age:20,salary:20000,bonus:true});
console.log("myemployee",myemployee);