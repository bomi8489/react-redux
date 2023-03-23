import {
    configureStore,
    createSlice
} from "@reduxjs/toolkit"


const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            //mutaion을 하는것처럼 보이지만 reduxtookit은 immer 아래에서 동작하고 실제로는 새로운 배열을 리턴
            state.push({text: action.payload, id: Date.now()})
        },
        //action에게 보내고 싶은 정보는 payload와 함께 보내진다
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.action

export default store;