
const initialState = false;

export const UPDATE_PAGE_LOADING = "UPDATE_PAGE_LOADING";



export const updatePageLoading = (loading) => ({
    type : UPDATE_PAGE_LOADING,
    payload : loading
})



export default (state=initialState,{type,payload}) => {
    if(type==UPDATE_PAGE_LOADING){
        return payload;
    }
    return state;
}