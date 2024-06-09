import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true
  },
  {
    name: 'John Mary',
    email: 'john@email.com',
    password: bcrypt.hashSync('john123', 10),
    isAdmin: false
  },
  {
    name: 'Will Smith',
    email: 'will@email.com',
    password: bcrypt.hashSync('will123', 10),
    isAdmin: false
  },
  {
    name: 'Nicolas Pooran',
    email: 'nicolas@email.com',
    password: bcrypt.hashSync('nicolas123', 10),
    isAdmin: false
  },
  {
    name: 'David Gea',
    email: 'david@email.com',
    password: bcrypt.hashSync('david123', 10),
    isAdmin: false
  }
];

export default users;
