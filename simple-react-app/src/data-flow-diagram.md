**# Data Flow Diagram (DFD) for User Registration System**

## **DFD Level 0 (Context Diagram)**

**Entities & Flow:**

- **User** → Enters Registration Details → **Registration System**
- **Registration System** → Stores Data in → **Database**
- **Registration System** → Sends Success/Failure Response → **User**

```
+------------------+
|      User       |
+------------------+
         | (1) Enter Details
         v
+---------------------------+
|  Registration System  |
+---------------------------+
         | (2) Store Data
         v
+------------------+
|    Database     |
+------------------+
         | (3) Response
         v
+------------------+
|      User       |
+------------------+
```

## **DFD Level 1 (Detailed Flow)**

### **Processes:**

1. **User Inputs Data** → (Username, Email, Password)
2. **Validate Input** → (Check if fields are empty or invalid)
3. **Hash Password** → (Encrypt for security)
4. **Store in Database** → (Save user details)
5. **Send Response** → (Success or Failure message)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
|  Enter Registration |
|    Details         |
+---------------------+
         |
         v
+---------------------+
|   Validate Input   |
+---------------------+
         |
         v
+---------------------+
|   Hash Password    |
+---------------------+
         |
         v
+---------------------+
|  Store in Database |
+---------------------+
         |
         v
+---------------------+
|   Send Response    |
+---------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

### **Notes:**

- Input validation ensures the email format and password strength.
- Password hashing improves security.
- The system responds with a success or error message.

This DFD represents the **Simple-react-app** clearly. 

