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
let n =5
for(let i =1; i<= n; i++){
    let row ="";
    for(let j =1; j<= n-i; j++ ){
        row +=" ";
    }
    for(let k =1; k<= i; k++){
        row+= "*";
    }
    console.log(row );
}

//Question 7 - Inverted -Right- Angled triangle
for(let i=1; i<=n; i++){
    let row="";
    for(let j=1; j<i; j++){
        row+=" ";
    }
    for(let k=1; k<= (n-i)+1; k++){
        row+="*"
    }
    console.log(row)
}

// Question 8 - Centered pyramid
for(let i =1; i<=n; i++){
    let row= "";
    for(let j =1; j<=n-i; j++){
        row+=" ";
    }
    for(let k =1; k<= 2*i-1; k++){
        row+="*";
    }
    console.log(row)
}
// Question 9 - inverted pyramid
 for (let i = 1; i <=n; i++){
    let row ="";
    for(let j =1; j<i; j++){
        row+=" ";
    }
    for(let k =1 ; k<= 2*(n-i)+1; k++){
        row+="*"
    }
    console.log(row)
}
// Question 10 Hollow pyramid
for(let i =1; i <=n;i++){
    let row ="";
    for(let j=1; j<=n-i; j++ ){
        row+=" ";
    }
   for (let k = 1; k <= 2 * i - 1; k++) {
    (k === 1 || k === 2 * i - 1 || i === n) ? row += '*' : row += ' ';
   }
   console.log(row)
}
 // Question 11 Hollow square 

 for(let i =1; i<=n; i++){
    let row="";
    for(let k =1; k <=n; k++){
        if(k===1 || i === 1 || k === n || i === n){
            row +="*";
        }
        else{
            row += " ";
        }
    }
    console.log(row)
 }

 // Question 12 hollow right angle triangle
 for(let i =1; i<=n; i++){
    let row = "";
    for(let k =1; k<=i; k++){
        if(i === 1 || i === n || k ===1 || k === i){
            row += "*";
        }
        else{
            row += " ";
        }
    }
    console.log(row)
 }

 // Question 13 number pyramid
 for(let i =1; i<=n; i++){
    let row ="";
    for(let j =1; j<=n-i; j++){
        row+="  "
    }
    for(let a =1; a<=i; a++){
        row +=a +" ";
    }
    for(let b = i-1; b>=1;b--){
        row+=b+" ";
    }
    console.log(row)
 }

 // Question 14 Hollow diamond pattern
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }
  row += "*";
  for (let j = 1; j <= 2 * i - 3; j++) {
    row += " ";
  }
  if (i > 1) {
    row += "*";
  }

  console.log(row);
}

// lower half
for (let i = n - 1; i >= 1; i--) {
  let row = "";
  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }
  row += "*";
  for (let j = 1; j <= 2 * i - 3; j++) {
    row += " ";
  }
  if (i > 1) {
    row += "*";
  }

  console.log(row);
}

 