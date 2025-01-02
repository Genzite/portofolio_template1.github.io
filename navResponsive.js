document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const mobilemenu = document.getElementById('mobilemenu');
  
    button.addEventListener('click', () => {
      mobilemenu.classList.toggle('hidden');
    });
  });
  