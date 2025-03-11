**# Data Flow Diagram (DFD) for SimpleFormHandling**

## **DFD Level 0 (Context Diagram)**
### **Entities & Flow:**
- **User** → Enters Name & Email → **SimpleFormHandling System**
- **SimpleFormHandling System** → Stores Data Temporarily → **Displays Submission Confirmation**

```
+------------------+
|      User       |
+------------------+
         | (1) Enter Name & Email
         v
+---------------------------+
|  SimpleFormHandling System |
+---------------------------+
         | (2) Store Data Temporarily
         v
+---------------------------+
|  Display Confirmation  |
+---------------------------+
         | (3) Show Submitted Data
         v
+------------------+
|      User       |
+------------------+
```

---

## **DFD Level 1 (Detailed Flow)**
### **Processes:**
1. **User Inputs Data** → (Name, Email)
2. **Handle Submission** → (Prevents page reload, updates state)
3. **Store Temporarily** → (Data stored in React `useState` variables)
4. **Display Confirmation** → (Shows name & email on submission)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
|  Enter Name & Email |
+---------------------+
         |
         v
+---------------------+
|  Handle Submission |
+---------------------+
         |
         v
+---------------------+
|  Store in State    |
+---------------------+
         |
         v
+---------------------+
|  Display Response  |
+---------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

### **Key Notes:**
- The form **prevents page reload** and updates state.
- No database is used, so data exists **temporarily** in React state.
- The system **displays submitted data** after form submission.

This **DFD accurately represents SimpleFormHandling system**. 
