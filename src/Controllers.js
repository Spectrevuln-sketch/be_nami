import { Message } from "./eventFunction"


export const SendCost = async (cost) => {
    const result = await Message.sendToContent({ method: 'send_cost', data: cost });
    console.log(result)
    return result.data
}
