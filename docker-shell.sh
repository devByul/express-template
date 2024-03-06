docker build -t my-node-app -f ./Dockerfile .

# local
docker run --env NODE_MODE=local -p 9999:7070 my-node-app

# develop 
docker run --env NODE_MODE=dev -p 9999:7071 my-node-app

# production
docker run --env NODE_MODE=prod -p 9999:7072 my-node-app
