# Data Flow Diagram (DFD) for Counter App Component

## DFD Level 0 (Context Diagram)

### Entities & Flow:
- **User** → Clicks Button → **Counter Component** → Updates & Displays Count

```
+------------------+
|      User       |
+------------------+
         |
         v
+-------------------+
|   Button Click    |
+-------------------+
         |
         v
+-------------------+
| Counter Component |
+-------------------+
         |
         v
+-------------------+
| Display Count     |
+-------------------+
```

## DFD Level 1 (Detailed Flow)

### Processes:
1. **User Clicks Button** → (Increment/Decrement)
2. **State Update** → (Using useState hook)
3. **Render New Count** → (Display updated value)

```
+------------------+
|      User       |
+------------------+
         |
         v
+---------------------+
| Click Inc/Dec Button|
+---------------------+
         |
         v
+---------------------+
|   Update State     |
| (useState Hook)    |
+---------------------+
         |
         v
+---------------------+
|  Re-render Count   |
+---------------------+
         |
         v
+------------------+
|      User       |
+------------------+
```

### Key Notes:
- Counter uses React `useState` hook for state management
- Two main actions: increment and decrement
- State updates trigger automatic re-renders
- Component maintains single count value
- UI updates reflect state changes immediately

