import { createSlice } from "@reduxjs/toolkit";

// 初始状态
const initialState = {
    count: 0,
};

// 创建一个 slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // 定义 increment reducer
        increment: (state) => {
            state.count = state.count + 1;
        },
        // 定义 decrement reducer
        decrement: (state) => {
            state.count = state.count - 1;
        },
    },
});

// 导出 actions 和 reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;