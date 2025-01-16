from fastapi import FastAPI
from PIL import Image
from time import sleep
import pyautogui
from pynput import mouse
import pytesseract
import numpy as np
import json
from pathlib import Path
from pynput.keyboard import Key, Listener



def capture(key):
    try:
        if key.char == 'f':
            print("\n"*100)
            info = getDataPartData()
        if info:
            saveToFile(info)

        visualize()
    except:
        pass
    

def visualize():
    file = open("toLoad.json", "r")
    text = file.read()
    file.close()
    captured = len(json.loads(text))
    print("Total Captured: " +  str(captured))
    print("\n")
    print("Quick Notes:")
    print("   - Be sure that 'Fix OC Position' is on all the time when exporting to studio.")
    print("   - Check rotation beforehand, and if needed enable 'Fix OC Rotation (if broken)'.")
    print("To port to studio:")
    print("   1) Run 'uvicorn Server:app' in a terminal")
    print("   2) Have the ObbyMania plugin installed")
    print("   3) Click 'CALL OBBYPORT', and it'll automatically build what you selected.")


def saveToFile(info):
    if not Path("toLoad.json").is_file():
        newfile = open("toLoad.json", "w")
        newfile.write("[]")
        newfile.close()

    file = open("toLoad.json", "r")
    text = file.read()
    file.close()

    data = json.loads(text)
    inList = False
    for i in data:
        if i == info:
            inList = True
            break

    if not inList:
        data.append(info)

        file = open("toLoad.json", "w")
        file.write(json.dumps(data))
        file.close()

def cleanNum(str):
    strList = [x for x in str]
    str = "".join(strList)
    str = str.replace(",", ".")
    str = str.replace("~~", "-")
    str = str.replace("~", "-")
    return str

def getDataPartData():
    try:
        image = pyautogui.screenshot(region=(1740, 425, 170, 150))
        dataArray = np.array(image)
        str = pytesseract.image_to_string(dataArray)
        str = str.replace(" ", "")
        str = ",".join(str.split("\n"))
        

        initList = str.split(",")
        charList = []
        for i in initList:
            if i != "":
                charList.append(i)
        
        pos = 0
        for i in charList:
            if pos != 9:
                charList[pos] = float(cleanNum(i))
            else:
                if i[len(i)-1] == "v":
                    i = i[:-1]
                charList[pos] = i
            pos += 1
            
        info = [[charList[0], charList[1], charList[2]], [charList[3], charList[4], charList[5]], [charList[6], charList[7], charList[8]], charList[9]]
        print(info)
        return info
    except Exception as e:
        print("[!] Verify part selection, or import manually.")
        print("  > " + e)

print("Press 'f' while in Obby Creator to capture a part!")
print("Refer to 'reference.png' for how to have the property tab.")
print("Note that this is built for windowed 1920x1080, will add support soon :)")
with Listener(on_press = capture) as listener:   
    listener.join()