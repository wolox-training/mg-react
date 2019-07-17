export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    throw error;
  }
};
