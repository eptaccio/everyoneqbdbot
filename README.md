# everyoneqbdbot
mention all selected users in a telegram channel

## development
```bash
yarn
cp .env.example .env
yarn start
```

## deployment
```bash
npx vercel --prod
```

after deploy just call a GET on `<host>/` to configure telegram webhook