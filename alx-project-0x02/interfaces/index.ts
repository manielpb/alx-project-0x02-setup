export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onSubmit: (data: CardProps) => void;
    onClose: () => void;
}