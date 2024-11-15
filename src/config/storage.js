export function loadState(key) {
    try {
        const serializedState = localStorage.getItem(key);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return error;
    }
}


export async function saveState(key, state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        return error;
    }
}

export function removeState(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) { }
}