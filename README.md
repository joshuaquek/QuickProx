# TCP Reverse Proxy
Proxies TCP traffic from a port on your machine to another host & port that your machine is able to reach

## Setup

Ensure that you have PM2 installed:
```bash
sudo npm install pm2 -g
```

Install rest of npm packages for this project:
```bash
npm install
```

## Running

Running on local:
```bash
npm run dev
```

Running on production using PM2:
```bash
npm start
```

## Credits
https://gist.github.com/kfox/2313683

## License
MIT