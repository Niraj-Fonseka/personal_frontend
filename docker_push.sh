#!/bin/bash
docker login -u "$DOCKER_USERNAME" -p  "$DOCKER_PASSWORD"
docker push dockerfonseka/personal_frontend:latest



echo "---- Post to the Deployment Manager ----"


echo "Health check"
curl "$DEPLOY_HEALTH"
