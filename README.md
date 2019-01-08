# dlay-cli

```shell
# Passing credentials on execution
DLAY_WORKER=adlayer:8d8fs949rd9sfdf90300030fdfdf0 DLAY_SECRET=0df0oj300000-0099330 dlay worker biller --jobs biller.js

# Using dot files
dlay worker biller --jobs bill.js -e .env

# Using exported variables
dlay worker biller --jobs bill.js

# Using relative package.json
dlay worker biller

# Using child package.json
dlay worker luke ./bill ./collect
```
