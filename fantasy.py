import random

def generate_fantasy_name():
    prefixes = ["Ael", "Thal", "Zor", "Glyn", "Brim", "Vael", "Kael"]
    suffixes = ["thas", "dane", "wick", "ryn", "more", "vorn", "ius"]
    
    # Randomly pick one from each list and join them
    name = random.choice(prefixes) + random.choice(suffixes)
    return name.capitalize()

# Generate a list of 5 names
fantasy_names = [generate_fantasy_name() for _ in range(5)]
print(f"Fantasy Names: {fantasy_names}")
