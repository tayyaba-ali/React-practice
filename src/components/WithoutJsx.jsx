//Experiencing How to make Components without using JSX
// Js is not requiremnet not mandatory but it makes easy for us to do less coding and our code looks so elegant and shorter

// Let's get started
import React from "react";
const Hello = () => {
    // return React.createElement('h1', null, '<h1>Hello I am creating without using JSX</h1>');
    // Not gaining the output which we expected
    // for creating node we have to also repeat the code like this
    // The React.createElement takes 3 parameters first HTMl tag second attributes or extra information like classes or id and third dom node like if you want h1 inside a div having the text "Hello I have been created without using JSx" 

    return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Hello I am here without using the JSX very painful yaar  bhot zyada coding horhe ha Toba Toba tum JSX he use krlo Allah ka Wasta🙂',
			),
		);
    
    

};
export default Hello;
