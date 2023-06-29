#!/bin/bash

# Set the URL
url="$1"

# Send the POST request using curl and display the response body
response=$(curl -sX POST -d "email=test@gmail.com" -d "subject=I will always be here for PLD" "$url")
echo "$response"
