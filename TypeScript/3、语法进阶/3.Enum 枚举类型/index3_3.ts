enum Status {
    OFFLINE,
    ONLINE = 5,
    DELETED
};

// enum 枚举 数据类型可以反向推断获取，默认下标从 0 开始递增
console.log(Status.ONLINE) // 5
console.log(Status[6]) // DELETED


// 应用场景
function getResult(status) {
    if (status === Status.OFFLINE) {
        return 'offline';
    } else if (status === Status.ONLINE) {
        return 'online'
    } else if (status === Status.DELETED) {
        return 'deleted'
    }
    return 'error'
}

console.log(getResult(0)); // offline
