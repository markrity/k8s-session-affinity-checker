
1. Update config.target at `/test/stick.yaml` 


    -t, --target <url>            Set target URL

    artillery run test/stick.yaml

    -e, --environment <name>      Specify the environment to be used


    artillery run test/stick.yaml -v '{"version": "666"}'

    

`docker build . -t dapulse/version-get:test1`
`docker push dapulse/version-get:test1`


kubectl set env deployment/version-get-deployment VERSION=123 -n version