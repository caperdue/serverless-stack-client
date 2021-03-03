const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-api-dev-serverlessdeploymentbucket-22otw05s1o0y",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://lntnxc9quf.execute-api.us-east-2.amazonaws.com"
    },
    cognito: {
        REGION: "us-east-2", 
        USER_POOL_ID: "us-east-2_0p7KVAW7d", 
        APP_CLIENT_ID: "3rttdu9am0gle2g0s6igd10k69", 
        IDENTITY_POOL_ID: "us-east-2_0p7KVAW7d",
    },
}
export default config