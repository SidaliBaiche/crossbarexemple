# crossbarexemple


1 etape : 
        docker build . -t docker build . -t crossbar5 
2 etape :
        docker run -v  $PWD:/node -u 0 --rm --name=sidali -it -p 8080:8080 crossbar5
3 etape :
        docker run -v $PWD:/app -e CBURL="ws://sidali:8080/ws" -e CBREALM="realm1" --link=sidali --rm -it crossbario/autobahn-python:cpy3 python /app/client_component_publish.py
