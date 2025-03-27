## App name: PeePoo

### The frontend has these pages: 

- **Homepage**: 
    - This main page has a search feature on the top to search for the closest bathroom. You can choose to use geolocation or type your location in. (currently working on this)
    - After searching you will see a list of closest locations underneath the search feature. 
    - You will be able to toggle between list view and map view. 
    - Currently this just has a list of pre-populated hyperlinked list of bathroom locations. 

- **Bathroom profile**:
    - When the user clicks on the bathroom from the list populated on the Homepage, the info about that particular bathroom will load here.
    - Most recent reviews and comments will show up on the bathroom profile.
    - The "I visited" button will direct the user to the Bathroom review page.

- **Bathroom review form**:
   - The user will evaluate the bathroom based on cleanliness and wait time with optional questions about availability of toiletries and features. 
   - This information will be submitted and

- **Add a bathroom**:
   - If a bathroom is not in the system, users can add a bathroom to the database.

- **Sign Up /Login Page**:
   - self-explanatory

- **User profile**:
   - The user will be able to update their login information and password.
   - They can see their list of favorited bathrooms. 
   - They can see a list of comments that they have made. 

"dependencies": 
    "@tailwindcss/vite": "^4.0.17",
    "axios": "^1.8.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.4.0",
    "tailwindcss": "^4.0.17"
 
  "devDependencies": 
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "vite": "^6.2.0"

