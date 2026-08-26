// Типы для проекта
export interface Project {
    id: number;
    title: string;
    description: string;
    stack: string;
    github_url: string | null;
    demo_url: string | null;
    image_url: string | null;
    created_at: string;
}

// Типы для формы обратной связи
export interface Feedback {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export interface FeedbackResponse {
    success: boolean;
    message: string;
    data: Feedback;
}

// Убираем дублирующий export type - он не нужен!
