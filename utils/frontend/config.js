export default function getConfig() {
    const env = process.env.NEXT_PUBLIC_NEAR_NETWORK_ID || "testnet";
    switch (env) {
        case 'mainnet':
            return {
                networkId: 'mainnet',
                nodeUrl: 'https://rpc.mainnet.near.org',
                walletUrl: 'https://wallet.near.org',
                helperUrl: 'https://helper.mainnet.near.org',
                explorerUrl: 'https://explorer.mainnet.near.org',
                CONTRACT_ID: `pixeltoken.near`
            };
        case 'testnet':
        default:
            return {
                networkId: 'testnet',
                nodeUrl: 'https://rpc.testnet.near.org',
                walletUrl: 'https://wallet.testnet.near.org',
                helperUrl: 'https://helper.testnet.near.org',
                explorerUrl: 'https://explorer.testnet.near.org',
                CONTRACT_ID: `pixeltoken.testnet`
            };
    }
}
