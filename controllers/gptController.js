const OpenAI = require('openai');
require('dotenv').config()




const diagnosis = async(message)=>{
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

    try{
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
              {
                "role": "system",
                "content": "Based on the provided transcript snippets from a doctor-patient consultation, parse the information to generate a differential diagnosis. The results should be organized as follows:\nDifferential Diagnosis: List each possible diagnosis with a model confidence score from 0-100 (example: [30]), 100 being most confident.\nPlease consider the patient's stated symptoms, their medical history, and any other relevant information presented in the transcript. The consultation snippets are as follows:"
              },
              {
                "role": "user",
                "content": `${message}`
              },
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
  
        formattedMsg=response.choices[0].message.content
        console.log(formattedMsg)
        return formattedMsg;

    }
    catch(err){
        console.log(err)
    }
}

const relatedQuestions = async(message)=>{
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

    try{
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
              {
                "role": "system",
                "content": `Based on the provided transcript snippets from a doctor-patient consultation, internally generate a differential diagnosis based on the patient's stated symptoms, their medical history, and any other relevant information presented in the transcript. Then, suggest potential questions the doctor could ask to facilitate the diagnosis process. The questions should be aimed at clarifying the diagnosis or gathering more information to refine the differential diagnosis. BUT DO NOT OUTPUT THE differential diagnosis. \nThe results should be formatted as follows:\nQuestions to Ask: Provide a list of top 3 relevant questions the doctor could ask to further clarify the diagnosis. The question is succint and short.\nThe consultation snippets are as follows:`
              },
              {
                "role": "user",
                "content": `${message}`
              },
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

        formattedMsg=response.choices[0].message.content
        console.log(formattedMsg)
        return formattedMsg;

    }
    catch(err){
        console.log(err)
    }
}

const clinicalNote = async({transcript, hint})=>{
    let prompt = `
    Based on the conversation transcript and doctor's hints provided below, generate a clinical note in the following format:
    Diagnosis:
    History of Presenting Illness:
    Medications (Prescribed): List current medications and note if they are being continued, or if any new ones have been added.
    Lab Tests (Ordered):
    Please consider any information in the transcript that might be relevant to each of these sections, and use the doctor's hint as a guide.

    ### Example
    Conversation Transcript:
    Patient: “I've been taking the Glycomet-GP 1 as you prescribed, doctor, but I'm still feeling quite unwell. My blood pressure readings are all over the place and my sugar levels are high.”
    Doctor: “I see, we may need to adjust your medications. Let's add Jalra-OD and Telmis to your regimen and see how you respond.”
    Doctor's Hint: The patient has uncontrolled diabetes and hypertension despite adherence to the Glycomet-GP 1.
    Clinical Note:
    Diagnosis: Uncontrolled Diabetes and Hypertension
    History of Presenting Illness: The patient has been adhering to their current medication regimen but the diabetes and hypertension seem uncontrolled.
    Medications (Prescribed):
    [Continue] Glycomet-GP 1 (tablet) | Glimepiride and Metformin
    [Added] Jalra-OD 100mg (tablet) | Vildagliptin
    [Added] Telmis 20 (Tablet)
    Lab Tests (Ordered): None
    Now, based on the following conversation and hints, please generate a clinical note:

    ### Conversation Transcript
    ${transcript}

    ### Doctor's Hint
    ${hint}
    `
}

const gptChat = async (req,res)=>{
    
    try{
        messages=req.body.messages // convo arr 
        convo_arr=[{"role": "system", "content": `As a medical chatbot named EasyDocAI, your task is to answer patient questions about their prescriptions. You should provide complete, scientifically-grounded, and actionable answers to queries.
        Remember to introduce yourself as EasyDocAI only at the start of the conversation.`},...messages]
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });
        const completion = await openai.chat.completions.create({
            messages:convo_arr,
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            model: "gpt-4",
          });

    
        const resi = completion.choices[0].message.content
        res.json({resi})
    }
    catch(err){
        console.log(err)
    }


}

module.exports = {
    diagnosis,
    relatedQuestions,
    gptChat
};





