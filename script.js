const userProfile = {
    name: "Ingkar",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["gaming", "music"]
};

console.log(userProfile);

const currentYear = new Date().getFullYear();
const age = currentYear  - userProfile.birthYear;
const ageInMonths = age * 12;
const hobbiesCount = userProfile.hobbies.length;

console.log(`Age: ${age}`);
console.log(`Age in months: ${ageInMonths}`);
console.log(`Hobbies: ${hobbiesCount}`);

function showProfile() {
    const age = new Date().getFullYear() - userProfile.birthYear;
    const ageInMonths = age * 12;
    document.getElementById('info').textContent = `${userProfile.name}, ${age} years old (${ageInMonths} months), hobbies: ${userProfile.hobbies.length}`;
}

showProfile();

const btn = document.getElementById('profileBtn');

btn.addEventListener('click', () => {
    const name = document.getElementById('username').value;
    const year = Number(document.getElementById('birthYearInput').value);

    if (!name || !year) return;
    
    userProfile.name = name;
    userProfile.birthYear = year;

    showProfile();
    console.log(userProfile);
})

const list = document.getElementById('hobbyList');
const newItemInput = document.getElementById('newItem');

document.getElementById('addBtn').addEventListener('click', () => {
  const text = newItemInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);

  newItemInput.value = '';
});

document.getElementById('removeBtn').addEventListener('click', () => {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
});