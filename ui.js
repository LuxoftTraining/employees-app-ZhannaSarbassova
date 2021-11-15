function showEmployees(employees) { 
    clearEmployeesPlaceholder(); 
    const ul = document.createElement("ul"); 
     
    for (let employee of employees) { 
      const li = document.createElement("li"); 
      ul.appendChild(li); 
     
      li.innerHTML = employee.name+" "+employee.surname; 
     
    } 
    document.getElementById(PLACEHOLDER).appendChild(ul); 
    } 