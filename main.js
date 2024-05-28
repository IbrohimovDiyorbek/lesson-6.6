let btnCreater = document.querySelector(".btnCreater");

btnCreater.addEventListener('click', function name() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => createUser(users[Math.floor(Math.random() * users.length)]))
        .catch(err => console.error("fetch errore: " , err));
    function createUser(users) {
        let nameUser = document.querySelector(".name");
        let lastUser = document.querySelector(".lastN");
        let emailUser = document.querySelector(".email");
        let comopanyUser = document.querySelector(".company");
        nameUser.innerHTML = users.name;
        lastUser.innerHTML = users.username;
        emailUser.innerHTML = users.email;
        comopanyUser.innerHTML = users.company.name;
    }
})