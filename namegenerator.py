from faker import Faker

# Initialize the generator (you can even set it to different locales like 'es_ES')
fake = Faker()

def get_profile_names(count=3):
    profiles = []
    for _ in range(count):
        profiles.append({
            "full_name": fake.name(),
            "email": fake.email(),
            "job": fake.job()
        })
    return profiles

# Generate 3 realistic user profiles
user_data = get_profile_names(3)

for user in user_data:
    print(f"Name: {user['full_name']} | Job: {user['job']}")
