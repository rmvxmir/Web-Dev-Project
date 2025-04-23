# Our Project - AAA (Triple A) Rentals 🚗

AAA Rentals is a modern web-based car rental service that offers customers an easy and flexible way to rent vehicles from premium, semi-luxury, and luxury segments. Whether you need a car for just a few hours or for several days, AAA Rentals provides a seamless experience with real-time availability, secure booking, and user-friendly management tools.

---

## Tech Stack:

- Frontend: Angular, TypeScript, HTML, CSS
- Backend: Python, Django, Django REST Framework
- Database: SQLite
- Tools: Postman

---

## Team Members:

- Amir Raimov - Backend Dev, Tester
- Alibi Ulanuly - Backend Dev, DB Manager
- Adil Nusubaliyev - Frontend Dev & UI Designer

---

## How to run 🚀
### 1. Clone the Repository
```bash
git clone https://github.com/rmvxmir/Web-Dev-Projects.git
cd Web-Dev-Project && cd CarRental_back
```
### 2. Set up a Virtual Env
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
### 3. Set up the backend
```bash
python3 manage.py migrate
python3 manage.py runserver
```
- By default, the backend will run on: http://127.0.0.1:8000
### 4. Set up the frontend
```bash
cd .. & cd CarRental_front
npm install      # if not already
ng serve
```
- By default, the frontend will run on: http://localhost:4200
### Now you can take a glance at AAA rentals yourself!
