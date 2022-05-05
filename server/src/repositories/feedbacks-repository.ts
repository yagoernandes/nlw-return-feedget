export interface IFeedback {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (feedback:IFeedback) => Promise<void>
}