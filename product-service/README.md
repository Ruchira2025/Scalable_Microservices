# ecom-product-service
This microservice featuring product service for a ecommerce application, This has been done as part of college project

## folder structure
ecom-product-service
   1. config/  // this folder contains db configurations details needed for the product services
   2. controllers/ // this folder contains business logic to perform crud operationd needed for the service
   3. models/ // models contains request and response type/model structure of the product service
   4. routes/ // routes contains logic for the URL mapping for the api.
   main.go file used to call handlers to with start of services.
   Docker file used to create docker docker image to deploy service.
   .gitignore file used to add those files which needs to avoid adding in git repo.
   go.mod & go.sum having all the dependency package needed for this service.

### Rest APIs:
     1. GET	/products	                ///  List all products
     2. GET	/products/:id	            ///  Get a product
     3. POST	/products	            ///  Add a product
     4. PUT	/products/:id	            ///  Update a product
     5. DELETE	/products/:id	        ///  Delete a product
     6. GET	/products/:id/availability	///  Check availability

### Steps to deploy product service
  1. clone this repo using "git clone https://github.com/vaisali-ch/ecom-product-service.git"
  2. go to ecom-product-service repo
  3. run 'docker build .' command to build docker image
  4. get docker imageID using command 'docker image ls'.
  4. run 'docker tag <image-id> docker-repo-path:tag (// in mycase it is https://hub.docker.com/repositories/myusername).
  5. run 'docker push docker-repo-path:tag' to push docker image to docker hub.
  6. use same image path (docker-repo-path:tag) into product-service.yaml file to deploy it as service.
  7. run command 'kubectl deploy -f product-service.yaml' to deploy it as service.