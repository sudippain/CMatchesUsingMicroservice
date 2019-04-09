cd favouriteservice
source env-variable.sh
mvn clean package
cd ..
cd userservice
source env-variable.sh
mvn clean package
cd ..