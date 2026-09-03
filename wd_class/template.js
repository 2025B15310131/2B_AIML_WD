 /*let firstname = "Rishank"
        let lastname = "Lakhera"
        console.log("my name is "+ firstname)
        console.log("my last name is "+ lastname)
        console.log(`my name is : ${firstname}  ${lastname}` )
      */
     /* let firstname = "rishank"
      let lastname ="lakhera"
      function fullname(first , last){
        return `${first}  ${last}`
      }
      let name=`hello  ${fullname(firstname, lastname)}`;
      console.log(name);
        // arrow function
      let hello = ()=> console.log("hello rishank")
      hello()
      let physics = (marks)=> {return `${marks}`}
      console.log(physics(45))
      */

      let pattern = (n)=> {
        for(let i =1; i<=n; i++){
            let str = "";
            for( let j = 1; j<=i; j++){
               str += "* ";
            }
             console.log(str);
        }
       
      };
      pattern(3);

      sum = (...value) => console.log(value);
      sum(10,20,20,40,50);


