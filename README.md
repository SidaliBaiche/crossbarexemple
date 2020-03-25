# crossbarexemple
1 etape : 
        docker build . -t docker build . -t toufikiot 
2 etape :
        docker run -v  $PWD:/node -u 0 --rm --name=toufik5 -it -p 8080:8080 toufikiot
3 etape :
        docker run -v $PWD:/app -e CBURL="ws://toufik5:8080/ws" -e CBREALM="realm1" --link=toufik5 --rm -it crossbario/autobahn-python:cpy3 python /app/client_component_publish.py
