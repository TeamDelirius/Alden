import json

def readLoadFile():
    file = open("toLoad.json", "r")
    txt = file.read()
    file.close()

    file = open("toLoad.json", "w")
    file.write("[]")
    file.close()
    return txt

async def app(scope, receive, send):
    assert scope['type'] == 'http'

    await send({
        'type': 'http.response.start',
        'status': 200,
        'headers': [
            [b'content-type', b'text/plain'],
        ],
    })
    await send({
        'type': 'http.response.body',
        'body': bytes(readLoadFile(), 'utf-8'),
    })