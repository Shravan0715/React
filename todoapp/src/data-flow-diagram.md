# Data Flow Diagram (DFD) for Todo App

## Level 0 (Context Diagram)
```
+------------------+
|      User       |
+------------------+
         ↕
+------------------+
|    Todo App     |
+------------------+
         ↕
+------------------+
|  Task Management |
+------------------+
```

## Level 1 (Detailed Flow)
```
+------------------+
|      User       |
+------------------+
         ↓
+------------------+
|   Input Field   |
+------------------+
         ↓
+-------------------------+
|    State Management    |
|------------------------|
| - task (current input) |
| - tasks (task array)   |
+-------------------------+
         ↓
+-------------------------+
|    Task Operations     |
|------------------------|
| - Add Task            |
| - Delete Task         |
+-------------------------+
         ↓
+-------------------------+
|    Task Display        |
|------------------------|
| - Task List           |
| - Delete Buttons      |
+-------------------------+
```

## Component Flow Details

1. **State Flow**
   - task: Manages current input text
   - tasks: Stores array of all tasks
   - Both managed by useState hooks

2. **Task Operations Flow**
   - handleAddTask: Adds new tasks to list
   - handleDeleteTask: Removes tasks by index
   - Input validation prevents empty tasks

3. **User Interface Flow**
   - Input field for task entry
   - Add Task button triggers addition
   - Task list displays all tasks
   - Delete button per task

## Key Features
- Single input task management
- Real-time task list updates
- Individual task deletion
- Empty task validation
- Clean component structure

## Data Flow Notes
- State updates trigger re-renders
- Task operations modify tasks array
- UI reflects current state
- Event handlers manage user interactions
