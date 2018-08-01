### Docker build 

``` 
docker build -t sample-app .
```

### Docker run 

```
docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm \
  sample-app
```

can use the expansion pannels for resume expansion and project expansion