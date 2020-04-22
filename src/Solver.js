function isValid(b,row,col,x){
    let i;
    let j;
    for(i=0;i<9;i++){
        if(x === b[i][col]){
            return(false);
        }
    }
    for(j=0;j<9;j++){
        if(x === b[row][j]){
            return(false);
        }
    }
    let colstart = Math.floor(col/3)*3;
    let rowstart = Math.floor(row/3)*3;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(x === b[rowstart+i][colstart+j]){
                return(false);
            }
        }
    }
    return(true);
}

function findNext(b){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(b[i][j]===" "){
                return [i,j,true]
            }
        }
    }
    return [9,9,false];
}

function sudoku(b){
    let l = findNext(b);
    if(!l[2]){return true}
    let i;
    for(i=1;i<=9;i++){
        if(isValid(b,l[0],l[1],i)){
            b[l[0]][l[1]]=i;
            if(sudoku(b)){
                return true;
            }
            b[l[0]][l[1]]=" ";
        }
    }
    return false;
}

function solver(bo){
    if(sudoku(bo)){
        return(bo);
    }
    else return([
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ])
}

module.exports = {
    solver:solver
}
