## Objectif
Documenter chaque fonction du fichier `index.js` à l’aide du **standard JSDoc**.

---

## 🧱 Fonctions à documenter
1. `calculateSubtotal(items)`  
2. `applyDiscount(subtotal, discountCode)` 
3. `calculateTax(totalWithoutTax, customRate)`
4. `generateOrderSummary(customer, items, discountCode)`
5. `sendOrderConfirmation(order)`

---

## Consignes
Pour **chaque fonction** :
- Ajoute une description claire du rôle.  
- Décris **chaque paramètre** (`@param`).  
- Décris **la valeur de retour** (`@returns`).  
- Mentionne les erreurs possibles (`@throws`).  
- Fournis un exemple d’appel (`@example`).  
- Utilise des types précis (`number`, `string`, `Object`, `Array<{name:string, price:number}>`, etc.).  

### Exemple
```js
/**
 * Calcule le sous-total d'une liste d'articles.
 * @param {Array<{name: string, price: number, quantity: number}>} items - Liste d'articles.
 * @returns {number} Le sous-total (HT).
 * @throws {Error} Si items n’est pas un tableau valide.
 * @example
 * calculateSubtotal([{ name: "Clavier", price: 50, quantity: 2 }]); // 100
 */
function calculateSubtotal(items) { ... }
```

---

## Bonus
1. Crée un `@typedef {Object} Order` décrivant la structure du retour de `generateOrderSummary`.  
2. Génère la documentation HTML avec :
```bash
npx jsdoc index.js -d docs
```
3. Ouvre `docs/index.html` pour visualiser le rendu.

---

💡 **Astuce :** Pense que ta documentation doit pouvoir être lue sans avoir besoin d’ouvrir le code.
