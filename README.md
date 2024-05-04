# Flask + React Starter Project

This is a simple starter project that combines Flask for the backend and React for the frontend.

## Backend (Flask)

1. **Set Up**:

   - Create a virtual environment:
     ```
     mkdir backend
     cd backend
     python -m venv env
     
     source env/bin/activate  # Linux/Mac
     env\Scripts\activate  # Windows
     ```
   - Install Flask and Flask-CORS:
     ```
     pip install Flask Flask-CORS
     ```

2. **Running the Flask App**:
   - Navigate to the `backend/` directory.
   - Run the Flask app:
     ```
     cd backend
     touch app.py
     python app.py
     ```

## Frontend (React)

1. **Set Up**:

   - Create a React app:
     ```
     npm init vite@latest frontend --template react
     cd frontend
     ```

2. **Install Axios**:

   - Install Axios for making API requests:
     ```
     npm install axios
     ```

3. **Running the React App**:
   - Update the Axios URL in your React component to point to the Flask API endpoint.
   - Start the React development server:
     ```
     npm start
     ```

## Project Structure

- **backend/**: Contains the Flask application.
- **frontend/**: Contains the React application.

## Additional Notes

- Make sure to handle CORS properly in your Flask application to allow requests from the React frontend.
- Use free stock photo websites for sample images in your application.

Happy coding!
