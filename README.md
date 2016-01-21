#Nomihodai Service (Hackathon)

## How to install
If you don't have virtualenv please install it first by:
```sudo pip install virtualenv```

If you have virtualenv then proceed as follows:

1. Create a new virtual environment: ```virtualenv venv```
2. Install requirements
  * ```. venv/bin/activate```
  * ```pip install -r requirements.txt```
  * ```cd nomihodai_service```
  * ```npm install -g bower```
  * ```bower install```

## How to start the service

1. Load your virtual environment if you haven't done it yet:
```. venv/bin/activate```
2. Start the server:
  * ```cd nomihodai_service```
  * ```python manage.py runserver```
3. Visit ```localhost:8000/```

## How to browse the API

1. Start the service
2. Visit ```localhost:8000/api/v1/nomihodai```

## How to add more Food

1. Start the service
2. Visit ```localhost:8000/admin```
3. Log in with *admin/nomihodai123*
4. Click on **Foods** and **Add Food**
