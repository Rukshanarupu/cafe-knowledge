import React from 'react';

const Question = () => {
    return (
        <div className='mb-7'>
            <h2 className='font-bold text-3xl text-center mb-4 underline'>Question and Answer</h2>
            <div class="max-w-7xl mx-auto z-0">
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        <h3>QS no. 1: What are Difference between props and state?</h3>
                    </div>
                    <div class="collapse-content ">
                        <h2 className='text-xl mb-4'> Difference between props and state:</h2>
                        <div className=''>
                            <div>
                                <strong class="text-xl italic font-mono">State:</strong>
                                <p className=''>
                                    1. State is managed within the component
                                <br />
                                    2. State can be changed(mutable)
                                <br />
                                    3. State can be accessed using the use state hooks in functional components and in-class components can be accessed using this. State
                                <br />
                                    4. State is controlled by react components <br />
                                    5. State changes can be asynchronous
                                </p>
                            </div>
                            <div>
                                <strong class="text-xl italic font-mono">Props:</strong>
                                <p className=''>
                                    1. Props gets passed to the component <br />
                                    2. Props are read only and cannot be changed (immutable) <br />
                                    3. Props can be accessed in functional component using props parameter and in-class component, props can the accessed using this.props <br />
                                    4. Props are controlled by whoever renders the components <br />
                                    5. Props are read only
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        <h3>What is useState? How does it works?</h3>
                    </div>
                    <div class="collapse-content ">
                        <p tabindex="0" class="">
                            <strong class="text-xl italic font-mono">Definition of useState:</strong>
                            useState is a hook function provided by React, and it allows you to manage state in functional components. <br /> 
                            The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.State variables are used to store dynamic data in our component which can change as a user interacts with it.
                        </p>
                        <p className='my-3'>
                            <strong class="text-xl italic font-mono">Works of useState:</strong>
                            It returns an array with two values: The first element is the current state value, which is initially set to the value that you pass as an argument to useState() when you call it. The second element is a function that you can use to update the state value. Whenever you call this function, React will re-render the component and update the state value.
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        <h3>Qs. no. 3: Write down the purpose of useEffect other than fetching data?</h3>
                    </div>
                    <div class="collapse-content ">
                        <p tabindex="0" class="">
                            <strong class="text-xl italic font-mono">Definition of useEffect:</strong> 
                            <br/>
                            useEffect is a built-in hook in React that allows you to run side effects in your functional components. A side effect is any operation that affects something outside the scope of your component, like updating the browser document title or setting up an event listener. 
                        </p>  
                        <br />  
                        <p>
                            <strong class="text-xl italic font-mono">Purpose of useEffect other than fetching data:</strong> 
                            <br />
                            <span className='font-bold'>1. Updating the document title:</span> It can use to update the title of the document based on the current state or props of your component. This can be useful for providing context to the user, such as indicating the current page or the status of a task. <br /> 
                            <span className='font-bold'>2. Adding event listeners:</span> It can use to add event listeners to the browser's environment, such as the window or document objects. This can be useful for handling user input or responding to changes in the browser's state.
                            <br />
                            <span className='font-bold'>3. Setting up animations or timers:</span> It can use to set up animations or timers in your component. This can be useful for creating visual effects or scheduling actions to occur at specific times.
                        </p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        <h3>QS no. 4: How does React work?</h3>
                    </div>
                    <div class="collapse-content ">
                        <p tabindex="0" class="">
                            <strong class="text-xl italic font-mono">Functionality of React:</strong>
                        </p><br />
                        <p>React is a popular JavaScript library for building user interfaces. It works by creating a virtual representation of the UI in memory, and then using this representation to efficiently update the real DOM. Here's a high-level overview of how React works:</p>

                        <p><span className='font-bold my-2'>1. Component hierarchy:</span> React apps are built using components, which are independent, reusable pieces of UI. Components can be nested inside other components to form a hierarchy.</p>
                        <p><span className='font-bold'>2. Virtual DOM:</span> React creates a virtual representation of the component hierarchy in memory, called the Virtual DOM. This is a lightweight copy of the real DOM, and it can be updated much more efficiently.</p>
                        <p><span className='font-bold my-2'>3. Rendering:</span> React renders the Virtual DOM to the real DOM using a process called reconciliation. This involves comparing the current Virtual DOM to the previous Virtual DOM, and only updating the parts of the real DOM that have changed.</p>
                        <p><span className='font-bold'>4. State management:</span> Components can have internal state, which can change over time. When a component's state changes, React automatically re-renders the component and its children.</p>
                        <p><span className='font-bold my-4'>5. Data flow:</span> Data in a React app flows in one direction, from parent components to child components. This is known as the "data-down, actions-up" pattern. Child components can communicate with their parents by passing callback functions as props.</p>
                        <p><span className='font-bold'>6. React Hooks: </span> React Hooks are functions that allow you to use state and other React features in function components, instead of class components. Hooks were introduced in React 16.8 and have become the preferred way of working with React.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;