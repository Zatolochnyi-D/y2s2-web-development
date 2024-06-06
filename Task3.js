// 4

// Create list on user's names in html document. By click on name display alert 'Hello, {name}'
class User {
    constructor(name)
    {
        this.name = name
    }
}

var users = [
    new User("Athos"),
    new User("Porthos"),
    new User("Aramis"),
]

var list = document.getElementById("0");
console.log(list);
users.forEach(user => {
    let li = document.createElement('li')
    li.textContent = user.name
    li.addEventListener("click", function (e) {
        alert(e.target.textContent)
    })
    list.append(li);
});
