// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY.
// Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.).
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso.

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const Pizzas = [
  {
    id: 1,
    nombre: "Obama",
    ingredientes: ["Muzzarella", "Peperoni", "Salsa de tomate"],
    precio: 700,
  },

  {
    id: 2,
    nombre: "Buffalo Chicken",
    ingredientes: ["Pollo", "Salsa BBQ"],
    precio: 900,
  },

  {
    id: 3,
    nombre: "Lincoln",
    ingredientes: ["Muzzarella", "Salsa de tomate"],
    precio: 595,
  },

  {
    id: 4,
    nombre: "Chicken Norris",
    ingredientes: ["Pollo", "Queso Cheddar", "Cebolla Morada"],
    precio: 600,
  },

  {
    id: 5,
    nombre: "Burgerpizza",
    ingredientes: [
      "Blend de carne",
      "Cebolla grillada",
      "Queso Cheddar",
      "Panceta",
    ],
    precio: 800,
  },

  {
    id: 6,
    nombre: "Giuliani",
    ingredientes: ["Muzzarella De Bufala", "Albahaca", "Salsa Italiana"],
    precio: 599,
  },
];

const mostrarPizzasImpar = () => {
  Pizzas.forEach((pizza) => {
    if (pizza.id % 2 != 0) {
      console.log("La Pizza con id impar es la pizza", pizza.nombre, pizza);
    }
  });
};

mostrarPizzasImpar();

const pizzasPrecioMenor = () => {
  Pizzas.forEach((pizza) => {
    if (pizza.precio < 600) {
      console.log(
        "La Pizza con un precio menor a $600 es la pizza",
        pizza.nombre,
        pizza
      );
    }
  });
};

pizzasPrecioMenor();

const pizzasNombrePrecio = () => {
  Pizzas.forEach((pizza) => {
    console.log("El precio de la pizza", pizza.nombre, "es:", pizza.precio);
  });
};

pizzasNombrePrecio();

const pizzasIngredientes = () => {
  Pizzas.forEach((pizza) => {
    console.log("Ingredientes de la pizza", pizza.nombre, ":");
    pizza.ingredientes.forEach((ingredientes) => {
      console.log(`-${ingredientes}`);
    });
  });
};

pizzasIngredientes();
