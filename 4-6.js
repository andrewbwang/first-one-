var employeeList = new Array();       // unspecified length gives initially 0 elements
   
function addEmployee () 
{
    var newIndex = employeeList.length; 
    employeeList[newIndex] = new Object;
    employeeList[newIndex].name = prompt('What is the new employee\'s name?');
    employeeList[newIndex].salary = Number(prompt('What is their starting salary?'));
    employeeList[newIndex].age = Number(prompt('What is their age?'));
}
   
function displayEmployees () 
{
   
    var message = '';
    for (var i = 0 ; i < employeeList.length ; i++) 
    {
        message += employeeList[i].name + ', salary: ' 
                   + String(employeeList[i].salary) +
                   ', age: ' + String(employeeList[i].age) +
                   '. \n';
    }
    if (message == '')
        message = 'There are no employees to display!';
    alert(message);
    
}
