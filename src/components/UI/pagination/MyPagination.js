import React from 'react';
import { getPageArray } from '../../../utils/pages';
import MyButton from '../Button/MyButton';

function myPagination({totalPage, page, changePage}) {
  const pageArray = getPageArray(totalPage)

    return (
        <div className='btn__poginatioin'>
            {pageArray.map(item => (
                <MyButton
                  key={item}
                  onClick={() => changePage(item)}
                  className={page === item ? 'btn btn-primary' : 'btn btn-outline-primary'}>
                  {item}
                </MyButton>
              ))}
        </div>
        
    );
}

export default myPagination;