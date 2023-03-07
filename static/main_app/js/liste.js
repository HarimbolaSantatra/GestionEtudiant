document.getElementById("grades-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Récupérer les notes et coefficients de chaque matière
    const mathGrade = parseFloat(document.getElementById("math-grade").value);
    const mathCoefficient = parseFloat(document.getElementById("math-coefficient").value);
    const physicsGrade = parseFloat(document.getElementById("physics-grade").value);
    const physicsCoefficient = parseFloat(document.getElementById("physics-coefficient").value);
    const chemistryGrade = parseFloat(document.getElementById("chemistry-grade").value);
    const chemistryCoefficient = parseFloat(document.getElementById("chemistry-coefficient").value);
  
    // Calculer la moyenne
    const average = ((mathGrade * mathCoefficient) + (physicsGrade * physicsCoefficient) + (chemistryGrade * chemistryCoefficient)) / (mathCoefficient + physicsCoefficient + chemistryCoefficient);
  
    // Afficher la moyenne
    const result = document.getElementById("result");
    result.innerHTML = `La moyenne est de ${average.toFixed(2)}.`;
  });

  


  // Récupérer le bouton "Add"
const addButton = document.querySelector('#add-button');

// Ajouter un gestionnaire d'événement pour le clic sur le bouton "Add"
addButton.addEventListener('click', () => {
  // Créer un formulaire pour ajouter une nouvelle matière
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-group">
      <label for="subject-name">Nom de la matière :</label>
      <input type="text" class="form-control" id="subject-name" required>
    </div>
    <div class="form-group">
      <label for="subject-coefficient">Coefficient :</label>
      <input type="number" class="form-control" id="subject-coefficient" required>
    </div>
    <button type="submit" class="btn btn-primary style3">Ajouter</button>
  `;

  // Ajouter un gestionnaire d'événement pour le soumission du formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Récupérer les valeurs entrées dans le formulaire
    const subjectName = document.querySelector('#subject-name').value;
    const subjectCoefficient = document.querySelector('#subject-coefficient').value;
    
    // Ajouter la nouvelle matière et son coefficient à la page
    const newSubject = document.createElement('div');
    newSubject.innerHTML = `
      <div class="form-group">
        <label for="${subjectName}-grade">${subjectName} :</label>
        <input type="number" class="form-control" id="${subjectName}-grade" required>
        <input type="number" class="form-control" id="${subjectName}-coefficient" value="${subjectCoefficient}" required>
      </div>
    `;
    const gradesForm = document.querySelector('#grades-form');
    gradesForm.insertBefore(newSubject, addButton);
    
    // Masquer le formulaire pour ajouter une nouvelle matière
    form.remove();
  });

  // Afficher le formulaire pour ajouter une nouvelle matière
  const gradesForm = document.querySelector('#grades-form');
  gradesForm.insertBefore(form, addButton);
});
