function showInfo() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var fullName = firstName + " " + lastName;
        
        
        
        document.getElementById("result").innerText =` El nombre completo es: ${fullName} `
    }
