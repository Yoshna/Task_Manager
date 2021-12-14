const Logout = (props) => {
  window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/logout`;
};
export default Logout;
