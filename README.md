# ipnf

IP node finder.

## Install

`npm i -g ipnf`

## Usage

After installing:

`ipnf -r [CSV IP ranges] -p [[path]] -P [[port:80]] -t [[ms:5000]]`

Without installing:

`npx ipnf -r [CSV IP ranges] -p [[path]] -P [[port:80]] -t [[ms:5000]]`

Options:

- `-h, --help Output usage information`
- `-p, --path Path to use on each IP`
- `-P, --port <n> Port to use on each IP (defaults to 80)`
- `-r, --ranges IP ranges`
- `-t, --timeout <n> Timeout in ms (defaults to 5000)`
- `-v, --version Output the version number`

## IP ranges

### IPv4

- CIDR `x.x.x.x/x`
- Range `x.x.x.x-x.x.x.x`

### IPv6

- CIDR `x:x:x:x:x:x:x:x/x`
- Range `::x:x:x-::x:x:x`

## Examples

- Scans every IP in passed ranges looking for the _"images/logo.png"_ file:

  `ipnf -r xxx.xxx.xx1.0/24,xxx.xxx.xx2.0/24 -p images/logo.png`

- Scans 15 IPs from .10 to .25:

  `ipnf -r 192.168.0.10-192.168.0.25`

- Scans every IP at port 8080:

  `ipnf -r xxx.xxx.xx1.0/24 -P 8080`

- Waits 200ms before timeout:

  `ipnf -r xxx.xxx.xx1.0/24 -t 200`

## Requirements

Requires node 8 or above.
