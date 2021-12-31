export const Message = {
    sendToContent: function ({ method, data }) {
        return new Promise((res, rej) => {
            const requestId = Math.random().toString(36).substr(2, 9);
            window.addEventListener('message', function responseHandler(e) {
                const response = e.data;
                if (
                    typeof response !== 'object' ||
                    response === null ||
                    !response.target
                )
                    return;
                window.removeEventListener('message', responseHandler);
                if (response.error) rej(response.error);
                else res(response);
            });
            window.postMessage(
                {
                    method,
                    data,
                    sender: 'webpage',
                    id: requestId,
                },
                window.origin
            );
        });
    },
}