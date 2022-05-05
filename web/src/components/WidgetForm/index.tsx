import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep"
import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType|null>(null)
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

    function handleRestartFeedback(){
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center drop-shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

            {
                feedbackSent ? <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} /> : <>{
                    !feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
                    ):(
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackTypeRestartRequest={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )
                }</>
            }

            <footer className='text-xs text-neutral-400'>
                Feito com ♥️ por <a className='underline underline-offset-2' href='https://yagoernandes.com'>Yago Ernandes</a>
            </footer>
        </div>
    )
}