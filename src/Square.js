import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttonStyle: {
        fontSize: '30px',
        color: '#00e676'
    }
});

function Square({clic,value}) {
    const classes = useStyles();

    return (
        <div>
            <Button variant='outlined'
            onClick={clic}
            className={classes.buttonStyle}
            color='primary' 
            style={{maxWidth: '60px', maxHeight: '60px', minWidth: '60px', minHeight: '60px'}}
            >{value}</Button>
        </div>
    )
}

export default Square;
