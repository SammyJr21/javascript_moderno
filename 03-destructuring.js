const user = {
firstName: 'Mateus',
lastName: 'Silva',
full_name: 'Nome Completo',
age: 23,
instagram: '@imateus.silva',
skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

 // Destructuring
 const { firstName, age, skills, full_name:fullName }
 = user;
 
 const [primary, secondary, tertiary, quaternary] = skills;
 console.log(fullName);
 
