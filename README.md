
1. Update config.target at `/test/stick.yaml` 
2. Look for `x-service-version` , it can be changed to other header name.


Build different versions of app, to deploy them to k8s later.
`docker build . -t ORG/version-get:test1`

`docker push ORG/version-get:test1`


kubectl set env deployment/version-get-deployment VERSION=123 -n version



https://artillery.io/ 

`$ npm install -g artillery`

artillery commands.
```bash

    -t, --target <url>            Set target URL

    artillery run test/stick.yaml

    -e, --environment <name>      Specify the environment to be used


    artillery run test/stick.yaml -v '{"version": "666"}'
```