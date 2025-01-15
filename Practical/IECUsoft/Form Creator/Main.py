import json
from time import sleep as wait
import tkinter as tk

dependancies = {
    "InputField" : "import InputField from '../FormsUI/TextField/index';",
    "SelectField" : "import SelectField from '../FormsUI/Select/index';",
}

dummydata = json.load(open('Saves/Example.json'))
#json.dump(dummydata, open('Saves/ExampleTest.json', 'w'))

#wn = tk.Tk()
#wn.grid()


def convert(data):
    formvar = data["Prefix"]
    variables = ''
    code = ''
    depends = []
    for component in data["Parts"]:
        varname = component["VarName"]
        label = component["Label"]
        vartype = component["Style"]["Type"]
        details = component["Style"]["Details"]
        variable = f"{formvar}__{varname}"

        snippet = ''
        if vartype == 'InputField':
            snippet += '<Grid item xs={6}>'
            snippet += f'\n  <InputField name="{variable}" label="{label}" />'
            snippet += f'\n</Grid>'
        elif vartype == 'SelectField':
            snippet += '<Grid item xs={4}>'
            snippet += '\n  <SelectField'
            snippet += f'\n    name="{variable}"'
            snippet += f'\n    label="{label}"'
            snippet += '\n  >'
            for i in details:
                text = i[0]
                value = i[1]
                snippet += f'\n    <MenuItem value="{value}">{text}</MenuItem>'
            snippet += '\n  </SelectField>'
            snippet += '\n</Grid>'
            snippet += '<Grid item xs={2}>'
            snippet += f'\n  <InputField name="{variable}" label=" " />'
            snippet += f'\n</Grid>'
  

        if dependancies[vartype] not in depends:
            depends.append(dependancies[vartype])
        code += f'{snippet}\n\n'
        variables += f"{label}: {variable}\n"

    return {
        "Name" : data["Name"],
        "Author" : data["Author"],
        "Prefix" : data["Prefix"],
        "Dependancies" : depends,
        "Variables" : variables,
        "Code" : code
    }

def export(data):
    name = data["Name"]
    file = open(f"Exports/{name}.txt", "w")
    text = ''

    text += '##### DEPENDANCIES #####\n\n'
    for i in data["Dependancies"]:
        text += f"{i}\n"

    text += '\n\n##### VARIABLES #####\n\n'
    text += data["Variables"]
    text += '\n\n##### CODE #####\n\n'
    text += data["Code"]
    
    


    file.write(text)
'''
def clear():
    for widget in wn.winfo_children():
        widget.destroy()

def mainmenu():
    clear()
    tk.Label(text="Simple Form Maker Tool\nBy Alden Hilton").grid(column=0,row=0)
    tk.Label(text=" ").grid(column=0,row=1)
    tk.Button(text="New Form", command=lambda:newform()).grid(column=0,row=2)
    tk.Button(text="Load Form", command=lambda:loadform()).grid(column=0,row=3)

def check():
    pass

def create():
    pass

def newform():
    clear()
    tk.Label(text="New Form").grid(column=1,row=0)
    tk.Label(text=" ").grid(column=0,row=1)
    formname = tk.StringVar()
    tk.Label(text="Form Name:").grid(column=0,row=2)
    tk.Entry().grid(column=1,row=2)
    formauthor = tk.StringVar()
    tk.Label(text="Form Author:").grid(column=0,row=3)
    tk.Entry().grid(column=1,row=3)
    formprefix = tk.StringVar()
    tk.Label(text="Prefix:").grid(column=0,row=4)
    tk.Entry().grid(column=1,row=4)
    tk.Button(text="Create", command=lambda:create()).grid(column=1,row=5)
    tk.Button(text="Back", command=lambda:mainmenu()).grid(column=0,row=5)

def loadform():
    pass

mainmenu()
wn.mainloop()
'''

data = convert(dummydata)
export(data)