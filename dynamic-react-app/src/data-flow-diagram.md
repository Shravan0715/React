# Data Flow Diagram (DFD) for Dynamic React App

## Level 0 (Context Diagram)

```
+------------------+
|      User       |
+------------------+
         ↕
+------------------+
|   React Router   |
+------------------+
         ↕
+------------------+
|  Page Components |
+------------------+
```

## Level 1 (Detailed Flow)

```
+------------------+
|      User       |
+------------------+
         ↓
+------------------+
|     Navbar      |
+------------------+
         ↓
+------------------+
|  Route Handler   |
+------------------+
         ↓
+-------------------------+
|     Page Components     |
|-------------------------|
| - Home                 |
| - About                |
| - Contact              |
| - Post (with ID param) |
| - NotFound             |
+-------------------------+
```

## Component Flow Details

1. **Initial Flow**
   - User enters application
   - Navbar is always visible
   - Default route (/) shows Home component

2. **Navigation Flow**
   - User clicks navigation link
   - Router captures URL change
   - Matches route with component
   - Renders appropriate component

3. **Dynamic Routes**
   - Post route accepts ID parameter
   - URL pattern: /post/:id
   - Renders Post component with specific data

4. **Error Handling**
   - Invalid routes trigger NotFound component
   - Wildcard route (*) catches all unmatched paths

## Key Features
- Single Page Application (SPA) architecture
- Client-side routing
- Persistent navigation
- Dynamic route parameters
- Error boundary with 404 handling
- Component-based structure

## Data Flow Notes
- All routing is client-side
- No server interactions shown in current implementation
- Navigation state managed by React Router
- Components render based on URL patterns
- Navbar provides consistent navigation interface
- Error handling ensures user experience

