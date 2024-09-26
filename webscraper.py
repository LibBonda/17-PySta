import requests
from bs4 import BeautifulSoup

# Define a popular search engine (replace with your preferred one)
search_engine_url = "https://www.google.com/search?q="

# Example keyword related to in-demand products
keyword = "sustainable clothing"

# Construct the search URL
search_url = search_engine_url + keyword

# Send a GET request (adjust headers or user-agent if needed)
response = requests.get(search_url, headers={'User-Agent': 'My Research Script'})

# Check for successful response
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find relevant elements (adjust selectors based on search engine)
    results = soup.find_all('h3', class_='r')

    # Extract potential product titles and potentially refine them here
    potential_products = [result.text.strip() for result in results]

    # Print the extracted potential products
    print("Potential products related to", keyword, ":")
    for product in potential_products:
        print("-", product)

else:
    print("Error fetching search results:", response.status_code)