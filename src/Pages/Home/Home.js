import React from 'react';
import EnterTask from '../EnterTask/EnterTask';
import Footer from '../Footer/Footer';
import Todo from '../Todo/Todo';

const Home = () => {
    return (
        <div>
            <h2>Hello Everyone</h2>
            <Todo></Todo>
            <Footer></Footer>
        </div>
    );
};

export default Home;