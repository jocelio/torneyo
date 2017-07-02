# Torneyo



Laravel Lumen and React

## Running Mysql with Docker
```
docker run \
    -d -t \
    --name mysqldb \
    -p 3306:3306 \
    -v ~/dev/mysql-storage/:/var/lib/mysql \
    -e MYSQL_USER=root \
    -e MYSQL_ROOT_PASSWORD=s3cr3t \
    -e MYSQL_DATABASE=torneyo \
    mysql
```
## License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
