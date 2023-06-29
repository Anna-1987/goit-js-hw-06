
const totalCategories = document.querySelectorAll(".item");
//console.dir(totalCategories);
console.log(`Number of categories: ${totalCategories.length} `);

const categoriesArray = totalCategories.forEach(totalCategorie => {
 console.log (`Category: ${totalCategorie.children[0].textContent} 
  Elements: ${totalCategorie.children[1].children.length}`)
 }
  );
