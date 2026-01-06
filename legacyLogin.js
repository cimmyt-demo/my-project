/**
 * Legacy login implementation (BUGGY)
 * Problem:
 * - Allows empty passwords
 * - Does not check if user is active
 * - Weak validation
 */

export function legacyLogin(username, password, userFromDb) {
    if (!username) {
        return {
            success: false,
            message: "Username is required"
        };
    }

    // ❌ BUG: This allows empty passwords and inactive users
    if (userFromDb && userFromDb.username === username) {
        return {
            success: true,
            message: "Login successful (legacy)",
            user: userFromDb
        };
    }

    return {
        success: false,
        message: "Invalid credentials"
    };
}
