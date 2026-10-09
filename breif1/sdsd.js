// Write your solution in solve(): it receives the input and RETURNS the answer.
function solve(a) {
    let min = a[0];
    let len = 0;
    
    for(i in a){
        if (a[i] < min){
            min = a[i]
            len =Number(i)+Number(1)
        }
            
        }
    return console.log([len,min]);
    }
    let a = [5,2,3]
    solve(a)