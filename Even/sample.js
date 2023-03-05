
// missing numbers finding 
// function test(nums) {
//     for (let n = 1; n<= nums.length + 1; n++) {
//       if (nums.indexOf(n) === -1) 
//         return n;
//     }
//   }
  
//   nums = [1,3,4,5,6,7,8]
//   console.log("nums = "+nums)
//   console.log("Missing number of the said array: "+test(nums));
//   nums = [2,3,4,5]
//   console.log("nums= "+nums)
//   console.log("Missing number of the said array: "+test(nums));
  


//Source:https://bit.ly/3hEZdCl
//Remove duplicates from a JavaScript array
// const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
// console.log([...new Set(nums)])


function ValidatePAN(Obj) {
    if (Obj.value != "") {
      ObjVal = Obj.value;
      var panPat = /^([a-zA-Z]{5})(d{4})([a-zA-Z]{1})$/;
      if (ObjVal.search(panPat) == -1) {
        alert("Invalid Pan No");
        Obj.focus();
        return false;
      }
    }
  }

//   <input type=”text” ID=”textPanNo” MaxLength=”10″ onblur=”ValidatePAN(this);”>