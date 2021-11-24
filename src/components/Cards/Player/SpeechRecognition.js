import { React, useEffect }from 'react' ;
import SpeechRecognition, { useSpeechRecognition, } from "react-speech-recognition";

export default function KaraokeSpeechRecognition(props) {

    const commands = [
        {command: ["Yo pensé que podía quedarme sin ti y no puedo"], callback: () => props.setScore(props.score + 10), isFuzzyMatch: true, fuzzyMatchingThreshold: 0.2}
    ]

    const { transcript, resetTranscript } = useSpeechRecognition({ commands });

    useEffect(() => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return null;
          }
    })

    useEffect(() => {
        if(props.isPlaying){
            SpeechRecognition.startListening({
                continuous: SpeechRecognition.browserSupportsSpeechRecognition(),
                language: "es-CR",
             });
        } else {
            SpeechRecognition.stopListening(); 
        }
    })

    useEffect(() => {
        if(props.isStop){
            resetTranscript(); 
        }
    })

    return(
        <>
        {/*<div>
            <h1 className="text-white">{transcript}</h1>
            <h1 className="text-white">{props.score}</h1>
        </div>*/}
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 mt-6 localBar">
                <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-white text-xl font-bold">En reproducción...</h6>
                </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0" style={{ display: 'flex', flexDirection: 'column', }}>
                    <p className="text-spotify-green">{transcript}</p>

                </div>
            </div>

        </>
    )
}
