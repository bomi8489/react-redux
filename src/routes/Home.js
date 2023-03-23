import React, {useState} from "react";
import { connect } from "react-redux";
import { add } from './../store';
import ToDo from "../components/ToDo";

function Home({ toDos, addTodo }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>ADD</button>
            </form>
            <ul>
                {toDos.map(toDo => 
                    <ToDo { ...toDo } key={toDo.id}/>
                )}
            </ul>
        </>
    )
}

// using mapStateToProps : redux state로부터 home(component)에 prop으로써 전달
function mapStateToProps(state) {
    return { toDos: state }
}

function mapDispatchToProps(dispatch) {
    return { 
        addTodo: (text) => dispatch(add(text))
    }
}

// mapStateToProps 함수를 통해 Home 컴포넌트와 store를 connect
export default connect(mapStateToProps, mapDispatchToProps)(Home);