docker build -t louismbuyu17/postget-client:latest -t louismbuyu17/postget-client:$SHA -f ./pgclient/Dockerfile ./pgclient
docker build -t louismbuyu17/postget-server:latest -t louismbuyu17/postget-server:$SHA -f ./pg_postserver/Dockerfile ./pg_postserver

docker push louismbuyu17/postget-client:latest
docker push louismbuyu17/postget-server:latest

docker push louismbuyu17/postget-client:$SHA
docker push louismbuyu17/postget-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/client-deployment client=louismbuyu17/postget-client:$SHA
kubectl set image deployments/server-deployment server=louismbuyu17/postget-server:$SHA
