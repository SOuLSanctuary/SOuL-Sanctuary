const { Connection, PublicKey, clusterApiUrl } = require("@solana/web3.js");

// Create a connection to the Solana devnet
const connection = new Connection(clusterApiUrl("devnet"));

/**
 * Fetch user data based on the provided public key.
 * @param {string} publicKeyString - The public key of the user.
 * @returns {object} - An object containing user data.
 */
const getUserData = async (publicKeyString) => {
    const publicKey = new PublicKey(publicKeyString);
    const balance = await connection.getBalance(publicKey);

    // Example structure for user data, you can expand this as needed
    const userData = {
        username: "exampleUser", // Placeholder, replace with actual user data
        publicKey: publicKeyString,
        balance: balance / 1e9, // Convert lamports to SOL
    };

    return userData;
};

module.exports = { getUserData };