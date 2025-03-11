**# Data Flow Diagram (DFD) for React Home Component**

## **DFD Level 0 (Context Diagram)**
### **Entities & Flow:**
- **User** → Interacts with Navigation → **Home Component** → Updates & Displays Route

```
+------------------+
|      User       |
+------------------+
         |
         v
+-------------------+
| Navigation Action |
+-------------------+
         |
         v
+-------------------+
|  Home Component   |
+-------------------+
         |
         v
+-------------------+
| Route Update      |
+-------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

## **DFD Level 1 (Detailed Flow)**
### **Processes:**
1. **User Clicks Nav Link/Button** → (Triggers route change)
2. **Route Navigation** → (Updates using useNavigate/Link)
3. **Render New Route** → (Displays new component)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
|   Click Nav Item   |
+---------------------+
         |
         v
+---------------------+
|   Route Change     |
| (useNavigate/Link) |
+---------------------+
         |
         v
+---------------------+
|  Update Router     |
+---------------------+
         |
         v
+---------------------+
|  Render Component  |
+---------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

### **Key Notes:**
- **Navigation items** trigger route changes
- **useNavigate** handles programmatic navigation (Login)
- **Link components** handle declarative routing
- React Router **manages route updates**
- Component **re-renders** based on current route

This **DFD represents the React Home component's navigation flow**.
