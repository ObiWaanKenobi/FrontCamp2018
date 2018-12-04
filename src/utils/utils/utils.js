class Utils {
    static formatDate(date) {
        return new Date(date).toUTCString().substring(5, 16);
    }
}

export {Utils};
