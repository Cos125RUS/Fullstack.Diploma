import {aboutUsLoader} from "../loaders/aboutUsLoader";

export const aboutUsCases = (builder) => {
    builder
        .addCase(aboutUsLoader.pending, (state) => {
            state.loadingStatus.aboutUs = true;
        })
        .addCase(aboutUsLoader.fulfilled, (state, {payload}) => {
            state.aboutUs = payload;
            state.loadingStatus.aboutUs = false;
        })
        .addCase(aboutUsLoader.rejected, (state, {payload}) => {
            state.loadingStatus.aboutUs = false;
            state.loadingError.aboutUs = true;
        });
    return builder;
};