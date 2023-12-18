function FindProxyForURL(url, host) {
    if (shExpMatch(host, '*.marriott.com')) {
        return 'DIRECT';
    }
    return 'PROXY proxy.example.com:8080; DIRECT';
}
