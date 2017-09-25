/**
 * 自己封装的js工具库
 * @type {Object}
 */
var util = {
    /**
     * 字符串去空格
     * @param  {String} str  传入的目标字符串
     * @param  {Number} type 选择去空格的类型：1为去除所有空格、2为去除前后空格、
     *                       3为去除前空格、4为去除后空格
     * @return {String}      返回结果字符串
     */
    trim: function(str, type) {
        if (typeof str === "string" && typeof type === "number") {
            switch (type) {
                case 1:
                    return str.replace(/\s+/g, "");
                case 2:
                    return str.replace(/(^\s*)|(\s*$)/g, "");
                case 3:
                    return str.replace(/^\s*/g, "");
                case 4:
                    return str.replace(/\s*$/g, "");
                default:
                    throw "Can not find the corresponding operation!";
            }
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 重复循环字符串
     * @param  {String} str   传入要循环的字符串
     * @param  {Number} count 循环次数
     * @return {String}       循环之后的字符串
     */
    repeatStr: function(str, count) {
        if (typeof str === "string" && typeof count === "number") {
            var text = "";
            for (var i = 0; i < count; i++) {
                text = text + str;
            }
            return text;
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 字符串大小写转换
     * @param  {String} str 传入的字符串
     * @return {String}     返回转换好的字符串
     */
    toggleCase: function(str) {
        if (typeof str === "string") {
            var strArr = str.split("");
            var resStr = "";
            strArr.forEach(function(item) {
                if (/^[a-z]+/.test(item)) {
                    resStr = resStr + item.toUpperCase();
                } else if (/^[A-Z]+/.test(item)) {
                    resStr = resStr + item.toLowerCase();
                } else {
                    resStr = resStr + item;
                }
            });
            return resStr;
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 查找相应字符串的位置
     * @param  {String} str    传入的字符串
     * @param  {String} subStr 要查找的字符串
     * @return {String}        返回要查找的字符串首字符的位置
     */
    searchStr: function(str, subStr) {
        if (typeof str === "string" && typeof subStr === "string") {
            return str.split(subStr).length - 1;
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 检查参数的类型是否符合条件(可根据需求修改)
     * @param  {String} str  传入的字符串
     * @param  {String} type 要符合的类型，例如phone，email，IDcard15等
     * @return {Boolean}     返回的布尔值
     */
    checkParametersType: function(str, type) {
        if (typeof str === "string" && typeof type === "string") {
            switch (type) {
                case "phone":
                    return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
                case "email":
                    return /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/.test(str);
                case "IDcard15":
                    return /^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/.test(str);
                case "IDcard18":
                    return /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$/.test(str);
                case "chinese":
                    return /^[\\u4e00-\\u9fa5]{0,}$/.test(str);
                case "qq":
                    return /[1-9][0-9]{4,}/.test(str);
                case "internetURL":
                    return /^http:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(str);
                case "password":
                    // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线(可根据需求修改)
                    return /^[a-zA-Z]\w{5,17}$/.test(str);
                case "number":
                    return /^[0-9]*$/.test(str);
                case "english":
                    return /^[a-zA-Z]+$/.test(str);
                case "text":
                    return /^\w+$/.test(str);
                case "lowerWord":
                    return /^[a-z]+$/.test(str);
                case "upperWord":
                    return /^[A-Z]+$/.test(str);
                default:
                    throw "No such type!";
            }
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 检查密码强度等级
     * @param  {String} str 传入的密码串
     * @return {Number}     返回的强度等级（最高为4级）
     */
    checkPasswordLevel: function(str) {
        if (typeof str === "string") {
            var level = 0;
            if (str.length < 5) {
                return level;
            }
            if (/[0-9]/.test(str)) {
                level++;
            }
            if (/[a-z]/.test(str)) {
                level++;
            }
            if (/[A-Z]/.test(str)) {
                level++;
            }
            if (/[\.|-|_]/.test(str)) {
                level++;
            }
            return level;
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 数组去重函数
     * @param  {Array} arr 传入的数组
     * @return {Array}     去重之后的数组
     */
    noRepeatArray: function(arr) {
        if (Array.isArray(arr)) {
            return arr.filter(function(item, index, arr) {
                return arr.indexOf(item) === index;
            });
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 获取数字数组中的最大值
     * @param  {Array} arr 传入的数字数组
     * @return {Number}     返回的最大值
     */
    maxInArray: function(arr) {
        if (Array.isArray(arr)) {
            var res = arr.every(function(item, index, arr) {
                return typeof item === "number";
            });
            if (res) {
                return Math.max.apply(null, arr);
            } else {
                throw "Not a digital array!";
            }
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 获取数字数组中的最小值
     * @param  {Array} arr 传入的数字数组
     * @return {Number}     返回的最小值
     */
    minInArray: function(arr) {
        if (Array.isArray(arr)) {
            var res = arr.every(function(item, index, arr) {
                return typeof item === "number";
            });
            if (res) {
                return Math.min.apply(null, arr);
            } else {
                throw "Not a digital array!";
            }
        } else {
            throw "Incorrect Parameter Type！";
        }
    },
    /**
     * 格式化日期
     * @param  {Date} date   要格式化的日期，不传时默认当前时间，也可以是一个时间戳
     * @param  {String} fmt  目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，
     *                       默认：yyyy-MM-dd HH:mm:ss
     * @return {String}      返回格式化好的字符串
     */
    formatDate: function(date, fmt) {
        date = typeof date === "undefined" ? new Date() : date;
        date = typeof date === "number" ? new Date(date) : date;
        fmt = fmt || "yyyy-MM-dd HH:mm:ss";
        var fmtObj = {
            'y': date.getFullYear(),
            'M': date.getMonth() + 1,
            'd': date.getDate(),

            // 季度
            'q': Math.floor((date.getMonth() + 3) / 3),

            // 星期，注意是0-6
            'w': date.getDay(),

            // 24小时制
            'H': date.getHours(),

            // 12小时制
            'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
            'm': date.getMinutes(),
            's': date.getSeconds(),
            'S': date.getMilliseconds()
        };
        var week = ['天', '一', '二', '三', '四', '五', '六'];
        for (var i in fmtObj) {
            fmt = fmt.replace(new RegExp(i + '+', 'g'), function(item) {
                var val = fmtObj[i] + '';
                if (i == 'w') {
                    return (item.length > 2 ? '星期' : '周') + week[val];
                }

                for (var j = 0, len = val.length; j < item.length - len; j++) {
                    val = '0' + val;
                }
                return item.length == 1 ? val : val.substring(val.length - item.length);
            });
        }
        return fmt;
    },
    /**
     * 将日期转换成友好格式显示
     * @param  {Date} date   传入的日期，可以为空和时间戳
     * @return {String}      返回日期的友好格式显示
     */
    formatDateToFriendly: function(date) {
        date = typeof date === "undefined" ? new Date() : date;
        date = typeof date === "number" ? new Date(date) : date;
        var now = new Date();
        if ((now.getTime() - date.getTime()) < 60 * 1000) {
            return "刚刚";
        }
        var temp = this.formatDate(date, "yyyy年M月d");
        if (temp == this.formatDate(now, "yyyy年M月d")) {
            return this.formatDate(date, "HH:mm");
        }
        if (date.getFullYear() == now.getFullYear()) {
            return this.formatDate(date, 'M月d日');
        }
        return temp;
    },
};
