export const USERS  = {
    valid: {
        username: "test",
        password: "password123"
    },
    blockedAccount: {
        username: "testblock",
        password: "password123"
    },
    invalidUser: {
        username: "invalid",
        password: "password123"
    },
    wrongPassword: {
        username: "test",
        password: "wrongpass"
    }
};

export const MESSAGES = {
    success: {
        success: "User successfully logged in!",
        authenticated: "User test authenticated",
    },
    error: {
        userBlocked: "User blocked!",
        userNotFound: "User not found!",
        incorrectPassword: "Incorrect username or password!",
        TemporarilyBlocked: "User temporarily blocked!"
    }
};