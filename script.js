const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  // TODO
  // returns an array of first 10 values that have the same string being passed in the function
  return fruit.filter(val => {
    return val.toLowerCase().includes(str.toLowerCase());
  }).slice(0, 10);
}

function searchHandler() {
  // TODO
  // This function is for the "keyup" event listener.
  // It grabs the current value in the input,
  // if it has length, use showSuggestions function and pass in search function using the inputValue as its argument.
  // otherwise clear the suggestions html
  const inputValue = input.value;
  inputValue.length ? showSuggestions(search(inputValue)) : suggestions.innerHTML = "";
}

function showSuggestions(results) {
  // TODO
  // Clears the innerHTML of suggestions, then creates li's to append to suggestions.
  suggestions.innerHTML = "";

  return results.map(item => {
    const newLi = document.createElement("li");
    newLi.innerText = item;
    newLi.style.background = "rgb(255,190,0)"

    newLi.addEventListener("mouseover", (e) => {
      e.target.style.background = "rgb(255, 95, 0)"
    })
    newLi.addEventListener("mouseout", (e) => {
      e.target.style.background = "rgb(255, 190, 0)"
    })

    suggestions.appendChild(newLi);
  })
}

function useSuggestion(e) {
  // TODO
  // grabs the element that was clicked on, and changes the value of the input to be the innerText, clear the suggestions innerHTML.
  const target = e.target;
  input.value = target.innerText;
  suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

input.addEventListener('focusin', () => {
  input.style.background = "rgb(255, 190, 0)";
})
input.addEventListener('focusout', () => {
  input.style.background = "rgb(255, 160, 0)";
})