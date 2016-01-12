#Nomihodai Service (Hackathon)

## How to install
If you don't have virtualenv please install it first by:
```sudo pip install virtualenv```

If you have virtualenv then proceed as follows:

1. Create a new virtual environment: ```virtualenv venv```
2. Install requirements
  * ```. venv/bin/activate```
  * ``` pip install -r requirements.txt```

## How to run start the service

1. Load your virtual environment if you haven't done it yet:
```. venv/bin/activate```
2. Start the server:
  * ```cd nomihodai_service```
  * ```python manage.py runserver```

