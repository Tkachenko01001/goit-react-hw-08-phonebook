export const getTasks = (state) => ({
    isLoading: state.contacts.isLoading,
    error: state.contacts.error,
  });

export const selectUserData = state => ({
    name: state.auth.user.name,
    isLoggedIn: state.auth.isLoggedIn,
    isRefreshing: state.auth.isRefreshing,
});