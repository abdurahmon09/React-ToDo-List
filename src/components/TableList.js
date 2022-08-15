import React from 'react';
import { TransitionGroup , CSSTransition } from 'react-transition-group';
import TableItem from './TableItem'

const TableList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h5 className="text-center my-3 text-uppercase text-danger">Not Found</h5>
    )
  }
    return (
        <>
          <h5 className="text-center">{title}</h5>
          <TransitionGroup>
            {posts.map((post, index) => (
              <CSSTransition
                key={post.id}
                timeout={500}
                classNames="item"
              >
              <TableItem remove={remove} number={index + 1} post={post}/>
              </CSSTransition>
            ))}
          </TransitionGroup>

        </>
    );
};

export default TableList;