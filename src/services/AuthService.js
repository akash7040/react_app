class AuthService {
    static login(email, password) {
      // Mock users stored in local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if a user exists with matching email and password
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store the logged-in user
        return true;
      } else {
        return false;
      }
    }

    static register(email, password) {
      // Register a new user in localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
    }

    static getLoggedInUser() {
      // Retrieve the logged-in user
      return JSON.parse(localStorage.getItem('loggedInUser'));
    }

    static logout() {
      // Log out the user
      localStorage.removeItem('loggedInUser');
    }
  }

  export default AuthService;
