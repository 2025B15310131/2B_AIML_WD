class student
 {
    static Name; //static variable
    constructor(Name, rollno)
    {
         this.Name = Name;    
        this.rollno = rollno;
        console.log("Name: " + this.Name + ", Roll No: " + this.rollno);
    }
    display(){
        console.log(this.Name);
        console.log(this.rollno);
    }
 hello()
{
    console.log("hello " + this.Name);
}
};

    let s = new student("rishank", 123);
    let s1 = new student("sanu", 456);
    s.display();
    s.hello();