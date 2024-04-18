//1
let HR1 = [
    {
        "firstName" : "Sam",
        "department" : "Tech",
        "Designation" : "Manager" ,
        "salary" : 40000 ,
        "raiseEligible" : true
    },
    {
        "firstName" : "Mary",
        "department" : "Finance",
        "Designation" : "Trainee" ,
        "salary" : 18500 ,
        "raiseEligible" : true
    },
    {
        "firstName" : "Bill",
        "department" : "HR",
        "Designation" : "Executive" ,
        "salary" : 21200 ,
        "raiseEligible" : false
    }
]
console.log(HR1) ;

//2
const HR2 = {
    "companyName":"Tech Stars" ,
    "Website":"www.techstars.site",
    "employees": HR1 
}
console.log(HR2) ;

//3
const Anna = {
    "firstName" : "Anna",
    "department" : "Tech",
    "Designation" : "Executive" ,
    "salary" : 25600 ,
    "raiseEligible" : false
}

//add to HR2
HR2.employees.push(Anna) ;

console.log(HR2) ;

//4
function salary(json){
    let totSal=0 ;
    for(let i = 0; i<json.employees.length; i++){
        totSal += json.employees[i].salary ;


    }
    console.log(totSal) ;
}
salary(HR2) ;

//5
function raise(json){
    for(let i = 0; i<json.employees.length; i++){
        if(json.employees[i].raiseEligible){
            json.employees[i].raiseEligible = false ;
            json.employees[i].salary += json.employees[i].salary *.1 ;
        }
    }
}
raise(HR2) ;
console.log(HR2) ;

//6

function workfromhhome(json){
    const workingfm = ["Anna", "Sam"] ;
    for(let i = 0; i<json.employees.length; i++){
        json.employees[i].wfh = false ;
        for(let j =0;j<workingfm.length;j++){
            if(json.employees[i].firstName == workingfm[j]){
                json.employees[i].wfh = true ;
            }
        }
    }

}

workfromhhome(HR2)
console.log(HR2)