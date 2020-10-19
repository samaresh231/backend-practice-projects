const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 10);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result)
        console.log("We logged In!!!");
    else 
        console.log("Incorrect Password");
}

// hashPassword("sam");

login("sam", "$2b$10$klRpzoxHfTl/OXxkJN6XR.Ulsk67ilsv.8zE5Zv/95rvk5rXQJjZK");