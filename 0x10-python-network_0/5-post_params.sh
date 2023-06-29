#!/bin/bash
### Sends POST request with variables, displays body of response
curl -sX POST -d "email=test@gmail.com" -d "subject=I will always be here for PLD" "$1"
