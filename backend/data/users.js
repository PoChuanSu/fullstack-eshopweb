import bcrypt from "bcrypt";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 12),
        isAdmin: true,
    },
    {
        name: "John Wicked",
        email: "john@email.com",
        password: bcrypt.hashSync("123456", 12),
        isAdmin: false,
    },
    {
        name: "Tom Hardy",
        email: "tomn@email.com",
        password: bcrypt.hashSync("123456", 12),
        isAdmin: false,
    },
];

export default users;
