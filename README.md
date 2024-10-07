# Configurable Weather Dashboard

## Overview

The **Configurable Weather Dashboard** is a simple and user-friendly web application built using **TypeScript** and **Material-UI (MUI)**. It allows users to view weather information for various locations and customize their dashboard by adding or removing weather widgets. The application saves its state across sessions using **localStorage**, making it easy to access previously configured settings.

## Features

- **Add and Remove Widgets**: Users can dynamically add weather widgets for different locations and remove them as needed.
- **Current Weather Information**: Each widget displays the current weather, including temperature, weather conditions, and relevant icons.
- **Temperature Unit Toggle**: Users can switch between Celsius and Fahrenheit using a context provider.
- **Responsive Design**: The dashboard is fully responsive, ensuring a smooth experience on both desktop and mobile devices.
- **Persistent State**: The application saves the configuration of added widgets in the browser's localStorage, so the setup persists between sessions.
- **Modern UI**: The use of Material-UI provides a sleek and professional look with improved accessibility and usability.

## Tech Stack

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **TypeScript**: A superset of JavaScript that provides static typing.
  - **Material-UI**: A popular React UI framework that helps build responsive and elegant UIs.

- **State Management**:
  - **React Context API**: For managing temperature unit toggling across the application.

- **Styling**:
  - **CSS-in-JS**: Utilized through Material-UI's styling solutions.

## Local Setup

To get started with the Configurable Weather Dashboard, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: v12 or later
- **npm**: v6 or later

### Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/configurable-weather-dashboard.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd configurable-weather-dashboard
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Open in Browser**: 
   Visit `http://localhost:3000` in your web browser to view the dashboard.