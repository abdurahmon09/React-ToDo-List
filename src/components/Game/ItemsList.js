import React, {useEffect, useState, useCallback} from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core'
import Item from './Item';
import axios from 'axios';
import MyLoader from '../UI/Loader/MyLoader';

const useStyles = makeStyles((theme) => ({
    ItemsList: {
        display: 'flex',
        width: '80%',
        height: '80%'
    },
    ItemListSideBar: {
        background: '#9345cd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '6px',
        width: '30%',
        textAlign: 'center',
        boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
        zIndex: 2
    },
    ItemListTitle: {
        fontSize: '3rem',
        color: '#fff',
        fontWeight: 'bold',
        margin: '30px !important',
    },
    ImgSidebar: {
        width: '50%',
        borderRadius: '50%',
        boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
    },
    ItemListSticker: {
        height: '90%',
        width: '70%',
        background: '#fff',
        alignItems: 'center',
        boxShadow: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)',
        marginTop: '30px',
        overflow: 'scroll'
    }
}))

function ItemsList(props) {
    const classes = useStyles()

    const [joke, setJoke] = useState(null)

    async function getEmoji() {
        let newEmoji = []
        for (let i = 1; i < 7; i++) {
            const response = await axios.get('https://icanhazdadjoke.com/', {
              headers: {
                Accept: 'application/json'
               }
            })
            newEmoji.push({id: i, text: response.data.joke, votes: 0})
        }
        setJoke(newEmoji)
    }

    useEffect(() => {
        getEmoji()
    }, [])

    const handleVote = useCallback((id, offset) => {
            const filterEmoji = joke.filter(item => item.id !== id)
            const emoj = joke.find(item => item.id === id)
            emoj.votes += offset
            filterEmoji.push(emoj)
            filterEmoji.sort((a,b) => b.votes - a.votes)
            setJoke((filterEmoji))
    },[joke, setJoke])

    if (joke) {
        return (
            <Box className={classes.ItemsList}>
                <Box className={classes.ItemListSideBar}>
                    <Typography className={classes.ItemListTitle}>
                        Abd
                        <br/>
                        goo
                    </Typography>
                    <img 
                    className={classes.ImgSidebar}
                    alt='imgSidebar'
                    src="https://images.pexels.com/photos/8817668/pexels-photo-8817668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </Box>                                                                          
                <Box className={classes.ItemListSticker}>
                    {joke.map(item => (
                        <Item 
                        votes={item.votes} 
                        text={item.text} 
                        key={item.id} 
                        upVote={() => handleVote(item.id, 1)}
                        downVote={() => handleVote(item.id, -1)}
                        />
                    ))}
                </Box>
            </Box>
        );
    } else {
        return <MyLoader/>
    }
}


export default ItemsList;