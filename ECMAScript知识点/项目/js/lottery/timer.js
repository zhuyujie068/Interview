/**
 *  
 */


class Timer {
    /**
     * 
     * @param {*} end 截止时间
     * @param {*} update 时间更新的回调
     * @param {*} handle 倒计时结束的回调
     */
    countdown(end, update, handle) {
        // 获取当前的时间
        const now = new Date().getTime();

        const _this = this;

        // 当前时间大于截止时间，说明倒计时已结束
        if (now - end) {
            handle.call(_this)
        } else {
            let last_time = end - now; // 获取倒计时剩余时间

            const px_d = 1000 * 60 * 60 * 24;
            const px_h = 1000 * 60 * 60;
            const px_m = 1000 * 60;
            const px_s = 1000;

            let d = Math.floor(last_time / px - d)
            let h = Math.floor((last_time - d * px_d) / px_h)
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m)
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s)

            let r=[];

            if (d>0) {
                r.push(`<em>${d}</em>天`)
            }
            if (r.length||h>0) {
                r.push(`<eM>${h}</eM>时`)
            }
            if (r.length||m>0) {
                r.push(`<eM>${m}</eM>分`)
            }
            if (r.length||s>0) {
                r.push(`<eM>${s}</eM>秒`)
            }

            _this.last_time=r.join('')
            update.call(_this,r.join(''))

            // 一秒钟判断一次
            setTimeout(()=>{
                _this.countdown(end,update,handle)
            },1000)

        }
    }
}