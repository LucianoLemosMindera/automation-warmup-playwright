export const USERS  = new Object({
    valid: {
        username: "test",
        password: "password123",
        message: "User successfully logged in!"
    },
    blockedAccount: {
        username: "tetestblockst",
        password: "password123",
        message: "User blocked!"
    },
    invalidUSer: {
        username: "invalid",
        password: "password123",
        message: "User not found!"
    },
    wrongPassword: {
        username: "test",
        password: "wrongpass",
        message: "Incorrect username or password!"
    }
});

export const MESSAGES = new Object({
    success: {
        success: "User successfully logged in!",
        authenticated: "User test authenticated",
    },
    error: {
        userBlocked: "User blocked!",
        userNotFound: "User not found!",
        incorrectPassword: "Incorrect username or password!",
        userBlocked: "User temporarily blocked!"
    }
  
});