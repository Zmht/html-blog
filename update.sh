#!/bin/bash

# Get the current date
currentDate=$(date +"%Y-%m-%d_%H-%M-%S")

# Add all changes to the staging area
git add -A

# Commit the changes with the current date as the message
git commit -m "$currentDate"

# Push the changes to the main branch
git push origin main