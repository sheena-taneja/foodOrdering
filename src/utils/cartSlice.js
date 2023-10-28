import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            let update = true;
            state.items.forEach(item => {
                if (item.card.info.id == action.payload.card.info.id) {
                    item.card.info.quantity += 1;
                    update = false;
                    return;

                }
            })
            if (update) {
                action.payload.card.info.quantity = 1;
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.items.forEach((item, index) => {
                if (item.card.info.id == action.payload.card.info.id)
                    if (item.card.info.quantity > 0) {
                        item.card.info.quantity -= 1;
                        return;
                    } else if (item.card.info.quantity == 1) {
                        state = {
                            ...state,
                            items: state.items.filter((item2, index) => {
                                console.log(item2.card.info.id + "   " + action.payload.card.info.id)
                                return item2.card.info.id != action.payload.card.info.id
                            })
                        }
                        console.log("item now",state.items)
                        return;
                    }
            })
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})
console.log(cartSlice)
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;