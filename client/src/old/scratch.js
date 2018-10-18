let arr = [
    {f1: 341, f2: 451, aircraft: {ID: "N1"}},
    {f1: 342, f2: 452, aircraft: {ID: "N2"}},
    {f1: 343, f2: 453, aircraft: {ID: "N3"}},
    {f1: 344, f2: 454, aircraft: {ID: "N1"}},
    {f1: 345, f2: 455, aircraft: {ID: "N2"}},
    {f1: 346, f2: 456, aircraft: {ID: "N2"}},
];

console.log(JSON.stringify(arr));
let tailNumbers = getTailNumbers(arr);
console.log(tailNumbers);

function getTailNumbers(arr_m) {
    let unique = [];
    for (let i=0; i<arr_m.length; ++i) {
        let tailNumber = arr_m[i].aircraft.ID;
        if(!unique.includes(tailNumber)) {
            unique.push(tailNumber);
        }
    }
    return unique;
}