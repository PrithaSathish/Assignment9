const fetchPhonebookFromFakeStore = async () => {
  const response = await fetch('https://fakestoreapi.com/users');
  const users = await response.json();

  const phonebook = users.map(user => ({
    name: `${user.name.firstname} ${user.name.lastname}`,
    phone: user.phone
  }));

  console.log(phonebook);
};


fetchPhonebookFromFakeStore();

