async function fetchPhonebookFromFakeStore() {
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      const phonebook = document.getElementById('phonebook');
      phonebook.innerHTML = '';

      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name.firstname} ${user.name.lastname} - 📞 ${user.phone}`;
        phonebook.appendChild(li);
      });
    }

        document.addEventListener('DOMContentLoaded', fetchPhonebookFromFakeStore);