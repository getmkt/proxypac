function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.marriott.kom")) {
        return "DIRECT";
    }
    return "PROXY 34.31.183.24:8050";
}
