
1. Update config.target at `/test/stick.yaml` 







    

Build different versions of version
`docker build . -t ORG/version-get:test1`
`docker push ORG/version-get:test1`


kubectl set env deployment/version-get-deployment VERSION=123 -n version


artillery commands.
```bash

    -t, --target <url>            Set target URL

    artillery run test/stick.yaml

    -e, --environment <name>      Specify the environment to be used


    artillery run test/stick.yaml -v '{"version": "666"}'
```