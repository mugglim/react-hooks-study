import React, {useContext} from 'react';
import {TodoContext} from './TodoStore';


const Header = () => {
    const {todos} = useContext(TodoContext);
    return (
            <>
                <div>
                    <h1>React.js Todo 애플리케이션!</h1>
                    <div>해야할 일 : {todos.filter(el=>el.status === "todo").length}개</div>
                </div>
            </>
    );
};

export default Header;