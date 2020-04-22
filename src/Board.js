import React,{useState} from 'react';
import Square from './Square';
import './Board.css';
import { Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {solver} from './Solver';

function Board() {

    let b =[
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
    const [squares, setSquares] = useState(b.slice(0));

    function getSquare(i,j){
        return(
            <Square clic={() => handleClick(i,j)} value={squares[i][j]}/>
        )
    }

    function isValid(row, col, x){
        let i;
        let j;
        for(i=0;i<9;i++){
            if(x === squares[i][col]){
                return(false);
            }
        }
        for(j=0;j<9;j++){
            if(x === squares[row][j]){
                return(false);
            }
        }
        let colstart = Math.floor(col/3)*3;
        let rowstart = Math.floor(row/3)*3;
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if(x === squares[rowstart+i][colstart+j]){
                    return(false);
                }
            }
        }
        return(true);
    }

    function handleClick(i,j){
        console.log("row",i,"column",j);
        const squarestemp = squares.slice();
        let x = Number(prompt(`Enter the number for cell(${i},${j}):`));
        if(x>0 && x<10 && isValid(i,j,x)){
            squarestemp[i][j] = x;
            console.log(squarestemp)
            setSquares(squarestemp);
        }
        else if(x===0){
            squarestemp[i][j] = ' ';
            console.log(squarestemp)
            setSquares(squarestemp);
        }
        else{
            alert('invalid number');
        }
    }
    
    function reset(){
        setSquares(b.slice(0));
    }

    function solveIt(){
        let b1 = solver(squares.slice())
        if(b1===b){
            reset();
            alert("no solution");
        }
        else{
            setSquares(b1);
        }
    }

    const l1 = [0,1,2,3,4,5,6,7,8]

    return (
        <div>
            <Button style={{marginLeft:'20px'}} color="primary" onClick={reset} startIcon={<AutorenewIcon />}>Reset Board</Button>
            <Button style={{marginLeft:'20px'}} color="primary" onClick={solveIt} endIcon={<KeyboardArrowRightIcon />}>Solve</Button>

            <div className="board">
                {
                    l1.map((i)=>{
                        return(
                            l1.map((j)=>{
                                return(
                                    getSquare(i,j)
                                )
                            })
                        )
                    })
                }
            </div>
        </div> 
    )
}

export default Board;
