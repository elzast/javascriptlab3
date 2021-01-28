"use strict";
// Declare a variable named submissions that is initialized to an array with the following

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "A date",
    passed: true,
  },
  {
    name: "Joe",
    score: 95,
    date: "A date",
    passed: true,
  },
  {
    name: "Jack",
    score: 95,
    date: "A date",
    passed: true,
  },
  {
    name: "Jill",
    score: 95,
    date: "A date",
    passed: true,
  },
];
console.log(submissions);

const addSubmission = (array, newName, newScore, newDate) => {
    const newSubmission = {
      name: newName,
      score: newScore,
      date: newDate,  
      passed:  newScore>=60
    };
    array.push(newSubmission);
   };
   addSubmission(submissions, "Joey", 47, "new date")
   console.log(submissions);

const deleteSubmissionByIndex = (array,index) => {
    array.splice(index, 1);
   };

const deleteSubmissionByName = (array, name)=> {
    const index = array.findIndex((item)=>{item.name ===name});
}
deleteSubmissionByIndex(array, index);
console.log(submissions, 3);

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};

const findSubmissionByName = (array, name) => {
    return array.find((submission)=>{
        return submission.name === name;
    });
};
console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore =(array) => {
    let currentLowest = array[0];
    array.forEach((item)=>{
if (item.score < currentLowest.score) {
    currentLowest = item;
}
    });
    return currentLowest;
};
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
let total = 0;
for (let item of array){
    total += item.score;
}
return total/array.length;
}


const filterPassing = (array) => {
    return array.filter((item)=>{
        return item.passed >= 60;
    });
};

const filter90AndAbove = (array) => {
    return array.filter((item)=>
    return item.passed >= 90;});
};
