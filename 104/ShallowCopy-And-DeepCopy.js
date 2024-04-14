// Shallow Copy And Deep Copy

/* -- Shallow Copy
 * Spread Syntax
 * Array.prototype.concat()
 * Array.prototype.slice()
 * Array.from()
 * Object.assign()
 * Object.create()
 */

/*
* -- Deep Copy
* JSON.stringify() then JSON.parse()
*/

const friend_list = [
    "Younes",
    {
      friends: [
        "Iman",
        "Sajjad",
        "Hamed"
      ]
    }
  ]
  
   
  
  
  // const friend_list_copy = [...friend_list];
  const friend_list_copy = Array.from(friend_list);
  const friend_list_copy2 = JSON.parse(JSON.stringify(friend_list));
  
  friend_list_copy[0] = "Iman"
  friend_list_copy[1].friends = ["Mohammad", "Mehdi", "Hasan"]
  
  friend_list_copy2[0] = "Hasan";
  friend_list_copy2[1].friends = ["Ahmad"]
  
  console.log('Original:',friend_list);
  // Deep Copy
  console.log('Deep Copy:', friend_list_copy2)