type StateObject = {
    [key: string]: any;
};

export const addClassToObject = (state: StateObject, classes: Array<string>) => {
    if(classes.length > 0){
        state[classes.join(' ')] = true;
    }
}