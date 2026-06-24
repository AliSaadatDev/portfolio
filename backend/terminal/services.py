import requests

BASE_URL = "http://127.0.0.1:8000/api"

def get_profile():
    return requests.get(f"{BASE_URL}/profile/").json()

def get_skills():
    return requests.get(f"{BASE_URL}/skills/").json()

def get_projects():
    return requests.get(f"{BASE_URL}/projects/").json()

def get_experience():
    return requests.get(f"{BASE_URL}/experience/").json()

