class Student {
    constructor() {
        var studentname;
    }
    setName(name) {
        this.name = name;
    }

    getName(name) {
        return this.name
    }
}

s = new Student();
s.setName("deepthi");
console.log(s.getName());