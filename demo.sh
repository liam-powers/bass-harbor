#!/bin/bash

# open first terminal window and run back-end
osascript -e 'tell application "Terminal" to do script "cd /Users/liam/Documents/Code/Serious_Projects/Bass_Harbor/Back-End && node ."'

# open second terminal window and run front-end
osascript -e 'tell application "Terminal" to do script "cd /Users/liam/Documents/Code/Serious_Projects/Bass_Harbor/Front-End/frontend && bun dev"'