import React from 'react';

function MyInput(props) {
    return (
        <input {...props}/>
    );
}

export default MyInput;

// import React from 'react';

// const MyInput = React.forwardRef((props, ref) => {
//     return (
//         <input {...props} ref={ref}/>
//     );
// })

// export default MyInput;