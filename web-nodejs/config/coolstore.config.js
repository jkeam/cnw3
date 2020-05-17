var config = {
    API_ENDPOINT: 'gateway-coolstore.' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    SECURE_API_ENDPOINT: 'secure-gateway-coolstore.' + process.env.SECURE_COOLSTORE_GW_SERVICE,
    SSO_ENABLED: process.env.SSO_URL ? true : false,
    BROKER_ENDPOINT: {}
};

if (process.env.COOLSTORE_GW_ENDPOINT != null) {
    config.API_ENDPOINT = process.env.COOLSTORE_GW_ENDPOINT;
} else if (process.env.COOLSTORE_GW_SERVICE != null) {
    config.API_ENDPOINT = process.env.COOLSTORE_GW_SERVICE + '.' + process.env.OPENSHIFT_BUILD_NAMESPACE;
}


if (process.env.SECURE_COOLSTORE_GW_ENDPOINT != null) {
    config.SECURE_API_ENDPOINT = process.env.SECURE_COOLSTORE_GW_ENDPOINT;
} else if (process.env.SECURE_COOLSTORE_GW_SERVICE != null) {
    config.SECURE_API_ENDPOINT = process.env.SECURE_COOLSTORE_GW_SERVICE + '.' + process.env.OPENSHIFT_BUILD_NAMESPACE;
}

if (process.env.COOLSTORE_BROKER_ENDPOINT != null) {
    config.BROKER_ENDPOINT = process.env.COOLSTORE_BROKER_ENDPOINT;
} else 
{
    config.BROKER_ENDPOINT = null;
}

module.exports = config;
