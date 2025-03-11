**User Authentication System (Retail App) - Data Flow Diagram (DFD)**

### **DFD Level 0 (Context Diagram)**
- Shows high-level interaction between user, system, and database.

#### **Entities:**
1. **User**: Registers, logs in, accesses retail page, logs out.
2. **System (React + Node.js)**: Handles authentication processes.
3. **MySQL Database**: Stores user credentials and session data.

```
+-------------------+
|      User        |
|-------------------|
|  - Sign Up       |
|  - Log In        |
|  - View Page     |
|  - Log Out       |
+-------------------+
          |
          | (User Request)
          v
+---------------------+
|  Authentication    |
|      System        |
+---------------------+
          |
          | (Data Request)
          v
+---------------------+
|   MySQL Database   |
| (User Credentials) |
+---------------------+
```

---

### **DFD Level 1 (Detailed Process Flow)**
- Shows how signup, login, and page access are handled.

```
+------------+       +----------------+       +----------------------+
|   User     | ----> | React Frontend | ----> |  Node.js Backend     |
|            |       | (Form Handling)|       |  (Express API)       |
+------------+       +----------------+       +----------------------+
      |                    |                           |
      | (SignUp/Login)      | (POST request)           | (Validate Input)
      |-------------------> |----------------------->  |-------------------+
      |                    |                           v                   |
      |                    |                    +----------------+         |
      |                    |                    |  MySQL Database|         |
      |                    |                    |  (User Table)  |         |
      |                    |                    +----------------+         |
      |                    |                           |                   |
      |                    |     (User Exists?)       |                   |
      |                    |<------------------------ |                   |
      |                    |                           v                   |
      |                    |     (JWT Token)          |                   |
      |                    |<----------------------  |                   |
      |                    |                                                   |
      | (Access Retail Page)|--------------------------------->(Check Token)   |
      |                    |<---------------------------------(Grant Access)   |
```

---

### **Process Breakdown**

#### **1. User Registration**
- User submits signup form.
- React frontend sends data to backend.
- Node.js backend validates data and stores it in MySQL.
- Success response is sent back.

#### **2. User Login**
- User enters credentials.
- React frontend sends login details to backend.
- Backend verifies credentials, generates JWT token, and responds with success.

#### **3. Secure Page Access**
- React frontend checks if the JWT token is valid before showing retail page.
- If valid, access is granted.

#### **4. Logout Process**
- JWT token is cleared from local storage or HTTP-only cookie.
- User session is ended.

## **Additional Considerations**

- **Security**: Use HTTPS for secure communication.
- **Error Handling**: Handle errors gracefully and provide user-friendly messages.
- **Performance**: Optimize database queries and minimize API calls.
- **Testing**: Write unit and integration tests for critical components.

---
