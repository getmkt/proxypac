function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.marriott.com")) {
        return "DIRECT";
    }
    return "HTTPS proxy.example.com:8080";
}
