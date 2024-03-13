const OpenAI = require("openai");
require('dotenv').config()


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const textEmbeddings = async(splittedText) => {

    const vectorArr = []
   
    if (typeof(splittedText) == "string") {
        const embedding = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: splittedText,
            encoding_format: "float",
        });

        return embedding.data[0].embedding
      
        
       }
       else{
        await Promise.all(splittedText.map(async(item) => {
           const tempObj = {};
           tempObj['content'] = item;
           const embedding = await openai.embeddings.create({
               model: "text-embedding-3-small",
               input: item,
               encoding_format: "float",
           });

           tempObj['embedding'] = embedding.data[0].embedding;
           vectorArr.push(tempObj);
       }));
       return vectorArr
    }
}

const chat = async(query) => {
    const userQuery = query[query.length-1].content
    console.log("thius is user query",userQuery)

    console.log("this is context arr",contextArr)
    var transcriptarr = []
    await simmilarEmbeddings.map((item)=>{
        transcriptarr.push(item.content)
    })

    const chatArr = [
        {"role": "system", "content": `As a medical chatbot named EasyDocAI, your task is to answer patient questions about their prescriptions. You should provide complete, scientifically-grounded, and actionable answers to queries.
        Remember to introduce yourself as EasyDocAI only at the start of the conversation.`},
        ...contextArr,
        {"role": "user", "content": `Context: ${transcriptarr} Question: ${userQuery}`},
        ]
    console.log(chatArr)

    const completion = await openai.chat.completions.create({
        messages:chatArr ,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        model: "gpt-4",
      });

      console.log(completion.choices[0].message.content);
    

      return completion.choices[0].message
    }






module.exports = {
    textEmbeddings: textEmbeddings,
    chat: chat
}