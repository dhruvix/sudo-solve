import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonStyle1: {
        fontSize: '30px',
        color: '#00e676'
    },
    buttonStyle2: {
        fontSize: '30px',
        color: '#ffea00'
    },
});

function Square({clic,value,x,y}) {
    const classes = useStyles();

    function sqclass(){
        if(Math.floor(x/3)%2===0){
            if(Math.floor(y/3)%2===0){
                return 1;
            }
            else{
                return 0;
            }
        }
        else{
            if(Math.floor(y/3)%2===0){
                return 0;
            }
            else{
                return 1;
            }
        }
    }

    return (
        <div>
            {
                sqclass() ?
                    (
                        <Button variant='outlined'
                            onClick={clic}
                            className={classes.buttonStyle1}
                            color='primary'
                            style={{ maxWidth: '60px', maxHeight: '60px', minWidth: '60px', minHeight: '60px' }}
                        >{value}</Button>
                    )
                    :
                    (
                        <Button variant='outlined'
                            onClick={clic}
                            className={classes.buttonStyle2}
                            color='secondary'
                            style={{ maxWidth: '60px', maxHeight: '60px', minWidth: '60px', minHeight: '60px' }}
                        >{value}</Button>
                    )
            }
        </div>
    )
}

export default Square;
