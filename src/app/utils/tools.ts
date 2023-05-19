export function numFormatter(num: any) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num < 900) {
        return num;
    }
}

export function Ucase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


export function isInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getDate() {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    return datetime;
}

export function uid() {
    let a = new Uint32Array(3);
    window.crypto.getRandomValues(a);
    return (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g, "").substring(0, 9);
}

export function URLParser(url: string) {
    // http://localhost:4200/#/editName?id=16&color=orange&size=M
    // url = " http://localhost:4200/#/editName?id=16&color=orange&size=M";
    let paramString = url.split("?")[1];
    return `?${paramString}`;
}

export function secondsTOHHMMSS(sec: number) {
    let sec_num = parseInt(`${sec}`, 10)
    let hours = Math.floor(sec_num / 3600)
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}