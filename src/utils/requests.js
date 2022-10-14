export function getHtml(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }
        }

        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
        }
        xhr.send(null);
    });
}