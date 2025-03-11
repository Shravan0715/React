# Data Flow Diagram (DFD) for Browser Router App

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
|   Navigation    |
|  (Link Items)   |
+------------------+
         ↓
+------------------+
| Router (Routes)  |
+------------------+
         ↓
+-------------------------+
|     Page Components     |
|-------------------------|
| - Home (/)             |
| - About (/about)       |
| - Contact (/contact)   |
| - NotFound (*)         |
+-------------------------+
```

## Component Flow Details

1. **Navigation Flow**
   - User clicks navigation link
   - Link components handle URL updates
   - Router captures path changes

2. **Routing Logic**
   - Routes match URL patterns
   - Exact matches render specific components
   - Wildcard (*) catches invalid routes

3. **Component Rendering**
   - Home component for root path (/)
   - About component for /about
   - Contact component for /contact
   - NotFound component for unmatched paths

## Key Features
- Client-side routing
- Navigation menu persistence
- Clean URL patterns
- 404 error handling
- Component-based architecture

## Data Flow Notes
- All routing handled client-side
- Single-page application (SPA) structure
- URL-based component rendering
- Consistent navigation interface
- Error boundary implementation
