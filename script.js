const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  // TODO
  const results = fruit.filter(val => {
    return val.toLowerCase().includes(str.toLowerCase());
  })

  if (!results.length) {
    suggestions.innerHTML = "";
  }

  return results.slice(0, 10);
}

function searchHandler() {
  // TODO
  const inputValue = input.value;

  if (!inputValue.length) {
    suggestions.innerHTML = "";
  }

  if (inputValue.length) {
    const resultsOfSearch = search(inputValue)
    showSuggestions(resultsOfSearch)
  }
}

function showSuggestions(results) {
  // TODO
  suggestions.innerHTML = "";

  return results.map(item => {
    const newLi = document.createElement("li");
    newLi.textContent = item;
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
  const target = e.target;
  input.value = target.innerHTML;
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