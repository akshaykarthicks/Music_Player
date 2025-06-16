# Music Player Django

A simple and modern music player web application built with Django. This player allows users to browse through songs, play audio, view lyrics, and navigate between tracks.

## Dark Mode 
![image](https://github.com/user-attachments/assets/06cfe850-84ee-4079-a988-8acfe785de8a)

## Light Mode 
![image](https://github.com/user-attachments/assets/eb0f50cf-aec5-461d-8ada-0bf935549d21)

## Features

*   **Responsive UI:** A clean and intuitive user interface designed for a seamless experience.
*   **Theme Toggle:** Switch between light and dark themes for personalized viewing.
*   **Music Playback:** Play, pause, and seek through songs.
*   **Lyrics Display:** View lyrics for the currently playing song (if available).
*   **Song Navigation:** Easily navigate to the next or previous song in the playlist.

## Technologies Used

*   **Backend:** Django (Python Web Framework)
*   **Frontend:**
    *   HTML5
    *   CSS3
    *   JavaScript
*   **Database:** SQLite (default for Django development)

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

*   Python 3.x
*   pip (Python package installer)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd MUSIC_DJ
```

### 2. Create a Virtual Environment (Recommended)

```bash
python -m venv venv
```

### 3. Activate the Virtual Environment

*   **On Windows:**
    ```bash
    .\venv\Scripts\activate
    ```
*   **On macOS/Linux:**
    ```bash
    source venv/bin/activate
    ```

### 4. Install Dependencies

```bash
pip install Django
# You might have other dependencies. If you have a requirements.txt, use:
# pip install -r requirements.txt
```

### 5. Database Migrations

Apply the database migrations to set up your database schema:

```bash
python manage.py migrate
```

### 6. Create a Superuser (for Admin Panel access)

You'll need a superuser account to access the Django admin panel and manage songs.

```bash
python manage.py createsuperuser
```
Follow the prompts to create your username, email, and password.

### 7. Collect Static Files

```bash
python manage.py collectstatic
```

### 8. Run the Development Server

```bash
python manage.py runserver
```

The application will be accessible at `http://127.0.0.1:8000/`.

## Adding Songs and Lyrics

You can add songs and their corresponding lyrics through the Django admin panel:

1.  Go to `http://127.0.0.1:8000/admin/`.
2.  Log in with your superuser credentials.
3.  Navigate to the "Songs" section under the "APP" application.
4.  Add new songs or edit existing ones, populating the 'lyrics' field for each.

## Project Structure

```
MUSIC_DJ/
├── Music/
│   ├── App/
│   │   ├── migrations/
│   │   ├── static/        # CSS, JavaScript files
│   │   │   └── script.js
│   │   ├── templates/     # HTML templates
│   │   │   ├── index.html
│   │   │   └── main.html
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   └── views.py
│   ├── Music/             # Main project configuration
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3
│   └── manage.py
├── media/                 # Uploaded audio and image files
├── README.md
├── tamil_songs_sample_500.csv
└── venv/                  # Python virtual environment
```

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

