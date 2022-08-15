import { Box, makeStyles, Typography } from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useCallback } from 'react';

const useStyles = makeStyles((theme) => ({
    Item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '400',
        borderBottom: '1px solid teal'
    },
    ItemBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        marginRight: '1.2rem'
    },
    arrowIcon: {
        fontSize: '2rem',
        margin: 10,
        cursor: 'pointer',
    },
    voteLevel: {
        fontSize: 20
    },
    ItemText: {
        fontSize: '0.9rem',
        width: '75%'
    },
    ItemEmoji: {
        fontSize: '2rem',
        marginLeft: 'auto',
        borderRadius: '50%',
        boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
    }
}))

function Item(props) {
    const classes = useStyles()
    const {votes,text} = props
    const getEmoji = useCallback((votes) => {
        if (votes >= 9) {
            return 'em em_rolling_on_the_floor_lughing'
        }else if(votes >= 6) {
            return 'em em-laughing'
        }else if(votes >= 3) {
            return 'em em-slightly_smiling_face'
        }else if(votes >= 0) {
            return 'em em-neutral_face'
        }else {
            return 'em em-angry'
        }
    }, [])

    return (
        <Box className={classes.Item}>
            <Box className={classes.ItemBtn}>
                <ArrowUpward onClick={props.upVote} className={classes.arrowIcon}/>
                <Typography className={classes.voteLevel}>{votes}</Typography>
                <ArrowDownward onClick={props.downVote} className={classes.arrowIcon}/>
            </Box>
            <Box className={classes.ItemText}>
                {text}
            </Box>
            <Box className={classes.ItemEmoji}>
                <i class={getEmoji(votes)}></i>
                {/* <p className="flex-grow-1 w-100">&#x1F606;</p> */}
            </Box>
        </Box>
     );
}

export default Item;