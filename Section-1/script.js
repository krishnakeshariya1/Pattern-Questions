// Question 1 - solid square
for(let i =1; i<=5; i++){
    let row = "";
    for(let j =1; j<=5; j++){
        row += "*";
    }
    console.log(row);
}

// Question 2 - Right Angled Trinagle

for(let i =1; i<=5; i++){
    let row = "";
    for(let j =1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}

// Question 3 - reverse Right Angles Triangle
for(let i =5; i >=1; i--){
    let row ="";
    for(let j =1; j<=i; j++){
         row += "*";
    }
     console.log(row)
}

// Question 4 - Increasing Number Triangle

for(let i =1; i<=5; i++){
    let row = "";
    for(let j =1; j<=i; j++){
        row += j +" ";
    }
    console.log(row);
}

//Question 5 - Decreasing Number Traingle

for(let i =5; i >=1; i--){
    let row ="";
    for(let j =1; j<=i; j++){
         row += j+" ";
    }
     console.log(row)
}

//Question 6 - Right Angle triangle 
