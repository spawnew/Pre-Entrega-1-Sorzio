const products = [
    { id: "1", name: "darknecrofear", img: "../../public/img/dark necrofear.jpg", price: "100", category: "singles", description: "fiend", stock: "10" },
    { id: "2", name: "Galaxy eyes", img: "../../public/img/galaxy.jpeg", price: 100, category: "singles", description: "dragon", stock: 10 },
    { id: "3", name: "Ojos rojos ", img: "../../public/img/ojos rojos.jpg", price: 100, category: "singles", description: "dragon oscurito", stock: 10 },
    { id: "4", name: "blue eyes", img: "../../public/img/azules.jpeg", price: 100, category: "singles", description: "dragon blanco", stock: 10 },
    { id: "5", name: "megatin", img: "../../public/img/descarga (1).jpeg", price: 100, category: "sellados", description: "caja dorada", stock: 10 },
    { id: "6", name: "rarity colection", img: "../../public/img/descarga (2).jpeg", price: 100, category: "sellados", description: "caja normal", stock: 10 },
    { id: "7", name: "batle of legend", img: "../../public/img/descarga (3).jpeg", price: 100, category: "sellados", description: "caja plateada", stock: 10 },
  ];
    
  export const getProducts = () => {

    return new Promise((resolve, reject) => {
        if(products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        } else {
            reject("no hay productos")
        }
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            const product = products.find( product => product.id === id)

            setTimeout(() => { 
                if(!product) {
                    reject(`Disculpa, no se encuentra el producto ${id}`)
                }
                resolve(product)
             }, 2000)
        } else {
            reject("Nos quedamos sin productos :(")
        }
    })

}