const fs = require("fs");

function templateStart(){
    fs.appendFile("./dist/index.html", 
   `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header class="d-flex justify-content-center bg-primary"> 
            <h1 > My Team </h1> 
        </header>`,
        function(err) {
            if(err) console.log('error', err);
        }
    )}

function templateManager(manager){
    fs.appendFile("./dist/index.html",
    `
        <div class="d-flex justify-content-center container manager"> 
            <div class="card m-2 shadow-sm p-3 mb-5 bg-white rounded" style="width: 36rem;">
                <div class= "bg-primary rounded">
                    <h5 class="card-title"> Name: ${manager.getName()}</h5>
                   <h6 class="card-subtitle mb-2 text-muted"> Role: ${manager.getRole()} </h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${manager.getId()} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()} </li>
                </ul>
        </div>
    </div>

<div class="container d-flex justify-content-center workers">
        <div class="row">
`, 
    function(err) {
      if(err) console.log('error', err);
    })
}

function templateEngineer(engineer){
    fs.appendFile("./dist/index.html", 
    `   
        <div class="col">
            <div class="card m-2 shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class = "bg-primary rounded">
                    <h5 class="card-title"> Name: ${engineer.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"> Role: ${engineer.getRole()} </h6>
                </div>   
                    <ul class="list-group list-group-flush">

                        <li class="list-group-item"> ID: ${engineer.getId()} </li>
                        <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
                        <li class="list-group-item"> GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                    </ul>
            </div>
        </div>`,
    function(err) {
        if(err) console.log('error', err);
    })
}

function templateIntern(intern){
    fs.appendFile("./dist/index.html", 
    `   <div class="col">
            <div class="card m-2 shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class= "bg-primary rounded">
                    <h5 class="card-title "> Name: ${intern.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"> Role: ${intern.getRole()} </h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${intern.getId()} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
                    <li class="list-group-item"> School: ${intern.getSchool()} </li>
                </ul>
            </div>
        </div>`,
    function(err) {
        if(err) console.log('error', err);
    })
}

function templateEnd(){
    fs.appendFile("./dist/index.html",
    `   </div>
    </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
 </body>
</html>`,
    function(err) {
        if(err) console.log('error', err);
    }
    )}

module.exports = {
    templateStart,
    templateManager,
    templateEngineer,
    templateEnd,
    templateIntern,

};
