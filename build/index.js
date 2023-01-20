"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    const responseMessage = `Hello World ${event.body}`;
    return {
        headers: {
            'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: JSON.stringify({
            message: responseMessage,
        })
    };
};
exports.handler = handler;
//# sourceMappingURL=index.js.map