# dlay-cli

## Credentials

### Exported env var
```shell
DLAY_WORKER="adlayer:8d8fs949rd9sfdf90300030fdfdf0"
DLAY_SECRET="0df0oj300000-0099330"
dlay worker leia --jobs bill.js
```

### Command
```shell
# Passing credentials on execution
DLAY_WORKER=adlayer:8d8fs949rd9sfdf90300030fdfdf0 DLAY_SECRET=0df0oj300000-0099330 dlay worker biller --jobs biller.js
```

### dotfiles
```shell
touch .env
echo "DLAY_WORKER="adlayer:8d8fs949rd9sfdf90300030fdfdf0"" >> .env
echo "DLAY_SECRET="0df0oj300000-0099330"" >> .env

dlay worker lando --jobs bill.js -e .env
```

## Workers

### Explicit job files
```shell
dlay worker leia --jobs bill.js
```

### Multiple job files
```shell
dlay worker leia --jobs bill.js collec.js
```

### Relative module as job
```shell
dlay worker biller
```

### Child module as a job
```shell
dlay worker luke --jobs ./bill ./collect
```

## Jobs

### Deploy file
```shell
dlay job deploy index.js
```

### Deploy the package
```shell
dlay job deploy
```
