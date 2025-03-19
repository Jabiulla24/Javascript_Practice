let arr = [4, 2, 9, 2, 7, 4, 1];

function removedup(arr){
    //console.log('ar',arr);
    
    let unique=[];
    
    for(let i=0;i<arr.length;i++){
          let isDuplicate = false;
        for (let j=0;j<unique.length;j++){
            if(arr[i]==unique[j]){
                isDuplicate=true;
                break;
            }
        }
         if(!isDuplicate){
        unique.push(arr[i])
    }
    }
   
    console.log('Unique',unique)

    for (let i=0;i<unique.length-1;i++){
        for (let j=0;j<unique.length-i+1;j++){
            if(unique[j]>unique[j+1]){
                let temp=unique[j];
                unique[j]=unique[j+1];
                unique[j+1]=temp
                
            }
        }
    }
     console.log('Unique sorted',unique)
}


removedup(arr);

let arr2 = [4, 2, 9, 2, 7, 4, 1];

let newarr2=[...new Set(arr2)];
console.log('built in to remove duplicate',newarr2);

newarr2.sort()
console.log('built in to sort',newarr2);

