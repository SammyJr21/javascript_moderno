const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  full_name: 'Nome Completo',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  };
  
   // Destructuring
   const { firstName, skills, ...resto}
   = user;
   
   const [primary] = skills;
   
   console.log(...resto);
   
  