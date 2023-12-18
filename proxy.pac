function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.marriott.com")) {
        return "DIRECT";
    }
    return "PROXY 34.31.183.24:8050";
}
