function isFilePath(_path) {

    var reg = /^.*(\/|\\)[^\\/:*?""<>|]+\.\w+$/;
    return reg.test(_path);

}

module.exports = isFilePath;