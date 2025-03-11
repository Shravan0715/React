# System Data Flow Diagram

## Level 0 (Context Diagram)
+-------------------+          +----------------------+
|                   |          |                      |
|      User         |--------->|   React Application  |
|                   |          |                      |
+-------------------+          +----------------------+

## Level 1 (Main Components)
+----------------+     +-----------------+     +------------------+
|                |     |                 |     |                  |
| ThemeProvider  |---->|  AuthProvider   |---->|    Router       |
|                |     |                 |     |                  |
+----------------+     +-----------------+     +------------------+
                                                       |
                                                       v
                                              +------------------+
                                              |     Routes       |
                                              |   /  -> Home     |
                                              | /login -> Login  |
                                              | /search -> Search|
                                              | /about -> About  |
                                              +------------------+

## Level 2 (Component Data Flow)
1. Authentication Flow
   User -> Login Component -> AuthProvider -> Protected Routes
   - LoginForm handles user input
   - AuthContext manages authentication state
   - PrivateRoute protects authenticated routes

2. Theme Flow
   ThemeProvider -> Components -> Theme Updates
   - ThemeContext provides theme state
   - useTheme hook for theme access
   - Theme toggle functionality

3. Search Flow
   User -> SearchBar -> SearchList -> ResultCard
   - SearchBar captures user input
   - SearchList manages search state
   - ResultCard displays individual items

## Data Stores
1. Authentication Store (AuthContext)
   - User credentials (email/password)
   - Auth state (isAuthenticated)
   - Token management
   - Login/logout functions

2. Theme Store (ThemeContext)
   - Current theme (light/dark)
   - Theme toggle function
   - Theme preferences persistence

3. Search Store (SearchContext)
   - Search query state
   - Results management
   - Pagination state
   - Filter options

## External Entities
1. User (Client)
   - Performs authentication
   - Conducts searches
   - Interacts with UI elements
   - Views search results

2. Browser Storage
   - Local storage for theme preference
   - Session storage for auth state
   - Route management
   - State persistence

## Process Descriptions
1. Authentication Process
   - Form validation in LoginForm
   - Token generation and storage
   - Protected route management
   - Auth state updates

2. Theme Management
   - Theme context initialization
   - Theme switching logic
   - Local storage persistence
   - Component styling updates

3. Search Operations
   - Search input handling
   - Results fetching and display
   - Pagination implementation
   - Filter application

4. Navigation Flow
   - Route configuration
   - Protected route handling
   - Navigation state management
   - Page transitions
