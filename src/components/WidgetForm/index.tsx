import { useState } from "react";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import otherImageUrl from '../../assets/other.svg'
import { FeedbacktypeStep } from "../Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";

export const feedbackTypes = {
    PROBLEMA: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: "idea",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OUTRO: {
        title: "Outro",
        image: {
            source: otherImageUrl,
            alt: 'Imagem de uma nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null);

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedbackType ? (
                <FeedbacktypeStep onFeedbackTypeChanged={setFeedBackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com amor pela <a className="underline underline-offset-2">Isabel</a>
            </footer>
        </div>
    );
}