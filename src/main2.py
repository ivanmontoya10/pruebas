from typing import List

class ShoppingCart:
    MAX_ITEMS = 4
    
    def __init__(self) -> None:
        self.items: List[str] = []
        
    def add_item(self, item: str):
        
        if not item or item.isspace():
            return
        if item in self.items:
            print("El objeto ya se encuentra en la lista")
            return self.items.index(item)
        if item not in self.items and len(self.items) < self.MAX_ITEMS:
            self.items.append(item)
            return len(self.items) - 1  
        

    def size(self) -> int:
        return len(self.items)
    
    def get_items(self) -> List[str]:
        print(self.items)
        return
    
cart = ShoppingCart()
cart.add_item("Guayaba")
cart.add_item("Manzana")
cart.add_item("Pera")
cart.add_item("Fresa")
cart.add_item("Mango")
cart.get_items()
