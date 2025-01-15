import tkinter as tk
window = tk.Tk()
'''
"InputField" will create a input field
"RepeatField" will create a repeat field with repeats
'''
globalvars = {}
data = {}
form = {
    "input_box_1" : {
        "DisplayName" : "Input Box 1",
        "Type" : "InputField"
    },
    "repeat_field_1" : {
        "DisplayName" : "Repeating Field 1",
        "Type" : "RepeatField",
        "RepeatCount" : 3,
        "Descendants" : {
            "input_box_2" : {
                "DisplayName" : "Input Box 2",
                "Type" : "InputField"
            },
            "input_box_3" : {
                "DisplayName" : "Input Box 3",
                "Type" : "InputField"
            },
        }
    },
    "repeat_field_2" : {
        "DisplayName" : "Repeating Field 2",
        "Type" : "RepeatField",
        "RepeatCount" : 3,
        "Descendants" : {
            "input_box_4" : {
                "DisplayName" : "Input Box 4",
                "Type" : "InputField"
            },
            "repeat_field_3" : {
                "DisplayName" : "Repeating Field 3",
                "Type" : "RepeatField",
                "RepeatCount" : 3,
                "Descendants" : {
                    "input_box_5" : {
                        "DisplayName" : "Input Box ",
                        "Type" : "InputField"
                    },
                    "input_box_6" : {
                        "DisplayName" : "Input Box 6",
                        "Type" : "InputField"
                    },
                }
            }
        }
    }
}


def submit(currentvars = []):
    save(currentvars)
    print("\n\n-=Output Data=-")
    print(data)


def save(currentvars = []):
    for i in currentvars:
        if type(globalvars[i]) == type(tk.StringVar()):
            data[i] = globalvars[i].get()
            
def clear():
    items = window.winfo_children()
    for i in items:
        i.destroy()

def render(dictionary):
    clear()
    currentvars = []
    y = -1
    for k, v in dictionary.items():
        x = 0
        y += 1
        try:
            if v["Type"] == "InputField":
                globalvars[k] = tk.StringVar()
                currentvars.append(k)
                tk.Label(text=v["DisplayName"]).grid(column=x, row=y)
                x += 1
                tk.Entry(textvariable=globalvars[k]).grid(column=x, row=y)
            elif v["Type"] == "RepeatField":
                tk.Button(text=v["DisplayName"], command=lambda: render(v["Descendants"])).grid(column=x, row=y)
            else:
                print("INVALID TYPE [" + v["Type"] + "] IN [" + k + "]")
        except Exception as errormessage:
            print("! FAILED TO IMPORT " + k)
            print(errormessage)

render(form)
window.mainloop()