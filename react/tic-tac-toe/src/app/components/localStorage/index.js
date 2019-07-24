const APP_STATE = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(APP_STATE);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    return undefined;
  }
};

export const removeState = () => {
  try {
    localStorage.removeItem(APP_STATE);
  } catch (error) {
    throw error;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem(APP_STATE, JSON.stringify(state));
  } catch (error) {
    removeState();
    throw error;
  }
};
