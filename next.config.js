module.exports = {

    compiler: {

        // Remove non-error console messages in production
        removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false
    }
}