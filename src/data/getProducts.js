const products = [
    // Jugos
    {
        id: 1,
        category: "Jugos",
        name: "Jugo de Naranja",
        description: "Jugo fresco de naranjas naturales.",
        price: 350,
        image: "../img/jugo1.png"
    },
    {
        id: 2,
        category: "Jugos",
        name: "Jugo de Manzana",
        description: "Delicioso jugo de manzanas seleccionadas.",
        price: 300,
        image: "../img/jugo1.png"
    },
    {
        id: 3,
        category: "Jugos",
        name: "Jugo de Piña",
        description: "Refrescante jugo de piña tropical.",
        price: 400,
        image: "../img/jugo1.png"
    },
    {
        id: 4,
        category: "Jugos",
        name: "Jugo Verde",
        description: "Jugo detox de verduras y frutas verdes.",
        price: 450,
        image: "../img/jugo1.png"
    },
    {
        id: 5,
        category: "Jugos",
        name: "Jugo de Tomate",
        description: "Jugo natural de tomate maduro.",
        price: 250,
        image: "../img/jugo1.png"
    },
    
    
    // Licuados
    {
        id: 6,
        category: "Licuados",
        name: "Licuado de Banana",
        description: "Licuado cremoso de plátano y leche.",
        price: 400,
        image: "../img/Lic1.png"
    },
    {
        id: 7,
        category: "Licuados",
        name: "Licuado de Fresa",
        description: "Suave licuado de fresas frescas.",
        price: 450,
        image: "../img/Lic1.png"
    },
    {
        id: 8,
        category: "Licuados",
        name: "Licuado de Mango",
        description: "Delicioso licuado de mango maduro.",
        price: 500,
        image: "../img/Lic1.png"
    },
    {
        id: 9,
        category: "Licuados",
        name: "Licuado de Chocolate",
        description: "Licuado cremoso de chocolate y leche.",
        price: 550,
        image: "../img/Lic2.png"
    },
    {
        id: 10,
        category: "Licuados",
        name: "Licuado Energético",
        description: "Licuado con proteína de vainilla y plátano.",
        price: 600,
        image: "../img/Lic2.png"
    },
    
    // Sandwiches
    {
        id: 11,
        category: "Sandwiches",
        name: "Sandwich de Pollo",
        description: "Sandwich fresco con pollo a la parrilla.",
        price: 600,
        image: "../img/Sand1.png"
    },
    {
        id: 12,
        category: "Sandwiches",
        name: "Sandwich Veggie",
        description: "Delicioso sandwich con vegetales frescos.",
        price: 500,
        image: "../img/Sand1.png"
    },
    {
        id: 13,
        category: "Sandwiches",
        name: "Sandwich de Jamón",
        description: "Clásico sandwich de jamón y queso.",
        price: 400,
        image: "../img/Sand2.png"
    },
    {
        id: 14,
        category: "Sandwiches",
        name: "Sandwich de Pavo y Aguacate",
        description: "Pechuga de pavo, aguacate, tomate y mayonesa en pan multigrano.",
        price: 700,
        image: "../img/Sand3.png"
    },
    {
        id: 15,
        category: "Sandwiches",
        name: "Sandwich de Atún",
        description: "Mezcla de atún, mayonesa, apio y cebolla, servida en pan de centeno con lechuga.",
        price: 300,
        image: "../img/Sand3.png"
    },
    


];

const getProducts = new Promise((resolve, reject) => {
    //simulamos un retraso de red con setTimeout
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
  
export default getProducts