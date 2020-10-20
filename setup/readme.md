# Setup instructions for tracker web


#### Settign up Angular app
```shell script
ng new tracker
cd tracker
ng serve -o
```

#### Docker build and push
- Ensure docker is installed in your loccal
1. Create the docker file. 
[Dockerfile](../tracker/Dockerfile)
2. Build the docker image
```
docker build . -t deiveehan/tracker:latest
```
3. Push the docker image to docker hub
```
docker push deiveehan/tracker:latest
```