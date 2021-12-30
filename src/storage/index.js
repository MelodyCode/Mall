/**Storage封装 */
const STORAGE_KEY = 'mall';//可以暂时理解为一个数据库的名称
export default{
    //存储值
    setItem(key,value,module_name) {
        if(module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
        
    },
    //获取某一个模块下面的属性eg：属性user下面的userName
    getItem(key,module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    //获取整个数据eg:{"user":{"userName":"jack","age":30,"sex":1}}
    getStorage() {
        //数据要符合json规范
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key,module_name) {
        let val = this.getStorage()
        if (module_name) {
            if(!val[module_name]) return;//当模块不存在时
            delete val[module_name][key];
        } else {
            //如果没有模块，则直接删除该属性
            delete val[key];
        }
        //重新写进去
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}