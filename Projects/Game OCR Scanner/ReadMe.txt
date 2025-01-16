Utlizes Python, Tesseract OCR AI, and Uvicorn local servers to auto export creations from games in a way that can be used within a studio/IDE.

NOTE: YOU MUST HAVE TESSERACT INSTALLED FOR THIS TO WORK

server.py must be active via uvicorn to call things from the local server.
main.py can be used to gather data from said game
replicator.lua is an example of how the json is delivered and parsed.
data.json is where data is stored before being transferred.
