# To-Do App

This To-Do App is a simple and interactive application designed to help users manage their tasks efficiently. It features a clean user interface and provides functionalities for creating, editing, completing, and deleting tasks.

---

## Features

- **Add Tasks**: Create new tasks with a title and description.
- **Edit Tasks**: Update the title and description of existing tasks.
- **Delete Tasks**: Remove unwanted tasks from your list.
- **Mark as Completed**: Move tasks to the "Completed" section upon finishing them.
- **View Completed Tasks**: Check tasks that have been marked as completed, along with their completion timestamp.
- **Local Storage**: Automatically saves tasks and completed tasks to the browser's local storage, ensuring data persistence across sessions.

---

## Technologies Used

- **React**: Front-end library for building the user interface.
- **React Icons**: Icon library for enhanced visual elements.
- **CSS**: Custom styling for a modern and responsive UI.
- **Local Storage**: Browser-based storage for persisting tasks.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (LTS version recommended)
- **npm** or **yarn** (Node Package Manager)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

Start the development server:

```bash
npm start
# or
yarn start
```

Visit `http://localhost:3000` in your browser to view the application.

---

## Usage

1. **Add a Task**:
   - Fill in the title and description fields.
   - Click the "Add" button to create a new task.

2. **Edit a Task**:
   - Click the edit icon (✎) next to the task.
   - Update the title and/or description.
   - Click the "Update" button to save changes.

3. **Delete a Task**:
   - Click the delete icon (🗑) next to the task to remove it.

4. **Mark as Completed**:
   - Click the check icon (✔) to mark a task as completed.
   - View completed tasks in the "Completed" section.

5. **Clear Completed Tasks**:
   - Remove completed tasks by clicking the delete icon (🗑) in the "Completed" section.

---

## Folder Structure

```plaintext
src
├── components
│   ├── TodoApp.jsx  # Main component for the app
├── assets
│   ├── bragosiLogo2.png  # Logo image used in the app
├── App.css  # Styling for the app
├── index.js  # Entry point for React
```

---

## Future Enhancements

- **Drag and Drop**: Reorder tasks within the list.
- **Categorization**: Organize tasks by category or priority.
- **Authentication**: Enable user accounts for cloud-based task storage.
- **Search Functionality**: Quickly find tasks by keywords.
- **Progress Tracking**: Add visual indicators for task completion progress.

---



## Author

[Boluwatife](https://github.com/your-github-profile)

Feel free to fork this repository, submit issues, or contribute to its development!
