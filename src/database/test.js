const Database = require('./db');
const saveUser = require('./saveUser')

Database.then(async db => {
    // inserir dados na tabela 
    await saveUser(db,  {
        firstName: "Maycon",
        lastName: "Yamamotto",
        email: "mayconyamamotto54@gmail.com",
        password: "1232123"
    })

    // consultar dados da tabela
    const selectedUsers = await db.all("SELECT * FROM users")
    console.log(selectedUsers) 

    // consultar somente 1 user pelo id 
    const user = await db.all('SELECT * FROM users WHERE id = "1"')
    console.log(user);
})