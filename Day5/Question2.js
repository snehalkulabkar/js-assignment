class user{
    constructor(name, age, email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins = 0;
        this.coureses = [];
    }

    static greet(){
        console.log("Hello Profile");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    addCoins(){
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }
    removeCoins(){
        console.log(`${this.name} has ${this.coins} remove coins`);
        return this;
    }
    getDetail(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends user{
    constructor(name, age, email, role){
        super(name, age, email)
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email;
        })
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.coureses.push(course);
        console.log(user);
    }
}
let user1 = new user('Snehal',19,'snehalkulabkar@gmail.com')
let user2 = new user('Akshada',19,'akshadaj@gmail.com')
let mod = new Moderator('sahil',20, 'sk@gmail.com','Moderator');
let admin = new Admin('pradeep',20,'pradeepk@gmail.com');
let users = [user1, user2, mod, admin]
users.forEach(element => {
    console.log(element);
});

user.greet();
admin.addCourse(user1, 'Javascript');
admin.addCourse(user1, 'Java');

user1.login()
user1.logout()
user1.addCoins();
user1.addCoins();
user1.removeCoins(); 
