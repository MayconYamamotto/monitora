function saveUser(db, user) {
    return db.run(`
    INSERT INTO users (
    firstName,
    lastName,
    email,
    password
    ) VALUES (
        "${user.firstName}",
        "${user.lastName}",
        "${user.email}", 
        "${user.password}"
    );
`)
}

module.exports = saveUser;