/**
     * @description 字符串分隔处理
     * eg:  str = 12345678910
     *      stringSplit(str,4,',') // -> 1234,5678,910
     *      stringSplit(str,[1,2,3]) // -> 1,23,456,78910
     * @param val
     * @param rule 规则 只支持字符串或数组
     * @return {string}
     */
function stringSplit (val, rule, symbol) {
    if (typeof val !== 'string') {
        throw 'function stringSplit val需为字符串';
    }
    rule = rule || [];//默认是数组
    symbol = symbol || ' ';//默认是空格
    let _valArr = val.replace(new RegExp(`\\${symbol}`, 'g'), '').split(''),//将空格replace为'',然后split为[, , ...]
        _snapArr = [], _snapStr = '';
    //判断param是否数组
    if (rule instanceof Array) {
        for (let i = 0, j = 0, l = rule.length; i < l; i++) {
            j += rule[i];
            if (_valArr[j + i]) {
                _valArr.splice(j + i, 0, symbol);//将空格作为分割符
            }
        }
        return _valArr.join('').trim();
    }
    //判断param是否数字
    if (typeof rule === 'number') {
        for (let i = 0; i < _valArr.length; i++) {
            //用临时数组储存每个添加后的字符串 最后拼接
            if (i > 0 && i % rule === 0) {
                _snapArr.push(_snapStr + symbol);
                _snapStr = '';
            }
            _snapStr += _valArr[i];
        }
        return (_snapArr.join('') + _snapStr).trim()
    }
    return val;
}