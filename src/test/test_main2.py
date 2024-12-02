# from src.main2 import ShoppingCart


# def test_add_item():
#     cart = ShoppingCart()
#     cart.add_item("Guayaba")
#     # cart.add_item("Manzana")
#     cart.add_item("Pera")

#     assert cart.get_items() == ["Guayaba", "Manzana", "Pera"]
    
# def test_init_cart():
#     cart = ShoppingCart()
#     assert cart.size() == 0
    
# def test_size():
#     cart = ShoppingCart()
#     cart.add_item("Guayaba")
#     cart.add_item("Manzana")
#     cart.add_item("Pera")
#     assert cart.size() == 3
    
# def test_get_total():
#     cart = ShoppingCart()
#     cart.add_item("Guayaba")
#     cart.add_item("Manzana")
#     assert cart.get_items() == ["Guayaba", "Manzana"]
    
# def test_CarritoVacio():
#     cart = ShoppingCart()
#     cart.add_item(" ")
#     assert cart.get_items() == []
    
# def test_ElementosDup():
#     cart = ShoppingCart()
#     cart.add_item("Guayaba")
#     cart.add_item("Guayaba")
#     assert cart.get_items() == ["Guayaba"]
    
# def test_Maximo():
#     cart = ShoppingCart()
#     cart.add_item("Guayaba")
#     cart.add_item("Manzana")
#     cart.add_item("Pera")
#     cart.add_item("Naranja")
#     assert cart.get_items() == ["Guayaba", "Manzana", "Pera", "Naranja"]

# def test_Indice():
#     cart = ShoppingCart()
#     assert cart.add_item("Guayaba") == 0
#     assert cart.add_item("Manzana") == 1
#     assert cart.add_item("Pera") == 2

# def test_Lista():
#     cart = ShoppingCart()
#     cart.add_item("Guayaba")
#     items = cart.get_items()
#     items.append("Manzana") 
#     assert cart.get_items() == ["Guayaba"]
#     assert cart.size() == 1  

