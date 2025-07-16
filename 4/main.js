// Исходный объект с 4 фруктами
  const fruits = {
    fruit1: "Яблоко",
    fruit2: "Банан",
    fruit3: "Апельсин",
    fruit4: "Груша"
  };

  console.log("Исходный список фруктов:", fruits);

  // Первый alert
  alert("У вас 4 фрукта.");

  // Второй alert с подтверждением
  const removeOne = confirm("Хотите ли вы убрать один фрукт?");

  if (removeOne) {
    // Получить ключи объекта
    const keys = Object.keys(fruits);
    // Выбрать случайный ключ
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    // Удалить этот ключ из объекта
    delete fruits[randomKey];
    alert("Осталось 3 фрукта.");
    console.log("Вы выбрали убрать фрукт.");
  } else {
    alert("Осталось 4 фрукта.");
    console.log("Вы выбрали не убирать фрукт.");
  }

  // Вывести итоговый объект
  console.log("Обновлённый список фруктов:", fruits);
 