# QuickProx

A simple TCP Reverse Proxy, installable globally on your machine via NPM

Proxies TCP traffic from a port on your machine to another host & port that your machine is able to reach

Underneath the hood, it uses the following npm packages - `net` & `pm2`

## Quick Start

Run the following in your command-line/terminal:

``` bash
sudo npm install -g pm2
npm install -g quickprox
```

Add a new proxy:

``` bash
quickprox add 3000 10.0.0.136 8080
```

This routes tcp requests that reach `localhost:3000` to be routed to `10.0.0.136:8080`

You can continue adding more proxies:

``` bash
quickprox add 5432 10.0.1.100 5322
quickprox add 8080 10.0.1.100 3001
quickprox add 3030 10.0.1.100 4002
```

For more details on how to list out proxies, delete proxies, check the status of proxies, continue reading the following sections.

## Setup

Ensure that you have PM2 installed, else the tool wont work:

``` bash
sudo npm install pm2 -g
```

Next, install `quickprox`:

``` bash
npm install -g quickprox
```

## Adding a TCP Proxy

Lets say you want requests that reach `localhost:3000` to be routed to `10.0.0.136:8080`:

``` bash
quickprox add 3000 10.0.0.136 8080
```

![image.png](https://github.com/joshuaquek/tcp-reverse-proxy/blob/master/.media/img_4.png)

## Viewing List of TCP Proxies

To see a list of all TCP proxies that you have created:

``` bash
quickprox list
```

Take note of the `id` column, that is the value you can use later when wanting to delete TCP proxies:
![image.png](https://github.com/joshuaquek/tcp-reverse-proxy/blob/master/.media/img_5.png)

## Deleting a TCP Proxy

Using the `id` value from `quickprox list`, you can then run

``` bash
quickprox delete id_here
```

For example, if I want to delete a proxy with id equal to 1, the I would run:

``` bash
quickprox delete 1
```

![image.png](https://github.com/joshuaquek/tcp-reverse-proxy/blob/master/.media/img_6.png)

## Deleting all TCP Proxies created

``` bash
quickprox delete all
```

![image.png](https://github.com/joshuaquek/tcp-reverse-proxy/blob/master/.media/img_8.png)

## Viewing Logs of TCP Proxies

To see the logs of each proxy, you can run:

``` bash
quickprox status
```

![image.png](https://github.com/joshuaquek/tcp-reverse-proxy/blob/master/.media/img_7.png)
As mentioned previously, this uses PM2, and you can then see each running proxy by using the arrow keys (up/down)

## Credits

Some code that was used in building this:
[https://gist.github.com/kfox/2313683](https://gist.github.com/kfox/2313683)

## License

MIT