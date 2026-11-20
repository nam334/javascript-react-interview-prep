
interface User {
    id: number,
    name: string,
    email: string
}

interface Admin extends User{
    permissions: string[]
}

const user: User = {
  id: 1,
  name: "Riya",
  email: "riya@mail.com",
};

const admin: Admin = {
  id: 2,
  name: "Arjun",
//   email: "arjun@mail.com",
  permissions: ["edit", "delete"],
};