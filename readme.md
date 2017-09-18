# Torneyo


A full stack app built with Lumen and React.

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

## Install Heroku Buildpacks - PHP and Node configuration. https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app
```
    $ heroku buildpacks:clear
    $ heroku buildpacks:add heroku/php
    $ heroku buildpacks:add heroku/nodejs
```


## WebNeat - Quick usage to generate a RESTful resource
```
    php artisan wn:resource task "name;string;required;fillable project_id;integer:unsigned;numeric;fillable,key due;date;;date" --add=timestamps --belongs-to=project
    
```

## License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
