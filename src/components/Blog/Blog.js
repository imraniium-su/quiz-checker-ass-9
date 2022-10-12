import React from 'react';

const Blog = () => {
    return (
        <div className='flex grid md:grid-cols-2 lg:grid-cols-2 m-8 gap-6'>
            <div className='bg-emerald-100 p-3 rounded-md drop-shadow-xl'>
                <h2 className='text-2xl font-bold drop-shadow-xl'>What is the purpose of React Router?</h2>
                <h4 className='text-1xl font-bold text-left '>React Router:</h4>
                <p className='text-left '>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /> Biggest reason for having routing is because if the user hits the Back button of the browser (Forward button as well, for that matter), he will not be navigating within the app. The user might expect to navigate within the app using the history of the different "pages" he loaded previously. Instead, he will be thrown out of the web app. Hitting the Refresh button would also throw him to the root of the app..</p>
            </div>
            <div className='bg-emerald-100 p-3 rounded-md drop-shadow-xl'>
                <h2 className='text-2xl font-bold drop-shadow-xl'>How does Context API work ?</h2>
                <h4 className='text-1xl font-bold text-left '>React Context API:</h4>
                <p className='text-left '>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>

            </div>
            <div className='bg-emerald-100 p-3 rounded-md drop-shadow-xl'>
                <h2 className='text-2xl font-bold drop-shadow-xl'>How does work useRef?</h2>
                <h4 className='text-1xl font-bold text-left '>UseRef:</h4>
                <p className='text-left '>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br /> Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                    You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes. <br />

                    However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes. <br />

                    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a  object yourself is that useRef will give you the same ref object on every render.</p>
            </div>
        </div>
    );
};

export default Blog;