**# Data Flow Diagram (DFD) for E-commerce App**

## **DFD Level 0 (Context Diagram)**
### **Entities & Flow:**
- **User** → Interacts with Navigation → **E-Store App** → Updates Cart/Auth State
- **E-Store App** → Routes to Components → **Displays Content**

```
+------------------+
|      User       |
+------------------+
         |
         v
+-------------------+
|    E-Store App   |
+-------------------+
         |
         v
+-------------------+
| Component Routes  |
+-------------------+
```

## **DFD Level 1 (Detailed Flow)**
### **Processes:**
1. **User Authentication** → (Login/Signup flow)
2. **Product Management** → (View/Add products)
3. **Cart Operations** → (Add/Remove items)
4. **Payment Processing** → (Handle payments)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
|   Authentication   |
| (Login/Signup)     |
+---------------------+
         |
         v
+---------------------+
|  Product Listing   |
+---------------------+
         |
         v
+---------------------+
|   Cart Management  |
| (Add/Remove Items) |
+---------------------+
         |
         v
+---------------------+
|  Payment Process   |
+---------------------+
```

### **Key State Flows:**
- `isLoggedIn` state manages authentication
- `cart` state handles shopping cart items
- `cartTotal` calculates total purchase amount
- Router manages navigation between components


