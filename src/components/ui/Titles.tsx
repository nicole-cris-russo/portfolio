import { TypingText, TypingTextCursor } from '../animate-ui/primitives/texts/typing'

export const Title = ({ text }: { text: string }) => {
    return (
        <h1 className="text-2xl md:text-5xl max-md:text-center font-bold text-end min-h-[48px]">
            <TypingText text={text}>
                <TypingTextCursor className="h-[40px]! w-1! ml-1!" />
            </TypingText>
        </h1>
    )
}
