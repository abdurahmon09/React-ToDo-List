import React from 'react';
import classes from './MyLoader.module.css'

function MyLoader(props) {
    return (
        <section className={classes.loading2}>
            <div className={classes.container}>
                <div className={classes.loading2__ring}></div>
                <div className={classes.loading2__ring}></div>
                <div className={classes.loading2__ring}></div>
                <h1 className={classes.loading2__txt}>Loading...</h1>
            </div>
        </section>
    );
}

export default MyLoader;