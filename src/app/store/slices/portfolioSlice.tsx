import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface Asset {
    id: string;
    symbol: string;
    amount: number;
    purchasePrice: number;
    date: string;
}

interface PortfolioState {
    assets: Asset[]
}

const initialState: PortfolioState = {
    assets: [],
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        addAsset: (state, action: PayloadAction<Asset>) => {
            const newAsset = action.payload;
            state.assets.push(newAsset);
        },
        removeAsset: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.assets = state.assets.filter((asset) => asset.id !== id);
        }
    }
})

export const {addAsset, removeAsset} = portfolioSlice.actions;
export const portfolioReducer = portfolioSlice.reducer;