# CRUD-ObservabilityV1

## Description

I have developed a basic CRUD app that is a simple dashboard for posting short messages using Gin Gonic (Golang), Next.js and MongoDB. The reason I built this app was to be able to show my technical skills when building observability into my program.

I have used prometheus for the backend with grafana and used datadog for the frontend and have  Everything is built locally so far.

## Running the Program

1. Using Docker
   
The program can be ran using docker by running the command `docker-compose up --build`, Once up you can use `localhost:3001` to navigate to the frontend, `localhost:3000` to navigate to grafana and finally datadog which I can access to show the status of the frontend.

2. Using Minikube

    Setting up DockerHub
    `docker build -t desmondgilmour/grafana-app:latest1 .`
    `docker build -t desmondgilmour/grafana-app:latest2 .`
    `docker push desmondgilmour/grafana-app:latest1`
    `docker push desmondgilmour/grafana-app:latest2`
   
    Setting up Minikube
    `minikube start --driver=docker`

    `kubectl apply -f api-deployment.yaml`
    `kubectl apply -f api-service.yaml`
    `kubectl apply -f frontend-deployment.yaml`
    `kubectl apply -f frontend-service.yaml`

    `kubectl get deployments`
    `kubectl get pods`
    `kubectl get services`

    The Website tutorial I followed
    https://semaphoreci.com/blog/prometheus-grafana-kubernetes-helm

    `kubectl port-forward api-946957848-tcx6t 8080:8080`
    `kubectl port-forward frontend-7666889558-qmzwn 3001:3001`

    `kubectl expose service prometheus-server --type=NodePort --target-port=9090 --name=prometheus-server-ext`
    `minikube service prometheus-server-ext`

    use the url provided from prometheus for this.

    `kubectl expose service grafana --type=NodePort --target-port=3000 --name=grafana-ext`
    `minikube service grafana-ext`

    `kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo`
