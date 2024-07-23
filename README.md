
# Customizable Grid Layout

This project is a customizable grid layout built with React and Tailwind CSS. Users can add, resize, and store widgets in a flexible grid layout.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Design Decisions](#design-decisions)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to set up the project locally.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/customizable-grid-layout.git
   cd customizable-grid-layout
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- **Add Widgets:** Use the buttons at the top of the page to add different types of widgets to the grid.
- **Resize Widgets:** Drag the edges or corners of the widgets to resize them.
- **Move Widgets:** Click and drag the widgets to reposition them within the grid.
- **Store Widgets:** The state of the widgets (position, size, type) is stored in local storage and will persist across page reloads.

## Code Structure

The project is organized as follows:

```
react-app/
├── node_modules/
├── public/
│   ├── img/
│   │   └── img-one.png
│   └── index.html
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── ButtonWidget.jsx
│   │   ├── ChartWidget.jsx
│   │   ├── CustomGrid.jsx
│   │   ├── ImageWidget.jsx
│   │   ├── ListWidget.jsx
│   │   └── TextWidget.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

### Components

- **ButtonWidget.jsx:** Defines the Button widget component.
- **ChartWidget.jsx:** Defines the Chart widget component using `react-chartjs-2`.
- **CustomGrid.jsx:** The main component that manages the grid layout and handles adding, resizing, and moving widgets.
- **ImageWidget.jsx:** Defines the Image widget component.
- **ListWidget.jsx:** Defines the List widget component.
- **TextWidget.jsx:** Defines the Text widget component.

### Styles

- **App.css:** Contains global styles for the application.
- **index.css:** Includes Tailwind CSS setup and global font settings.

### Main Files

- **App.jsx:** The main application component that renders the `CustomGrid` component.
- **main.jsx:** Entry point for the React application.

## Design Decisions

1. **Grid Layout:** 
   - The `react-grid-layout` library is used to create a responsive, draggable, and resizable grid layout.
   
2. **State Management:** 
   - Widget state (position, size, type) is managed locally within the `CustomGrid` component and persisted using local storage.

3. **Styling:**
   - Tailwind CSS is used for utility-first styling to quickly and efficiently style the components.
   - Custom CSS is added for specific widget and layout styles.

4. **Component Structure:**
   - Each widget is defined as a separate component to promote reusability and modularity.
   - The `CustomGrid` component handles the overall layout and user interactions.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit them:**
   ```sh
   git commit -m "Add some feature"
   ```
4. **Push to the branch:**
   ```sh
   git push origin feature/your-feature-name
   ```
5. **Create a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
