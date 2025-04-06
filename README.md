# Expert Users Directory (FYLTURA Frontend Test)

A React-based web application that displays a list of users, allows viewing albums per user, and displays photos with both small and large versions — powered by [JSONPlaceholder API](https://jsonplaceholder.typicode.com/). Built as a frontend test assignment for Expert Sieve (FYLTURA).

---

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Axios**
- **Vitest** (Unit testing)
- **Cypress** (End-to-End testing)

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://gitlab.fyltura.de/YOUR-REPO.git
cd expert-users
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Application
bash
Copy
Edit
npm run dev
App will be running at http://localhost:5173

Run Unit Tests (Vitest)
bash
Copy
Edit
npm run test
Tests are written using @testing-library/react and vitest.

Run E2E Tests (Cypress)
bash
Copy
Edit
npx cypress open
This opens the Cypress Test Runner. Choose E2E Testing and run the test cases.

To run E2E tests in headless mode:

bash
Copy
Edit
npx cypress run
✅ Features Implemented
✅ Fetch and display users and their addresses

✅ View albums of a selected user inside a modal

✅ View photos of a selected album with small and big versions

✅ Modular structure with reusable components

✅ Responsive UI using Tailwind CSS

✅ Unit tests with Vitest

✅ End-to-End tests with Cypress

📁 Project Structure
css
Copy
Edit
src/
├── Pages/
│   └── UsersList.tsx
├── components/
│   ├── UserCard.tsx
│   ├── AlbumModal.tsx
│   └── PhotoGallery.tsx
├── api/
│   ├── usersApi.ts
│   ├── albumApi.ts
│   └── photoApi.ts
├── __tests__/ (Unit tests)
└── App.tsx
 Git Workflow
All progress was committed with meaningful messages like:

bash
Copy
Edit
git add .
git commit -m "feat: implemented user album & photo gallery with tests"
git push origin main
👨‍💻 Author
Alok Singh
Frontend Developer
📍 Based in Austria
📧 aloksingh.dev@gmail.com

📝 Notes
The app uses public JSONPlaceholder APIs (no auth or API key required).

Fully functional and test-covered.

Clean and intuitive UX for exploring users and their albums/photos.

Thanks for the opportunity! 🙏
Looking forward to your feedback.