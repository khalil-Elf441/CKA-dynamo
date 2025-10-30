# CKA Dynamo

This is a React application for Certified Kubernetes Administrator (CKA) exam preparation, following the "Docs as Exam" concept.

## Getting Started

### Prerequisites

* Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/khalil-Elf441/CKA-dynamo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd CKA-dynamo
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the development server, run:

```sh
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

## Features

*   **Mock Exams:** A list of mock exams for the CKA certification.
*   **Exam Interface:** A simulated exam environment with questions and solutions.
*   **Dynamic Content:** Exam data is loaded from a central file, making it easy to add new exams and questions.

## Deployment

This application is designed to be easily deployed to services like GitHub Pages, Vercel, or Netlify. To create a production build, run:

```sh
npm run build
```

This will create a `build` directory with the optimized and minified files for production.