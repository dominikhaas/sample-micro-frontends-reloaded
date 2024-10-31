# sample-micro-frontends-reloaded
Sample directory for micro frontends implemented (used for talks)

## How to run
### Build and run logging-lib
```shell
cd logging-lib
npm run build
npm run serve
# service running on http://localhost:5001/
```

### Build and run profile
```shell
cd profile
npm run build
npm run start
# service running on http://localhost:8081/
```

### Build and run location
```shell
cd location
npm run build
npm run preview
# service running on http://localhost:4173/
```


### Build and run shell
```shell
cd qa-locations-shell
npm run dev
# service running on http://localhost:5173/
```

## Projects

| Project            | Description                                                                  |
|--------------------|------------------------------------------------------------------------------|
| qa-locations-shell | Root shell project implemented in Vue                                        |
| profile            | Micro frontend 'profile' implemented as Web Component in Svelte              |
| location           | Micro frontend 'location' implemented in Vue, exported via module federation |
| logging-lib        | Shared functionality, provided via module federation                         |

