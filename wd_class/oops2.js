/*class Hello{
    faculty = "vikas"
    constructor(){
        console.log("hello kaise ho ")

        } 

        constructor(name){
            this.empname = name;
            console.log(name)
        }
    }
    let h = new Hello()
    let h1 = new Hello("rishank")
    console.log(h.faculty)
    

    class student{
        constructor(roll,name,year){
            this.rollnumber = roll;
            this.name = name;
            this.year = year;

            console.log(this.rollnumber)
            console.log(this.name)
            console.log(this.year)
        }
    }

        
        let s2 = new student(101,"vikas","2nd");
        



        class student 
        {
             static fname = "rishank"
             static Lname = "lakhera"
             static display(){
                console.log(this.fname)
                console.log(this.Lname)
            }
        }
         student.display();
         

        class student 
        {
             static fname = "rishank"
             static Lname = "lakhera"
              display(){
                console.log(student.fname)
                console.log(student.Lname)
            }
        }
          let s1 = new student();
          s1.display()
          */
         class hello{
            constructor(){
                console.log("hello rishank")
            }
         }
         class HI extends hello{

            constructor(){
                super()
                console.log(" kaise ho ")
            }
            
         }
         let h1  = new HI();

         class Hello {
            info(){
                console.log("info hello")
            }
         }
         class hiii extends Hello(){
            info(){
                super.info()
                console.log("info")
            }
         }
         let hi = new hiii();
         h1.info()
           

         
    
