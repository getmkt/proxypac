function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.marriott.com")) {
        return "DIRECT";
    }
    return "PROXY 103.139.47.170:8080";
}
