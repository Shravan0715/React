**# Data Flow Diagram (DFD) for React Counter App**

## **DFD Level 0 (Context Diagram)**
### **Entities & Flow:**
- **User** → Clicks Button → **Counter App** → Updates & Displays Count

```
+------------------+
|      User       |
+------------------+
         |
         v
+-------------------+
|   Click Button   |
+-------------------+
         |
         v
+-------------------+
|   Counter App    |
+-------------------+
         |
         v
+-------------------+
|  Update & Display |
+-------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

---

## **DFD Level 1 (Detailed Flow)**
### **Processes:**
1. **User Clicks Button** → (Triggers `incrementCount` function)
2. **Increment Counter** → (Updates state using `useState` hook)
3. **Render Updated Count** → (Displays new count value)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
|  Click Increment   |
+---------------------+
         |
         v
+---------------------+
|  Trigger Function  |
| (incrementCount)  |
+---------------------+
         |
         v
+---------------------+
|  Update useState   |
+---------------------+
         |
         v
+---------------------+
|  Re-render UI      |
+---------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

### **Key Notes:**
- The **button click** triggers the `incrementCount` function.
- The function **updates the state** (`useState` hook).
- React **re-renders** the UI to display the new count.
- This process repeats every time the button is clicked.

This **DFD accurately represents  React counter app**. 

