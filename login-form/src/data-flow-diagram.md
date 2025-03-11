# Data Flow Diagram (DFD) for Login Form React Application

## **DFD Level 0 (Context Diagram)**

### **Entities & Flow:**
- **User** → Enters Email & Password → **Login Form System**
- **Login Form System** → Validates Credentials → Shows Response

```
+------------------+
|      User       |
+------------------+
         | (1) Enter Email & Password
         v
+---------------------------+
|    Login Form System      |
+---------------------------+
         | (2) Validate Credentials
         v
+---------------------------+
|    Display Response       |
+---------------------------+
         | (3) Show Success/Error
         v
+------------------+
|      User       |
+------------------+
```

---

## **DFD Level 1 (Detailed Flow)**

### **Processes:**
- **User Input** → (Email, Password fields)
- **Handle Login** → (Validates input, checks credentials)
- **State Management** → (Using React `useState` hooks)
- **Display Response** → (Success alert or error message)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
|  Enter Credentials  |
+---------------------+
         |
         v
+---------------------+
|   Input Validation  |
+---------------------+
         |
         v
+---------------------+
| Credential Check    |
+---------------------+
         |
         v
+---------------------+
|  Update State      |
+---------------------+
         |
         v
+---------------------+
|  Display Result    |
+---------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

---

## **Key Notes:**
- Form uses React `useState` for email, password, and error states.
- Validation checks for empty fields.
- Credentials are checked against hardcoded values.
- System displays success alert or error message based on validation.
- The process is client-side only with no backend integration.

