# Data Flow Diagram (DFD) for Context API App

## Level 0 (Context Diagram)
```
+------------------+
|      User       |
+------------------+
         ↕
+------------------+
| Theme Provider   |
+------------------+
         ↕
+------------------+
| Theme Switcher   |
+------------------+
```

## Level 1 (Detailed Flow)
```
+------------------+
|      User       |
+------------------+
         ↓
+------------------+
|  Theme Context   |
|------------------|
| - theme state    |
| - setTheme func  |
+------------------+
         ↓
+------------------+
| Theme Switcher   |
|------------------|
| - Toggle Button  |
| - Theme Display  |
+------------------+
```

## Component Flow Details

1. **Theme Context Flow**
   - ThemeProvider wraps the application
   - Manages theme state (light/dark)
   - Provides theme context to child components

2. **Theme Switcher Flow**
   - Consumes theme context using useContext
   - Displays current theme state
   - Toggles theme via button click

3. **State Management**
   - Theme state flows top-down via context
   - State updates flow bottom-up via setTheme
   - Toggle triggers state changes

## Key Features
- Context-based state management
- Theme switching capability
- Centralized theme control
- Component composition
- React hooks implementation

## Data Flow Notes
- Theme state persists in context
- UI updates reflect theme changes
- Single source of truth for theme
- Bidirectional data flow
- Efficient state propagation

